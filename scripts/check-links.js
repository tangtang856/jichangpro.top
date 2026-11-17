/**
 * 机场PRO (jichangpro.top) 链接有效性与相对路径规范检查脚本
 * 严格核验：
 * 1. 站内所有 CSS、JS、图片及超链接必须使用相对路径，严禁以 "/" 开头
 * 2. 每一个相对路径链接必须在本地文件系统中有真实存在的目标文件
 * 确保在本地双击 (file://) 和线上均可 100% 顺畅访问
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

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
console.log(`🔗 机场PRO - 相对路径与死链深度核验`);
console.log(`审查页面总数: ${htmlFiles.length}`);
console.log(`=========================================\n`);

let totalLinksChecked = 0;
let absolutePathViolations = 0;
let brokenLinks = 0;

htmlFiles.forEach(file => {
  const fileDir = path.dirname(file);
  const relFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // 正则提取所有 href 和 src
  const linkRegex = /(?:href|src)=["']([^"']+)["']/gi;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const rawUrl = match[1].trim();
    totalLinksChecked++;

    // 排除外部链接、锚点、邮件
    if (
      rawUrl.startsWith('http://') ||
      rawUrl.startsWith('https://') ||
      rawUrl.startsWith('//') ||
      rawUrl.startsWith('mailto:') ||
      rawUrl.startsWith('tel:') ||
      rawUrl.startsWith('javascript:') ||
      rawUrl.startsWith('#')
    ) {
      continue;
    }

    // 1. 严禁以 "/" 开头的根绝对路径
    if (rawUrl.startsWith('/')) {
      absolutePathViolations++;
      console.error(`❌ [根绝对路径违规] 页面: ${relFile} 发现非法绝对路径: "${rawUrl}"`);
      continue;
    }

    // 2. 检查本地相对目标文件是否存在
    // 去除 query 和 hash
    const cleanUrl = rawUrl.split('?')[0].split('#')[0];
    if (!cleanUrl) continue;

    const resolvedPath = path.resolve(fileDir, cleanUrl);

    // 判断目标路径：若是目录，查看目录下是否存在 index.html
    let targetExists = false;
    if (fs.existsSync(resolvedPath)) {
      const stat = fs.statSync(resolvedPath);
      if (stat.isDirectory()) {
        targetExists = fs.existsSync(path.join(resolvedPath, 'index.html'));
      } else {
        targetExists = true;
      }
    }

    if (!targetExists) {
      brokenLinks++;
      console.error(`❌ [失效相对链接] 页面: ${relFile} 链接 "${rawUrl}" 解析路径不存在: ${resolvedPath}`);
    }
  }
});

console.log(`\n-----------------------------------------`);
console.log(`链接检查报告:`);
console.log(`已审查链接总数: ${totalLinksChecked}`);
console.log(`绝对路径违规: ${absolutePathViolations}`);
console.log(`失效相对死链: ${brokenLinks}`);
console.log(`-----------------------------------------\n`);

if (absolutePathViolations > 0 || brokenLinks > 0) {
  console.error(`❌ 链接核验未通过！请修正上述路径错误。`);
  process.exit(1);
} else {
  console.log(`✅ 完美！全站所有链接均严格采用标准相对路径，且所有目标文件均真实存在。`);
}
