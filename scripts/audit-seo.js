/**
 * 机场PRO (jichangpro.top) SEO 自动化质量审计脚本
 * 严格按照 Section 17 进行全站 HTML 代码深度审查
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOMAIN = 'jichangpro.top';

// 递归遍历所有 HTML 文件
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'scripts' && file !== 'docs') {
        getAllHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);
console.log(`\n=========================================`);
console.log(`🔍 机场PRO - 全站 SEO 技术审计`);
console.log(`扫描到的 HTML 页面总数: ${htmlFiles.length}`);
console.log(`=========================================\n`);

let totalPassed = 0;
let totalFailed = 0;
const titleMap = new Map();
const auditResults = [];

htmlFiles.forEach(file => {
  const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const errors = [];

  // 1. 检查 Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    errors.push('缺失 <title> 标签或内容为空');
  } else {
    const titleText = titleMatch[1].trim();
    if (titleMap.has(titleText)) {
      errors.push(`重复 Title: 与 ${titleMap.get(titleText)} 重复`);
    } else {
      titleMap.set(titleText, relPath);
    }
  }

  // 2. 检查 Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    errors.push('缺失 <meta name="description"> 或内容为空');
  }

  // 3. 检查 H1 标签唯一性
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches) {
    errors.push('页面缺失 <h1> 标签');
  } else if (h1Matches.length > 1) {
    errors.push(`页面存在多个 <h1> 标签 (发现 ${h1Matches.length} 个)`);
  }

  // 4. 检查 Canonical
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  if (!canonicalMatch) {
    errors.push('缺失 <link rel="canonical"> 标签');
  } else {
    const href = canonicalMatch[1];
    if (!href.startsWith(`https://${DOMAIN}/`)) {
      errors.push(`Canonical 域名不正确: ${href}`);
    }
    if (href.includes('localhost') || href.includes('127.0.0.1')) {
      errors.push(`Canonical 包含测试域名: ${href}`);
    }
  }

  // 5. 检查 Robots Meta
  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["'](.*?)["']/i);
  if (!robotsMatch) {
    errors.push('缺失 <meta name="robots"> 标签');
  }

  // 6. 检查结构化数据 (Schema JSON-LD)
  const schemaMatch = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  if (!schemaMatch) {
    errors.push('缺失 Schema JSON-LD 结构化数据');
  } else {
    try {
      JSON.parse(schemaMatch[1]);
    } catch (e) {
      errors.push(`Schema JSON-LD 语法解析错误: ${e.message}`);
    }
  }

  // 7. 检查页面内容体积（防空白页面）
  if (content.length < 500) {
    errors.push(`页面内容过短 (${content.length} 字节)，可能为空白模板`);
  }

  // 记录审计结果
  if (errors.length === 0) {
    totalPassed++;
    auditResults.push({ file: relPath, status: 'PASS', issues: [] });
    console.log(`[PASS] ${relPath}`);
  } else {
    totalFailed++;
    auditResults.push({ file: relPath, status: 'FAIL', issues: errors });
    console.error(`[FAIL] ${relPath}:`);
    errors.forEach(err => console.error(`   - ${err}`));
  }
});

console.log(`\n-----------------------------------------`);
console.log(`SEO 审计完成: 通过: ${totalPassed} | 失败: ${totalFailed}`);
console.log(`合格率: ${((totalPassed / htmlFiles.length) * 100).toFixed(1)}%`);
console.log(`-----------------------------------------\n`);

// 导出 JSON 报告以供汇总
fs.writeFileSync(path.join(ROOT_DIR, 'docs', 'audit-seo-result.json'), JSON.stringify(auditResults, null, 2), 'utf8');

if (totalFailed > 0) {
  process.exit(1);
}
