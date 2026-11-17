const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const stylePath = path.join(ROOT_DIR, 'css', 'style.css');
const magazinePath = path.join(ROOT_DIR, 'css', 'magazine-theme.css');

const styleContent = fs.readFileSync(stylePath, 'utf8');
const magazineContent = fs.readFileSync(magazinePath, 'utf8');

if (!styleContent.includes('Bento Hero 主画幅区')) {
  fs.writeFileSync(stylePath, styleContent + '\n\n' + magazineContent, 'utf8');
  console.log('✅ 已将 magazine-theme.css 成功合并至 css/style.css！');
} else {
  console.log('已包含杂志主题样式。');
}
