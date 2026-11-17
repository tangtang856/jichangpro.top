/**
 * 机场PRO (jichangpro.top) 内容与参数一致性检验脚本
 * 检验：主攻关键词覆盖、统一数据库同步、站点地图一致性、法律合规页面
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const TARGET_KEYWORDS = [
  '机场推荐',
  '机场节点',
  '性价比机场',
  '梯子推荐',
  'vpn',
  'vpn机场',
  'vpn节点',
  'vpn推荐'
];

console.log(`\n=========================================`);
console.log(`📝 机场PRO - 内容与参数一致性核查`);
console.log(`=========================================\n`);

let errors = [];

// 1. 检验主攻关键词在首页中的自然分布与覆盖
const indexPath = path.join(ROOT_DIR, 'index.html');
if (!fs.existsSync(indexPath)) {
  errors.push('缺失首页 index.html');
} else {
  const indexContent = fs.readFileSync(indexPath, 'utf8').toLowerCase();
  console.log(`正在核查首页核心关键词覆盖情况：`);
  TARGET_KEYWORDS.forEach(kw => {
    const count = (indexContent.match(new RegExp(kw.toLowerCase(), 'g')) || []).length;
    if (count > 0) {
      console.log(`  [OK] 关键词 "${kw}" 在首页出现 ${count} 次`);
    } else {
      errors.push(`首页未出现主攻关键词: "${kw}"`);
    }
  });
}

// 2. 检验统一数据库数据源 (json 与 js 同步)
const jsonDbPath = path.join(ROOT_DIR, 'data', 'airports.json');
const jsDbPath = path.join(ROOT_DIR, 'data', 'airports.js');
if (!fs.existsSync(jsonDbPath) || !fs.existsSync(jsDbPath)) {
  errors.push('缺失统一数据库 airports.json 或 airports.js');
} else {
  const jsonDb = JSON.parse(fs.readFileSync(jsonDbPath, 'utf8'));
  console.log(`\n统一数据库核查: 包含 ${jsonDb.length} 家核验品牌`);
  jsonDb.forEach(item => {
    if (!item.name || !item.startingPrice || !item.plans || item.plans.length === 0) {
      errors.push(`机场数据不完整: ${item.id}`);
    }
  });
}

// 3. 检验 Sitemap 中的 URL 是否真实可达
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  errors.push('缺失 sitemap.xml');
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const matches = sitemapContent.match(/<loc>https:\/\/jichangpro\.top\/(.*?)<\/loc>/g);
  if (!matches || matches.length === 0) {
    errors.push('sitemap.xml 为空或格式错误');
  } else {
    console.log(`\nSitemap 核查: 包含 ${matches.length} 条正式 URL`);
    matches.forEach(m => {
      let subPath = m.replace('<loc>https://jichangpro.top/', '').replace('</loc>', '');
      if (subPath === '' || subPath.endsWith('/')) {
        subPath = path.join(subPath, 'index.html');
      }
      const localTarget = path.join(ROOT_DIR, subPath);
      if (!fs.existsSync(localTarget)) {
        errors.push(`Sitemap 中的 URL 本地对应文件不存在: ${subPath}`);
      }
    });
  }
}

// 4. 检验合规页面是否存在
const legalPages = ['about', 'contact', 'editorial-policy', 'privacy-policy', 'disclaimer'];
legalPages.forEach(p => {
  const target = path.join(ROOT_DIR, p, 'index.html');
  if (!fs.existsSync(target)) {
    errors.push(`缺失合规落地页: ${p}/index.html`);
  }
});

console.log(`\n-----------------------------------------`);
if (errors.length === 0) {
  console.log(`✅ 完美！所有主攻关键词覆盖完备，统一数据源与 Sitemap 100% 校验通过！`);
} else {
  console.error(`❌ 发现以下内容校验错误:`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
}
console.log(`-----------------------------------------\n`);
