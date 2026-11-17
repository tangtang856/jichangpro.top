/**
 * 机场PRO (jichangpro.top) IndexNow 自动化提交脚本
 * 支持 Bing 与其他支持 IndexNow 协议的搜索引擎
 * 功能：单 URL 提交、批量提交、更新检测、Key验证、失败重试与响应日志
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'jichangpro.top';
const KEY = 'e198b1a37c444bb284dc84e859b867c4';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ROOT_DIR = path.resolve(__dirname, '..');

// 1. 验证本地 Key 文件是否存在
const localKeyPath = path.join(ROOT_DIR, `${KEY}.txt`);
if (!fs.existsSync(localKeyPath)) {
  console.error(`[Error] 未找到本地 IndexNow Key 验证文件: ${localKeyPath}`);
  console.log(`正在自动生成该 Key 验证文件...`);
  fs.writeFileSync(localKeyPath, KEY, 'utf8');
}

// 2. 解析待提交 URL 列表
function getTargetUrls() {
  const args = process.argv.slice(2);
  
  // 如果指定具体 URL
  if (args.length > 0 && !args.includes('--all')) {
    return args.filter(a => a.startsWith('http'));
  }

  // 默认：从 sitemap.xml 提取或者提取核心关键更新页面（避免每次盲目提交全量）
  const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const matches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (matches) {
      const allUrls = matches.map(m => m.replace(/<\/?loc>/g, ''));
      if (args.includes('--all')) {
        return allUrls;
      }
      // 默认提交近期更新的核心落地页（首页、核心推荐、排行榜）
      return allUrls.filter(u => 
        u === `https://${HOST}/` || 
        u.includes('/ranking/') || 
        u.includes('/recommend/')
      );
    }
  }

  return [
    `https://${HOST}/`,
    `https://${HOST}/ranking/overall/`,
    `https://${HOST}/ranking/value/`,
    `https://${HOST}/recommend/budget/`,
    `https://${HOST}/recommend/premium/`,
    `https://${HOST}/compare/`
  ];
}

const targetUrls = getTargetUrls();

console.log(`=========================================`);
console.log(`🚀 机场PRO - IndexNow 搜索引擎推送工具`);
console.log(`目标域名: ${HOST}`);
console.log(`API Key: ${KEY}`);
console.log(`Key Location: ${KEY_LOCATION}`);
console.log(`待提交 URL 数量: ${targetUrls.length}`);
console.log(`=========================================`);

if (targetUrls.length === 0) {
  console.log(`没有需要提交的 URL，程序退出。`);
  process.exit(0);
}

// 3. 构建 IndexNow Payload
const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: targetUrls
});

// 4. 发起 HTTP POST 请求并带重试机制
function submitToIndexNow(retryCount = 0) {
  const maxRetries = 2;
  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    },
    timeout: 10000
  };

  console.log(`正在向 api.indexnow.org 发起提交 (尝试次数: ${retryCount + 1})...`);

  const req = https.request(options, (res) => {
    let responseBody = '';
    res.on('data', (chunk) => { responseBody += chunk; });
    res.on('end', () => {
      console.log(`HTTP 响应状态码: ${res.statusCode} ${res.statusMessage}`);
      if (responseBody) {
        console.log(`响应内容: ${responseBody}`);
      }

      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`\n✅ IndexNow 提交成功！`);
        console.log(`【重要提醒】IndexNow 成功仅代表 Bing 与搜索引擎已接收到内容更新通知，并不代表网页已立即完成收录。收录取决于搜索引擎的质量评估与抓取配额。`);
      } else if (res.statusCode === 429) {
        console.warn(`⚠️ 遇到频次限制 (429 Too Many Requests)，请稍后再试。`);
      } else if (res.statusCode === 403) {
        console.error(`❌ Key 验证未通过 (403 Forbidden)，请确保 ${KEY_LOCATION} 可被公开访问。`);
      } else {
        console.warn(`⚠️ 收到非标准状态码: ${res.statusCode}`);
      }
    });
  });

  req.on('error', (err) => {
    console.error(`请求异常: ${err.message}`);
    if (retryCount < maxRetries) {
      console.log(`将在 3 秒后执行重试...`);
      setTimeout(() => submitToIndexNow(retryCount + 1), 3000);
    } else {
      console.error(`❌ 达到最大重试次数，提交失败。`);
    }
  });

  req.on('timeout', () => {
    req.destroy();
    console.error(`请求超时！`);
    if (retryCount < maxRetries) {
      setTimeout(() => submitToIndexNow(retryCount + 1), 3000);
    }
  });

  req.write(payload);
  req.end();
}

submitToIndexNow();
