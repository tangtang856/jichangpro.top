const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const jsonPath = path.join(ROOT_DIR, 'data', 'airports.json');
const jsPath = path.join(ROOT_DIR, 'data', 'airports.js');

const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 用户指定的精准排名顺序 (14个品牌)
const targetOrder = [
  'breezenet',      // 1. 微风网络 Breezenet
  'muguang',        // 2. 暮光网络
  'feimaoyun',      // 3. 飞猫云
  'wuyou',          // 4. 无忧
  'lingmao',        // 5. 灵猫
  'flashleap',      // 6. 闪跃 FlashLeap
  'firefly',        // 7. 萤火虫（Firefly）
  'kuajiecloud',    // 8. 跨界
  'yinxingren',     // 9. 隐形人
  'feiv',           // 10. 飞V
  'laddercloud',    // 11. 梯子云 LadderCloud
  'wavenet',        // 12. 浪网 WaveNet
  'lingdongcloud',  // 13. 灵动云
  'quanqiuyun'      // 14. 全球云
];

const ratingsMap = {
  'breezenet':     { overall: 9.8, stability: 9.7, speed: 9.8, value: 9.9 },
  'muguang':       { overall: 9.7, stability: 9.7, speed: 9.6, value: 9.5 },
  'feimaoyun':     { overall: 9.6, stability: 9.5, speed: 9.6, value: 9.8 },
  'wuyou':         { overall: 9.5, stability: 9.6, speed: 9.5, value: 9.4 },
  'lingmao':       { overall: 9.5, stability: 9.5, speed: 9.5, value: 9.3 },
  'flashleap':     { overall: 9.4, stability: 9.5, speed: 9.4, value: 9.2 },
  'firefly':       { overall: 9.4, stability: 9.3, speed: 9.4, value: 9.6 },
  'kuajiecloud':   { overall: 9.3, stability: 9.4, speed: 9.3, value: 9.3 },
  'yinxingren':    { overall: 9.3, stability: 9.5, speed: 9.3, value: 9.1 },
  'feiv':          { overall: 9.2, stability: 9.1, speed: 9.2, value: 9.7 },
  'laddercloud':   { overall: 9.2, stability: 9.2, speed: 9.3, value: 9.2 },
  'wavenet':       { overall: 9.1, stability: 9.3, speed: 9.3, value: 9.0 },
  'lingdongcloud': { overall: 9.1, stability: 9.2, speed: 9.1, value: 9.1 },
  'quanqiuyun':    { overall: 9.0, stability: 9.1, speed: 9.1, value: 9.2 }
};

const orderedData = [];
targetOrder.forEach((slug, idx) => {
  const item = rawData.find(x => x.slug === slug || x.id === slug);
  if (!item) {
    throw new Error(`找不到品牌: ${slug}`);
  }
  item.rank = idx + 1;
  if (ratingsMap[slug]) {
    item.ratings = ratingsMap[slug];
  }
  orderedData.push(item);
});

// 写回 json
fs.writeFileSync(jsonPath, JSON.stringify(orderedData, null, 2), 'utf8');

// 写回 js (供纯前端 compare.js 使用)
const jsContent = `/**
 * 机场PRO - 统一机场数据库 (供纯前端静态页面与比对工具调用)
 * 完美支持 file:// 协议本地直接打开与 Cloudflare Pages 线上部署
 */
window.AIRPORTS_DATA = ${JSON.stringify(orderedData, null, 2)};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.AIRPORTS_DATA;
}
`;
fs.writeFileSync(jsPath, jsContent, 'utf8');

console.log('✅ 已成功按指定顺序重新排序并更新 14 家品牌数据库与评分！');
orderedData.forEach(x => {
  console.log(`第 ${x.rank} 名: ${x.name} | 评分: ${x.ratings.overall} / 10 | 起步: ${x.currency}${x.startingPrice} | 券: ${x.coupon || '无'}`);
});
