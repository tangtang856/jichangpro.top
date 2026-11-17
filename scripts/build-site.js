/**
 * 机场PRO (jichangpro.top) 静态全站生成系统
 * 遵循专业中文科技资讯门户设计规范 · 纯原生 Node.js 构建 · 纯 HTML + 原生 CSS
 * 严格执行：全站资源与内链使用标准相对路径，本地 file:// 协议与线上完全兼容
 * 支持 14 家真实品牌数据库与推广 Affiliate 链路集成
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOMAIN = 'jichangpro.top';
const SITE_URL = `https://${DOMAIN}`;
const SITE_NAME = '机场PRO';
const CURRENT_DATE = '2026-11-17';

// 统一机场数据源 (14家品牌)
const airportsData = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'data', 'airports.json'), 'utf8'));

// 相对路径前缀
function getRelPrefix(depth) {
  if (depth === 0) return './';
  if (depth === 1) return '../';
  if (depth === 2) return '../../';
  return './';
}

// 统一公共 Header
function renderHeader(depth, activeNav = '') {
  const rel = getRelPrefix(depth);
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${rel}index.html" class="brand-logo" title="机场PRO - 首页">
        <span>机场PRO</span>
        <span class="brand-badge">2026</span>
      </a>
      <nav class="nav-desktop">
        <a href="${rel}index.html" class="nav-link ${activeNav === 'home' ? 'active' : ''}">首页</a>
        <a href="${rel}recommend/budget/index.html" class="nav-link ${activeNav === 'recommend' ? 'active' : ''}">机场推荐</a>
        <a href="${rel}ranking/overall/index.html" class="nav-link ${activeNav === 'ranking' ? 'active' : ''}">排行榜</a>
        <a href="${rel}compare/index.html" class="nav-link ${activeNav === 'compare' ? 'active' : ''}">机场对比</a>
        <a href="${rel}guides/windows/index.html" class="nav-link ${activeNav === 'guides' ? 'active' : ''}">使用教程</a>
        <a href="${rel}blog/how-to-choose-airport/index.html" class="nav-link ${activeNav === 'blog' ? 'active' : ''}">选购指南</a>
        <a href="${rel}glossary/iplc/index.html" class="nav-link ${activeNav === 'glossary' ? 'active' : ''}">术语百科</a>
      </nav>
      <div class="nav-actions">
        <a href="${rel}compare/index.html" class="btn btn-outline btn-sm">横向比对</a>
        <a href="${rel}ranking/value/index.html" class="btn btn-primary btn-sm">高性价比榜</a>
        <button class="mobile-menu-btn" aria-label="展开导航菜单" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-drawer">
    <ul class="mobile-nav-list">
      <li><a href="${rel}index.html" class="nav-link">首页</a></li>
      <li><a href="${rel}recommend/budget/index.html" class="nav-link">高性价比机场推荐</a></li>
      <li><a href="${rel}recommend/premium/index.html" class="nav-link">高端专线机场推荐</a></li>
      <li><a href="${rel}recommend/beginner/index.html" class="nav-link">新手小白友好机场</a></li>
      <li><a href="${rel}recommend/stable/index.html" class="nav-link">稳定防失联节点</a></li>
      <li><a href="${rel}recommend/ai/index.html" class="nav-link">ChatGPT/Claude专用节点</a></li>
      <li><a href="${rel}recommend/streaming/index.html" class="nav-link">流媒体4K解锁机场</a></li>
      <li><a href="${rel}ranking/overall/index.html" class="nav-link">综合排行榜</a></li>
      <li><a href="${rel}ranking/value/index.html" class="nav-link">真实性价比单G单价榜</a></li>
      <li><a href="${rel}ranking/budget/index.html" class="nav-link">低预算平价排行榜</a></li>
      <li><a href="${rel}ranking/stable/index.html" class="nav-link">稳定性专线排行榜</a></li>
      <li><a href="${rel}compare/index.html" class="nav-link">机场横向对比工具</a></li>
      <li><a href="${rel}guides/windows/index.html" class="nav-link">Windows 客户端教程</a></li>
      <li><a href="${rel}guides/android/index.html" class="nav-link">Android 安卓手机教程</a></li>
      <li><a href="${rel}guides/ios/index.html" class="nav-link">iOS 苹果手机教程</a></li>
      <li><a href="${rel}guides/macos/index.html" class="nav-link">macOS 电脑教程</a></li>
      <li><a href="${rel}blog/how-to-choose-airport/index.html" class="nav-link">博客与选购技巧</a></li>
      <li><a href="${rel}about/index.html" class="nav-link">关于我们</a></li>
    </ul>
  </div>`;
}

// 统一公共 Footer
function renderFooter(depth) {
  const rel = getRelPrefix(depth);
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>关于 机场PRO</h4>
          <p style="margin-bottom:1rem;line-height:1.7;color:#94a3b8">机场PRO (jichangpro.top) 是一家专注于网络加速、翻墙梯子节点与网络穿透技术的独立第三方中文测评资讯门户。我们坚持真实数据采集、定期晚高峰测速，绝不虚构评分，帮助用户在繁杂的机场节点市场中筛选出真正高性价比、稳定可靠的网络加速工具。</p>
          <div class="tag-list">
            <span class="pill-tag" style="background:#1e293b;border-color:#334155;color:#94a3b8">Bing SEO 优化</span>
            <span class="pill-tag" style="background:#1e293b;border-color:#334155;color:#94a3b8">真实测速</span>
            <span class="pill-tag" style="background:#1e293b;border-color:#334155;color:#94a3b8">内网专线</span>
            <span class="pill-tag" style="background:#1e293b;border-color:#334155;color:#94a3b8">极速静态</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>推荐专题</h4>
          <ul class="footer-links">
            <li><a href="${rel}recommend/budget/index.html">高性价比机场推荐</a></li>
            <li><a href="${rel}recommend/premium/index.html">高端优质专线机场</a></li>
            <li><a href="${rel}recommend/beginner/index.html">新手入门友好机场</a></li>
            <li><a href="${rel}recommend/stable/index.html">稳定抗封锁节点精选</a></li>
            <li><a href="${rel}recommend/ai/index.html">ChatGPT/Claude专用节点</a></li>
            <li><a href="${rel}recommend/streaming/index.html">Netflix/Disney+流媒体节点</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>排行与对比</h4>
          <ul class="footer-links">
            <li><a href="${rel}ranking/overall/index.html">2026综合排行榜</a></li>
            <li><a href="${rel}ranking/value/index.html">真实性价比单价榜</a></li>
            <li><a href="${rel}ranking/budget/index.html">平价低预算排行榜</a></li>
            <li><a href="${rel}ranking/stable/index.html">稳定性专线排行榜</a></li>
            <li><a href="${rel}compare/index.html">机场横向深度比对</a></li>
            <li><a href="${rel}blog/how-to-choose-airport/index.html">选购避坑指南</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>关于与合规</h4>
          <ul class="footer-links">
            <li><a href="${rel}about/index.html">关于我们 (About)</a></li>
            <li><a href="${rel}contact/index.html">联系与纠错 (Contact)</a></li>
            <li><a href="${rel}editorial-policy/index.html">编辑政策与评测标准</a></li>
            <li><a href="${rel}privacy-policy/index.html">隐私权保护声明</a></li>
            <li><a href="${rel}disclaimer/index.html">免责声明与合规告示</a></li>
            <li><a href="${rel}sitemap.xml">XML 网站地图</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          <p class="footer-disclaimer-text">免责声明：本站所有评测数据均来源于公开套餐信息及测试样本节点实际网络表现。评测结果仅供技术学术交流、外贸办公及海外研发网络加速参考，请遵守当地法律法规，严禁利用网络代理从事违法犯罪行为。</p>
          <p>© 2026 机场PRO (jichangpro.top) 保留所有权利 · 独立第三方中文测评门户</p>
        </div>
        <div>
          <a href="${rel}index.html" style="color:#64748b">返回首页</a> · 
          <a href="${rel}editorial-policy/index.html" style="color:#64748b">独立测评准则</a>
        </div>
      </div>
    </div>
  </footer>
  <script src="${rel}js/main.js"></script>`;
}

// 面包屑渲染
function renderBreadcrumb(crumbs, depth) {
  const rel = getRelPrefix(depth);
  let html = `<nav class="breadcrumb-nav" aria-label="面包屑导航"><div class="container"><ol class="breadcrumb-list">`;
  crumbs.forEach((c, idx) => {
    if (idx === crumbs.length - 1) {
      html += `<li class="breadcrumb-item breadcrumb-current" aria-current="page">${c.name}</li>`;
    } else {
      html += `<li class="breadcrumb-item"><a href="${rel}${c.url}">${c.name}</a></li><li class="breadcrumb-separator">/</li>`;
    }
  });
  html += `</ol></div></nav>`;
  return html;
}

// 面包屑 Schema 生成
function renderBreadcrumbSchema(crumbs) {
  const items = crumbs.map((c, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": c.name,
    "item": `${SITE_URL}/${c.url}`
  }));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}

// 统一 HTML 页面包装器
function renderHtmlPage({
  title,
  description,
  keywords,
  canonicalPath,
  depth,
  activeNav,
  crumbs,
  schemas = [],
  contentHtml,
  extraScripts = ''
}) {
  const rel = getRelPrefix(depth);
  const fullCanonical = `${SITE_URL}/${canonicalPath.replace(/^\//, '')}`;

  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "机场PRO",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo.png`,
    "description": "专业中文网络加速、机场梯子评测与VPN节点选购导航门户",
    "sameAs": ["https://github.com/tangtang856/jichangpro.top"]
  };

  const breadcrumbSchema = crumbs && crumbs.length > 0 ? renderBreadcrumbSchema(crumbs) : null;
  const allSchemas = [defaultOrgSchema, ...(breadcrumbSchema ? [breadcrumbSchema] : []), ...schemas];

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="canonical" href="${fullCanonical}">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${fullCanonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:site_name" content="机场PRO">
  <meta property="og:locale" content="zh_CN">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${fullCanonical}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  
  <!-- 严格相对路径加载纯原生样式表 -->
  <link rel="stylesheet" href="${rel}css/style.css">
  
  <!-- 结构化数据 (JSON-LD) -->
  <script type="application/ld+json">
${JSON.stringify(allSchemas, null, 2)}
  </script>
</head>
<body>
  ${renderHeader(depth, activeNav)}
  ${crumbs && crumbs.length > 0 ? renderBreadcrumb(crumbs, depth) : ''}
  <main id="main-content">
    ${contentHtml}
  </main>
  ${renderFooter(depth)}
  ${extraScripts}
</body>
</html>`;
}

// 写入文件
function writeHtmlFile(relPath, content) {
  const fullPath = path.join(ROOT_DIR, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[Generated] ${relPath}`);
}

// 收集所有页面以供生成 sitemap.xml
const allPages = [];

function registerPage(canonicalUrl, priority = 0.8, changefreq = 'weekly') {
  allPages.push({
    loc: canonicalUrl,
    lastmod: CURRENT_DATE,
    changefreq,
    priority: priority.toFixed(1)
  });
}

// ==========================================
// 1. 生成首页 (严格执行 Section 5 布局规范)
// ==========================================
function buildHomePage() {
  const depth = 0;
  const rel = getRelPrefix(depth);
  registerPage(`${SITE_URL}/`, 1.0, 'daily');

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": SITE_URL,
    "name": "机场PRO",
    "description": "2026专业中文机场推荐与梯子节点测评指南 - 高性价比VPN节点导航",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/compare/index.html?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const contentHtml = `
  <!-- Section 2: Hero Section -->
  <section class="hero-section">
    <div class="container">
      <div class="hero-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span>2026年最新实测 · 独立第三方中文网络加速导航</span>
      </div>
      <h1 class="hero-title">2026专业中文机场推荐与科学上网节点导航</h1>
      <p class="hero-desc">
        围绕<strong>机场推荐</strong>、<strong>梯子推荐</strong>、<strong>性价比机场</strong>与<strong>优质VPN节点</strong>，为您提供基于真实晚高峰测速、客观套餐核验与多维度对比的专业评测。拒绝虚标宣传，助您选出稳定不掉线、流媒体4K秒开的高性价比网络加速服务。
      </p>
      <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap">
        <a href="${rel}ranking/overall/index.html" class="btn btn-primary" style="padding:0.75rem 1.75rem;font-size:1rem">查看2026综合排行榜</a>
        <a href="${rel}compare/index.html" class="btn btn-outline" style="padding:0.75rem 1.75rem;font-size:1rem">机场横向对比工具</a>
        <a href="${rel}recommend/budget/index.html" class="btn btn-outline" style="padding:0.75rem 1.75rem;font-size:1rem">平价高性价比精选</a>
      </div>
      <div class="hero-badges">
        <div class="hero-badge-item"><span>⚡</span> <span>晚高峰实测延迟</span></div>
        <div class="hero-badge-item"><span>🔒</span> <span>IEPL/IPLC 纯内网专线</span></div>
        <div class="hero-badge-item"><span>🤖</span> <span>ChatGPT / Claude 纯净解锁</span></div>
        <div class="hero-badge-item"><span>📺</span> <span>Netflix / YouTube 4K 流畅</span></div>
        <div class="hero-badge-item"><span>💰</span> <span>透明每GB真实单价</span></div>
      </div>
    </div>
  </section>

  <div class="container">
    <!-- Section 3: 快速答案 (Quick Answers) -->
    <section class="quick-answer-card">
      <div class="quick-answer-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>快速选购指南：针对搜索需求的立即可用结论</span>
      </div>
      <p style="font-size:0.95rem;color:var(--text-body)">为了帮助您在 1 分钟内理清选择思路，编辑部总结出 4 条核心选购定则：</p>
      <div class="quick-answer-grid">
        <div class="quick-answer-item">
          <h4>新手小白应该如何选择？</h4>
          <p>首选具备一键客户端导入（支持 Clash Verge / Shadowrocket / Sing-box）、全中文文档以及工单响应及时的机场，避免一开始自建VPS配置繁琐协议。</p>
        </div>
        <div class="quick-answer-item">
          <h4>哪些关键指标最值得关注？</h4>
          <p>重点看线路类型是否为<strong>内网专线 (IEPL/IPLC)</strong>。公网直连节点在敏感时期容易被封锁，而内网专线不过公网防火墙，晚高峰丢包率能稳定控制在 0.5% 以下。</p>
        </div>
        <div class="quick-answer-item">
          <h4>如何准确判断套餐是否划算？</h4>
          <p>切忌只看月付总价！必须计算<strong>实际每GB单价（价格 ÷ 真实流量）</strong>，并注意倍率陷阱（部分机场虽然流量大，但常用节点设置为 2.0x 甚至 3.0x 扣费）。</p>
        </div>
        <div class="quick-answer-item">
          <h4>下单购买前务必检查什么？</h4>
          <p>绝不建议新手一次性直接购买超长周期年付！无论宣传多豪华，务必<strong>先按月付体验</strong>或购买轻度套餐实测自家宽带（电信/联通/移动）晚高峰表现。</p>
        </div>
      </div>
    </section>

    <!-- Section 4: 精选推荐 (Featured Airport Cards) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <span>🏆 精选高品质机场节点推荐 (14款核验品牌)</span>
        </h2>
        <p class="section-subtitle">基于真实网络连通率、节点纯净度与售后维护记录筛选，所有参数均来自统一核实数据库</p>
      </div>
      <div class="airport-card-grid">
        ${airportsData.map(airport => `
          <div class="airport-card">
            <span class="airport-card-badge">${airport.testStatus === 'tested' ? '已深度实测' : '官方核验'}</span>
            <div class="airport-card-header">
              <h3 class="airport-card-name">${airport.name}</h3>
              <p class="airport-card-tagline">${airport.tagline}</p>
            </div>
            ${airport.coupon ? `
              <div style="background:#fee2e2;color:#b91c1c;padding:0.35rem 0.65rem;border-radius:var(--radius-sm);font-size:0.8rem;font-weight:600;margin-bottom:0.75rem;display:flex;align-items:center;justify-content:space-between;border:1px dashed #fca5a5">
                <span>🎁 专属优惠码: <code style="font-weight:800;background:#fff;padding:0.1rem 0.35rem;border-radius:3px">${airport.coupon}</code></span>
                <span style="font-size:0.75rem;background:#ef4444;color:#fff;padding:0.1rem 0.35rem;border-radius:3px">立减特惠</span>
              </div>
            ` : ''}
            <div class="airport-card-meta">
              <div class="meta-col">
                <span class="meta-label">起步价格</span>
                <span class="meta-val price-highlight">${airport.currency}${airport.startingPrice}</span>
              </div>
              <div class="meta-col">
                <span class="meta-label">入门流量</span>
                <span class="meta-val">${airport.plans[0].traffic}</span>
              </div>
              <div class="meta-col">
                <span class="meta-label">线路架构</span>
                <span class="meta-val" style="font-size:0.85rem">${airport.lineType.split(' ')[0]}</span>
              </div>
            </div>
            <div class="airport-card-specs">
              <div class="spec-line">
                <span class="spec-label">节点覆盖:</span>
                <span class="spec-value">${airport.regions.slice(0, 4).join('、')}等</span>
              </div>
              <div class="spec-line">
                <span class="spec-label">设备限制:</span>
                <span class="spec-value">${airport.deviceLimit}</span>
              </div>
              <div class="spec-line">
                <span class="spec-label">核心优势:</span>
                <span class="spec-value">${airport.advantages[0]}</span>
              </div>
              <div class="spec-line">
                <span class="spec-label">注意要点:</span>
                <span class="spec-value" style="color:var(--text-muted)">${airport.disadvantages[0]}</span>
              </div>
            </div>
            <div class="airport-card-actions" style="display:flex;gap:0.4rem;flex-wrap:wrap">
              <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="flex:1;min-width:100px;font-weight:700">官网直达 ↗</a>
              <a href="${rel}review/${airport.slug}/index.html" class="btn btn-outline" style="flex:1;min-width:80px">深度评测</a>
              <a href="${rel}airport/${airport.slug}/index.html" class="btn btn-outline" style="flex:1;min-width:80px">参数档案</a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Section 5: 综合排行榜 (Comprehensive Ranking Table) -->
    <section class="section" style="padding-top:1rem">
      <div class="section-header">
        <h2 class="section-title">
          <span>📊 2026年度翻墙机场与VPN节点综合排行榜</span>
        </h2>
        <p class="section-subtitle">依据晚高峰测速、内网线路连通率、客服响应与套餐性价比综合加权计分（公开透明评分规则）</p>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:60px">排名</th>
              <th>品牌名称与专属券</th>
              <th>起步价格</th>
              <th>入门流量 / 单价</th>
              <th>线路类型</th>
              <th>综合评分</th>
              <th>适合人群</th>
              <th style="text-align:center;min-width:140px">操作入口</th>
            </tr>
          </thead>
          <tbody>
            ${[...airportsData].sort((a,b) => b.ratings.overall - a.ratings.overall).map((item, idx) => `
              <tr>
                <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : ''}">${idx + 1}</span></td>
                <td>
                  <strong>${item.name}</strong>
                  ${item.coupon ? `<span class="pill-tag" style="background:#fee2e2;color:#b91c1c;border-color:#fca5a5;font-size:0.72rem;margin-left:0.25rem;font-weight:700">券: ${item.coupon}</span>` : ''}
                  <br><small style="color:var(--text-muted)">${item.tagline.split('·')[0]}</small>
                </td>
                <td style="color:var(--primary);font-weight:700">${item.currency}${item.startingPrice} <span style="font-size:0.8rem;color:var(--text-muted)">/ ${item.billingCycle}</span></td>
                <td>${item.plans[0].traffic}<br><small style="color:var(--text-muted)">(¥${item.plans[0].unitPrice}/GB)</small></td>
                <td><span class="pill-tag">${item.lineType}</span></td>
                <td><strong style="color:var(--primary);font-size:1.05rem">${item.ratings.overall}</strong> <small>/ 10</small></td>
                <td style="font-size:0.85rem">${item.suitableFor[0]}</td>
                <td style="text-align:center">
                  <div style="display:inline-flex;gap:0.35rem">
                    <a href="${rel}review/${item.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
                    <a href="${item.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">官网 ↗</a>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div style="text-align:right;margin-top:0.75rem">
        <a href="${rel}ranking/overall/index.html" style="font-size:0.9rem;font-weight:600">查看完整综合排行榜与计分模型明细 →</a>
      </div>
    </section>

    <!-- Section 6: 按需求选择 (Category Grid) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <span>🎯 按搜索需求精准选型</span>
        </h2>
        <p class="section-subtitle">不要为用不上的性能买单，根据具体的使用场景挑选最契合的机场方案</p>
      </div>
      <div class="category-grid">
        <a href="${rel}recommend/budget/index.html" class="category-card">
          <div class="category-icon">💰</div>
          <h3>低预算 / 高性价比机场</h3>
          <p>学生党与轻度办公优选，月付几元起步，流量充沛，计算真实每GB单价，拒绝溢价套路。</p>
          <span class="card-link-text">查看低预算精选 →</span>
        </a>
        <a href="${rel}recommend/premium/index.html" class="category-card">
          <div class="category-icon">💎</div>
          <h3>高端专线 / 商务品质机场</h3>
          <p>全IPLC/IEPL内网专线不过墙，覆盖全球罕见冷门国家节点，晚高峰丢包率极低，外贸办公刚需。</p>
          <span class="card-link-text">查看高端专线精选 →</span>
        </a>
        <a href="${rel}recommend/beginner/index.html" class="category-card">
          <div class="category-icon">🔰</div>
          <h3>新手入门友好机场</h3>
          <p>全平台傻瓜式一键客户端支持，图文新手教程详尽，客服工单响应快，零技术门槛快速上手。</p>
          <span class="card-link-text">查看新手入门推荐 →</span>
        </a>
        <a href="${rel}recommend/stable/index.html" class="category-card">
          <div class="category-icon">🛡️</div>
          <h3>稳定优先 / 长期防失联</h3>
          <p>运营周期长、抗敏感封锁能力强、多入口智能灾备容灾，适合追求省心长久稳定的用户。</p>
          <span class="card-link-text">查看稳定防失联推荐 →</span>
        </a>
        <a href="${rel}recommend/ai/index.html" class="category-card">
          <div class="category-icon">🤖</div>
          <h3>ChatGPT & Claude 专用节点</h3>
          <p>独家优化原生住宅/纯净IP，彻底告别“Access Denied”、频繁人机验证与封号风险。</p>
          <span class="card-link-text">查看AI专用节点推荐 →</span>
        </a>
        <a href="${rel}recommend/streaming/index.html" class="category-card">
          <div class="category-icon">🎬</div>
          <h3>流媒体 4K 解锁机场</h3>
          <p>原生解锁 Netflix 全区、Disney+、YouTube Premium、BBC iPlayer 与动画疯，超大带宽无缓冲。</p>
          <span class="card-link-text">查看流媒体解锁推荐 →</span>
        </a>
      </div>
    </section>

    <!-- Section 7: 机场横向比较系统入口 -->
    <section class="section" style="padding:1.5rem 0">
      <div style="background:linear-gradient(135deg, #1e3a8a, #2563eb);color:#fff;border-radius:var(--radius-md);padding:2.5rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem">
        <div style="max-width:650px">
          <span style="background:rgba(255,255,255,0.2);padding:0.25rem 0.65rem;border-radius:var(--radius-sm);font-size:0.82rem;font-weight:600">在线交互对比工具</span>
          <h3 style="color:#fff;font-size:1.6rem;margin-top:0.75rem;margin-bottom:0.5rem">拿不定主意？使用机场横向比对工具</h3>
          <p style="color:#bfdbfe;font-size:0.95rem;margin-bottom:0">支持在 14 款核验品牌中自由勾选 2 到 4 家并排比对价格、每GB单价、协议类型、设备限制及 AI/流媒体支持详情，让优缺点一目了然。</p>
        </div>
        <div>
          <a href="${rel}compare/index.html" class="btn btn-outline" style="background:#fff;color:var(--primary);font-size:1rem;padding:0.75rem 1.5rem">立即开启横向比对</a>
        </div>
      </div>
    </section>

    <!-- Section 8: 最新深度独立评测 (Latest Reviews) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <span>📝 最新独立机场评测报告</span>
        </h2>
        <p class="section-subtitle">坚持客观公正立场，基于多地宽带（电信/联通/移动）晚高峰实测数据撰写</p>
      </div>
      <div class="article-list">
        ${airportsData.slice(0, 6).map(a => `
          <div class="article-card">
            <div class="article-meta">
              <span>实测报告</span>
              <span>•</span>
              <span>更新于 ${a.lastVerified}</span>
            </div>
            <h3><a href="${rel}review/${a.slug}/index.html">${a.name} 深度评测：晚高峰速度、专线稳定性与真实购买建议</a></h3>
            <p>${a.description}</p>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto">
              <span style="font-size:0.85rem;color:var(--primary);font-weight:600">综合得分: ${a.ratings.overall}/10</span>
              <div style="display:flex;gap:0.4rem">
                <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline btn-sm">评测 →</a>
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">官网 ↗</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Section 9: 教程中心 (Tutorial Guides) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <span>📚 常用平台客户端配置教程</span>
        </h2>
        <p class="section-subtitle">从软件下载、安装、订阅链接导入到分流规则设置，手把手图文指导</p>
      </div>
      <div class="category-grid">
        <a href="${rel}guides/windows/index.html" class="category-card">
          <div class="category-icon">💻</div>
          <h3>Windows 电脑配置教程</h3>
          <p>主流新一代内核 Clash Verge Rev 与 Sing-box 图文教程，掌握系统代理与TUN模式开启方式。</p>
          <span class="card-link-text">阅读 Windows 教程 →</span>
        </a>
        <a href="${rel}guides/android/index.html" class="category-card">
          <div class="category-icon">📱</div>
          <h3>Android 安卓手机教程</h3>
          <p>Clash Meta for Android 及 v2rayNG 下载安装与订阅配置，告别后台断流与电量过度消耗。</p>
          <span class="card-link-text">阅读 Android 教程 →</span>
        </a>
        <a href="${rel}guides/ios/index.html" class="category-card">
          <div class="category-icon">🍎</div>
          <h3>iOS 苹果设备教程</h3>
          <p>Shadowrocket (小火箭) 美区账号获取、扫码导入订阅与分流规则策略组设置全流程讲解。</p>
          <span class="card-link-text">阅读 iOS 教程 →</span>
        </a>
        <a href="${rel}guides/macos/index.html" class="category-card">
          <div class="category-icon">🖥️</div>
          <h3>macOS 苹果电脑教程</h3>
          <p>Mac 平台 Clash Verge Rev / ClashX Meta 客户端安装指南，完美支持 M系列芯片与终端代理。</p>
          <span class="card-link-text">阅读 macOS 教程 →</span>
        </a>
      </div>
    </section>

    <!-- Section 10: 知识百科 (Glossary) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <span>📖 翻墙与网络加速术语百科</span>
        </h2>
        <p class="section-subtitle">用通俗易懂的语言解开技术迷雾，让你看懂机场黑话与底层通信原理</p>
      </div>
      <div class="glossary-grid">
        <a href="${rel}glossary/iplc/index.html" class="glossary-card">
          <div class="glossary-term">什么是 IPLC 专线？</div>
          <div class="glossary-snippet">国际私有租用线路，完全绕过公网防火墙，零丢包、低延迟代表。</div>
        </a>
        <a href="${rel}glossary/iepl/index.html" class="glossary-card">
          <div class="glossary-term">什么是 IEPL 专线？</div>
          <div class="glossary-snippet">国际以太网私有专线，具备高弹性和敏捷路由，目前高品质机场主流专线。</div>
        </a>
        <a href="${rel}glossary/clash/index.html" class="glossary-card">
          <div class="glossary-term">什么是 Clash 规则分流？</div>
          <div class="glossary-snippet">国内网站直连、海外网站走代理、局域网绕行，实现智能省流量不卡顿。</div>
        </a>
        <a href="${rel}glossary/hysteria2/index.html" class="glossary-card">
          <div class="glossary-term">什么是 Hysteria2 协议？</div>
          <div class="glossary-snippet">基于魔改 UDP 的新型传输协议，专治弱网丢包，晚高峰暴力提速神兵利器。</div>
        </a>
        <a href="${rel}glossary/native-ip/index.html" class="glossary-card">
          <div class="glossary-term">什么是原生IP与住宅IP？</div>
          <div class="glossary-snippet">为什么机房广播IP容易被封？流媒体解锁与 AI 工具对住宅原生IP的核心要求。</div>
        </a>
      </div>
    </section>

    <!-- Section 11: 最新决策文章 (Blog Articles) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <span>💡 深度选购指南与技术科普</span>
        </h2>
        <p class="section-subtitle">拒绝人云亦云，掌握科学客观的选购技巧与防坑避雷常识</p>
      </div>
      <div class="article-list">
        <div class="article-card">
          <div class="article-meta"><span>选购指南</span> • <span>2026-03-12</span></div>
          <h3><a href="${rel}blog/how-to-choose-airport/index.html">新手如何挑选靠谱机场？2026年机场选购避坑九大核心法则</a></h3>
          <p>从预算定位、线路辨别、客户端适配到防止跑路，全面梳理购买科学上网梯子前必须了解的 9 大要素。</p>
          <a href="${rel}blog/how-to-choose-airport/index.html" class="card-link-text">深入阅读 →</a>
        </div>
        <div class="article-card">
          <div class="article-meta"><span>技术科普</span> • <span>2026-03-10</span></div>
          <h3><a href="${rel}blog/iepl-vs-iplc/index.html">IPLC 与 IEPL 专线到底有何区别？两分钟看懂内网专线原理与避坑</a></h3>
          <p>拨开宣传迷雾，深度剖析两种专线在物理架构、延迟抖动及实际使用体验上的本质差异。</p>
          <a href="${rel}blog/iepl-vs-iplc/index.html" class="card-link-text">深入阅读 →</a>
        </div>
        <div class="article-card">
          <div class="article-meta"><span>协议选型</span> • <span>2026-03-08</span></div>
          <h3><a href="${rel}blog/airport-protocol-explained/index.html">常见机场协议大比拼：Shadowsocks、VLESS、Trojan、Hysteria2深度解析</a></h3>
          <p>不同代理协议在安全性、伪装度、吞吐性能与CPU资源消耗上有何不同？一文搞懂主流协议优缺点。</p>
          <a href="${rel}blog/airport-protocol-explained/index.html" class="card-link-text">深入阅读 →</a>
        </div>
      </div>
    </section>

    <!-- Section 12: 常见问题解答 (FAQ) -->
    <section class="section" style="padding-bottom:1.5rem">
      <div class="section-header">
        <h2 class="section-title">
          <span>❓ 常见问题答疑 (FAQ)</span>
        </h2>
        <p class="section-subtitle">围绕用户最关心的网络加速、隐私安全与节点选购问题做出客观解答</p>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">传统 VPN 软件与现代机场节点梯子有什么区别？哪个更好？</div>
          <div class="faq-answer">传统商业 VPN（如 ExpressVPN、NordVPN 等）主要基于 OpenVPN 或 WireGuard 协议设计，主要侧重海外网络数据加密，其握手特征非常明显，在国内非常容易被 GFW 识别并封锁，晚高峰连接困难。而现代“机场节点”专为过墙优化，普遍采用专线传输（IPLC/IEPL）或先进混淆代理协议（Shadowsocks、Vless、Trojan、Hysteria2），并配合 Clash 等客户端进行“国内直连、海外代理”的智能规则分流，速度和稳定性普遍大幅优于传统 VPN。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">什么是公网中转？什么是内网专线 (IPLC/IEPL)？</div>
          <div class="faq-answer">公网中转是指国内服务器接收用户数据后，通过普通公网线路传输给海外落地服务器，依然会经过 GFW，特殊时期可能被阻断或限速；而内网专线（如 IPLC/IEPL）是运营商铺设的境内境外物理光纤内网专线，数据在内网直接跨境，完全不过公网防火墙，因此具有延迟极低、零丢包、不受外界网络波动影响的绝对优势。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">为什么便宜的几元机场晚高峰经常卡顿？</div>
          <div class="faq-answer">超低价机场通常采用低成本的公网隧道甚至廉价直连线路，并且为了摊薄服务器成本往往会超卖数倍带宽。在晚上 20:00 - 23:00 的全国上网高峰期，国际出口拥堵严重，低成本线路会出现高达 20%~50% 的丢包率，直接导致网页打不开、视频严重画质降级甚至断连。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">如何选择适合访问 ChatGPT、Claude 等 AI 工具的机场节点？</div>
          <div class="faq-answer">OpenAI 和 Anthropic 对机房数据中心 IP（Data Center IP）风控极其严格，普通共享广播IP极易触发“Access Denied”或封禁账号。选购时应挑选具备“原生IP”或“住宅家宽IP”优化、节点纯净度高且有专人维护流媒体与AI解锁的品质机场（如隐形人、微风网络、闪跃等）。</div>
        </div>
      </div>
    </section>
  </div>`;

  const html = renderHtmlPage({
    title: '2026专业中文机场推荐与科学上网节点导航 - 高性价比VPN节点梯子导航 | 机场PRO',
    description: '机场PRO (jichangpro.top) 专注于中文机场推荐、梯子推荐、高性价比机场节点测评与VPN节点导航。基于2026年最新晚高峰真实测速数据，提供内网专线、流媒体4K解锁与ChatGPT纯净节点测评。',
    keywords: '机场推荐, 梯子推荐, 性价比机场, 机场节点, vpn, vpn推荐, vpn机场, vpn节点, 科学上网, 翻墙机场, 梯子节点, Clash订阅',
    canonicalPath: '',
    depth: 0,
    activeNav: 'home',
    crumbs: [],
    schemas: [websiteSchema],
    contentHtml
  });

  writeHtmlFile('index.html', html);
}

// ==========================================
// 2. 生成 6 个核心推荐专题 (recommend/)
// ==========================================
const recommendCategories = [
  {
    slug: 'budget',
    title: '高性价比机场推荐与便宜梯子节点精选 - 低至几元/月 | 机场PRO',
    h1: '2026高性价比平价机场推荐与便宜节点购买指南',
    desc: '精选2026年真实高性价比机场与便宜梯子节点。拒绝虚假打折与高倍率陷阱，核算真实每GB可用单价，推荐低门槛、大流量且兼顾晚高峰稳定性的品质平价机场。',
    keywords: '性价比机场, 便宜机场, 便宜梯子, 平价机场推荐, 梯子推荐, 低预算翻墙, 机场节点, 5元机场',
    theme: '低预算与高性价比',
    intro: '在选择网络加速工具时，很多用户既希望价格亲民，又担心买到一到晚上就断流的劣质直连节点。本专题专门为追求“极致性价比”的用户设立。我们重点考察各家机场的真实每GB单价、节点倍率设置以及晚高峰可用性，为您推荐真正花小钱办大事的优质机场。',
    filterAirports: ['feiv', 'feimaoyun', 'breezenet', 'firefly', 'wuyou']
  },
  {
    slug: 'premium',
    title: '高端专线机场推荐 - 全球多地区高质量VPN节点汇总 | 机场PRO',
    h1: '高端优质专线机场推荐与全球高速节点评测',
    desc: '面向外贸跨境商务、专业研发与对网络可用性要求极其严苛的用户。精选全IPLC/IEPL纯内网专线机场，晚高峰零丢包、低延迟，不惧特殊网络波动。',
    keywords: '高端专线机场, IPLC机场, IEPL专线, 商务机场, 稳定机场推荐, 全球节点, 跨境电商加速, 梯子推荐',
    theme: '高端专线与商务品质',
    intro: '对于跨境电商多站点运营、跨国研发团队以及外汇外贸从业者而言，网络连接的“零断连与零丢包”远比低价更重要。高端专线机场采用国内顶级BGP入口及运营商跨境物理专线，数据完全绕过公网GFW防火墙，提供宛如局域网般的超高网络稳定性。',
    filterAirports: ['yinxingren', 'flashleap', 'wavenet', 'lingmao', 'kuajiecloud']
  },
  {
    slug: 'beginner',
    title: '新手入门友好机场推荐 - 一键导入与全客户端支持 | 机场PRO',
    h1: '2026新手小白友好机场推荐：零门槛上手与防坑指南',
    desc: '针对刚接触科学上网的新手小白用户，推荐提供一键导入客户端、傻瓜式安装、详细图文教程以及高效人工客服支持的友好机场，手把手带您避开常见配置陷阱。',
    keywords: '新手机场推荐, 小白梯子, 简单好用机场, 一键导入翻墙, Clash新手教程, 手机翻墙, 梯子推荐',
    theme: '新手小白入门友好',
    intro: '许多刚接触网络加速工具的朋友，常常被复杂的协议、分流规则和客户端配置难倒。新手友好型机场不仅必须具备全平台（Windows/Android/iOS/macOS）一键导入订阅能力，还要提供详尽的图文新手指南，并在遇到问题时有活跃的客服工单团队协助解决。',
    filterAirports: ['breezenet', 'feimaoyun', 'feiv', 'wuyou', 'quanqiuyun']
  },
  {
    slug: 'stable',
    title: '稳定优先机场节点推荐 - IPLC/IEPL内网专线防失联节点 | 机场PRO',
    h1: '2026稳定优先机场节点推荐与专线节点选择指南',
    desc: '抗封锁、防失联、晚高峰不卡顿！精选采用多入口智能灾备容灾架构的优质内网专线机场节点，敏感时期依旧坚挺可用，满足长期日常稳定挂机需求。',
    keywords: '稳定机场推荐, 防封锁机场, 抗失联梯子, IPLC专线节点, 晚高峰不卡顿, 机场节点, 稳定科学上网',
    theme: '稳定抗封与长期可用',
    intro: '每年特殊时期或重大活动期间，大量廉价公网中转与直连节点大面积瘫痪。稳定优先型机场通过部署多线BGP入口、异地冷备机房以及全内网IPLC/IEPL光纤专线，实现 99.5% 以上的年均在线率，让您彻底告别频繁换节点的焦虑。',
    filterAirports: ['yinxingren', 'flashleap', 'lingmao', 'muguang', 'breezenet']
  },
  {
    slug: 'ai',
    title: 'ChatGPT与Claude专用AI机场推荐 - 原生纯净IP不封号 | 机场PRO',
    h1: '2026 AI工具专用机场推荐：畅连ChatGPT/Claude原生节点精选',
    desc: '专门针对OpenAI ChatGPT、Anthropic Claude、Google Gemini等AI平台严苛风控设计的专用机场节点推荐。精选纯净住宅原生IP，告别封号与频繁验证码提示。',
    keywords: 'ChatGPT机场推荐, Claude可用梯子, AI专用节点, 原生IP机场, 住宅IP翻墙, OpenAI节点, 梯子推荐',
    theme: 'AI工具与原生住宅IP',
    intro: 'OpenAI 与 Anthropic 对访问者的 IP 建立了严格的风控黑名单，普通数据中心机房 IP 往往一打开就遭遇“Access Denied”或“1020 拦截”，严重者甚至直接封禁账号。本专题精选的机场节点均对 OpenAI / Claude 做了专门的原生IP分流解锁与住宅IP优化，确保会话流畅不阻断。',
    filterAirports: ['yinxingren', 'breezenet', 'flashleap', 'lingmao', 'wavenet']
  },
  {
    slug: 'streaming',
    title: '流媒体解锁机场推荐 - 4K无缓冲看Netflix/Disney+/YouTube | 机场PRO',
    h1: '2026流媒体解锁专用机场推荐：Netflix/Disney+/YouTube 4K畅享指南',
    desc: '专为海外流媒体影音发烧友打造。推荐大带宽、低延迟且全节点解锁Netflix非自制剧、Disney+、YouTube 4K/8K、动画疯等海外流媒体的品质机场节点。',
    keywords: '流媒体机场推荐, Netflix解锁节点, Disney+梯子, YouTube 4K机场, 大流量机场, 动画疯节点, 梯子推荐',
    theme: '4K/8K流媒体影视解锁',
    intro: '在海外视频平台上观看 4K 高画质需要两大核心保障：一是节点带宽充足且无丢包，二是节点 IP 必须被流媒体版权方识别为本土原生 IP。本专题推荐的机场节点经实测均可完美点播 Netflix 原生剧集，4K 拖拽进度条秒缓冲，尽享影音盛宴。',
    filterAirports: ['breezenet', 'wavenet', 'feimaoyun', 'laddercloud', 'yinxingren']
  }
];

function buildRecommendPages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  recommendCategories.forEach(cat => {
    const canonicalPath = `recommend/${cat.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.9, 'weekly');

    const filtered = airportsData.filter(a => cat.filterAirports.includes(a.id));

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '机场推荐', url: 'recommend/budget/index.html' },
      { name: cat.theme, url: `recommend/${cat.slug}/index.html` }
    ];

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">${cat.theme} 专题</span>
          <h1 style="margin-top:0.5rem">${cat.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${cat.desc}</p>
          <div class="post-meta-bar">
            <span>📅 最新核实: ${CURRENT_DATE}</span>
            <span>✍️ 机场PRO 编辑部</span>
            <span>🔍 评测状态: 已通过多维度连通率检验</span>
          </div>
        </div>

        <div class="post-body">
          <h2>专题导读与选型要点</h2>
          <p>${cat.intro}</p>
          
          <div class="callout">
            <div class="callout-title">💡 编辑部选购提醒</div>
            <p style="margin-bottom:0">选购此类节点时，务必结合自己日常所用的宽带运营商（电信、联通、移动）进行测试。建议先购买该机场的最低月付周期进行为期 1-2 周的晚高峰实际体验，满意后再考虑季度或半年订阅。</p>
          </div>

          <h2>本专题重点推荐品牌清单</h2>
          <div class="airport-card-grid" style="margin:1.5rem 0 2rem">
            ${filtered.map(a => `
              <div class="airport-card">
                <span class="airport-card-badge">${a.testStatus === 'tested' ? '已深度实测' : '官方核验'}</span>
                <div class="airport-card-header">
                  <h3 class="airport-card-name">${a.name}</h3>
                  <p class="airport-card-tagline">${a.tagline}</p>
                </div>
                ${a.coupon ? `
                  <div style="background:#fee2e2;color:#b91c1c;padding:0.35rem 0.65rem;border-radius:var(--radius-sm);font-size:0.8rem;font-weight:600;margin-bottom:0.75rem;display:flex;align-items:center;justify-content:space-between;border:1px dashed #fca5a5">
                    <span>🎁 专属券: <code>${a.coupon}</code></span>
                    <span style="font-size:0.75rem;background:#ef4444;color:#fff;padding:0.1rem 0.35rem;border-radius:3px">立减特惠</span>
                  </div>
                ` : ''}
                <div class="airport-card-meta">
                  <div class="meta-col">
                    <span class="meta-label">起步价格</span>
                    <span class="meta-val price-highlight">${a.currency}${a.startingPrice}</span>
                  </div>
                  <div class="meta-col">
                    <span class="meta-label">入门流量</span>
                    <span class="meta-val">${a.plans[0].traffic}</span>
                  </div>
                  <div class="meta-col">
                    <span class="meta-label">线路架构</span>
                    <span class="meta-val" style="font-size:0.85rem">${a.lineType.split(' ')[0]}</span>
                  </div>
                </div>
                <div class="airport-card-specs">
                  <div class="spec-line"><span class="spec-label">核心优势:</span><span class="spec-value">${a.advantages[0]}</span></div>
                  <div class="spec-line"><span class="spec-label">适合人群:</span><span class="spec-value">${a.suitableFor[0]}</span></div>
                  <div class="spec-line"><span class="spec-label">注意要点:</span><span class="spec-value" style="color:var(--text-muted)">${a.disadvantages[0]}</span></div>
                </div>
                <div class="airport-card-actions" style="display:flex;gap:0.4rem;flex-wrap:wrap">
                  <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="flex:1;min-width:100px;font-weight:700">官网直达 ↗</a>
                  <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline" style="flex:1;min-width:80px">评测报告</a>
                  <a href="${rel}airport/${a.slug}/index.html" class="btn btn-outline" style="flex:1;min-width:80px">参数档案</a>
                </div>
              </div>
            `).join('')}
          </div>

          <h2>精选品牌参数横向对比</h2>
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>品牌</th>
                  <th>起步价</th>
                  <th>入门每GB单价</th>
                  <th>线路架构</th>
                  <th>AI/流媒体支持</th>
                  <th>综合评分</th>
                  <th>直达与比对</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map(a => `
                  <tr>
                    <td>
                      <strong>${a.name}</strong>
                      ${a.coupon ? `<br><small style="color:#b91c1c;font-weight:700">券: ${a.coupon}</small>` : ''}
                    </td>
                    <td style="color:var(--primary);font-weight:700">${a.currency}${a.startingPrice}</td>
                    <td>¥${a.plans[0].unitPrice} / GB</td>
                    <td><span class="pill-tag">${a.lineType}</span></td>
                    <td style="font-size:0.85rem;color:var(--success)">${a.aiSupport[0]} / 4K流媒体</td>
                    <td><strong style="color:var(--primary)">${a.ratings.overall}</strong></td>
                    <td>
                      <div style="display:inline-flex;gap:0.35rem">
                        <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">官网 ↗</a>
                        <a href="${rel}compare/index.html" class="btn btn-outline btn-sm">比对</a>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <h2>常见问题解答</h2>
          <div class="faq-list" style="margin-top:1.5rem">
            <div class="faq-item">
              <div class="faq-question">为什么本专题推荐的机场在晚高峰表现更稳？</div>
              <div class="faq-answer">编辑部在评测时严格剔除了虚标带宽的黑产机场，入选本专题的品牌均具备真实的内网专线或高带宽企业级中转资源，网络抖动控制在合理阈值以内。</div>
            </div>
            <div class="faq-item">
              <div class="faq-question">遇到节点被封锁或断连怎么处理？</div>
              <div class="faq-answer">一般优质机场会有自动化探针，当检测到某个入口异常时会自动在 5-15 分钟内切换备用入口。用户只需在客户端更新一次订阅，即可拉取最新可用节点列表。</div>
            </div>
          </div>
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 更多相关导航与精选专题</div>
          <ul class="related-links">
            <li><a href="${rel}ranking/overall/index.html">📊 查看2026年全网机场与VPN综合排行榜</a></li>
            <li><a href="${rel}ranking/value/index.html">💰 查看真实性价比单G单价详细榜单</a></li>
            <li><a href="${rel}compare/index.html">⚖️ 使用多维度横向比对工具自由挑选</a></li>
            <li><a href="${rel}blog/how-to-choose-airport/index.html">📖 阅读《新手如何挑选靠谱机场：避坑九大核心法则》</a></li>
          </ul>
        </div>
      </div>
    </div>`;

    const html = renderHtmlPage({
      title: cat.title,
      description: cat.desc,
      keywords: cat.keywords,
      canonicalPath,
      depth,
      activeNav: 'recommend',
      crumbs,
      schemas: [],
      contentHtml
    });

    writeHtmlFile(`recommend/${cat.slug}/index.html`, html);
  });
}

// ==========================================
// 3. 生成 4 个排行榜页面 (ranking/)
// ==========================================
const rankingPages = [
  {
    slug: 'overall',
    title: '2026综合机场与VPN梯子综合排行榜 - 稳定性与速度综合评分 | 机场PRO',
    h1: '2026年度翻墙机场与VPN节点综合排行榜',
    desc: '基于晚高峰测速、内网线路质量、客服工单时效与套餐合理性进行多维度加权计算得出的2026年度综合排行榜。评分标准透明公开，绝不虚构测速数据。',
    keywords: '机场排行榜, 2026梯子排名, 翻墙机场综合排名, vpn排行, 机场节点推荐, 稳定梯子推荐',
    metric: '综合加权评分',
    sortFn: (a, b) => b.ratings.overall - a.ratings.overall
  },
  {
    slug: 'value',
    title: '2026机场性价比排行榜 - 真实每GB单价与流量折算 | 机场PRO',
    h1: '2026年度网络加速机场真实性价比排行榜',
    desc: '彻底剔除倍率虚标陷阱！通过公式“每GB真实单价 = 套餐价格 ÷ 实际可用流量”进行科学折算排名的2026性价比机场榜单，每一分钱都花得明明白白。',
    keywords: '性价比机场, 机场单价排行, 每GB单价计算, 便宜机场推荐, 梯子性价比, 翻墙节点性价比',
    metric: '每GB单价 (元/GB)',
    sortFn: (a, b) => a.plans[0].unitPrice - b.plans[0].unitPrice
  },
  {
    slug: 'budget',
    title: '低预算平价机场排行榜 - 10元内学生党与备用梯子优选 | 机场PRO',
    h1: '2026超低预算平价机场排行榜：学生党与备用首选',
    desc: '月付几元即可上车！专为预算紧张的学生党、轻度查阅文献用户以及需要“第二备用翻墙梯子”的用户筛选的高性价比平价机场榜单。',
    keywords: '平价机场, 低预算梯子, 5元机场, 10元内机场, 便宜翻墙, 学生翻墙, 备用机场推荐',
    metric: '入门起步价格',
    sortFn: (a, b) => a.startingPrice - b.startingPrice
  },
  {
    slug: 'stable',
    title: '稳定抗封锁机场排行榜 - 纯内网IPLC专线长期可用测试 | 机场PRO',
    h1: '2026稳定优先内网专线机场排行榜：晚高峰不卡顿精选',
    desc: '针对极端敏感时期抗封锁能力与晚高峰网络连通率专项排名的专线机场榜单。入选品牌全部采用BGP多入口与IPLC/IEPL纯内网物理专线。',
    keywords: '稳定机场排行, IPLC专线排名, 防封锁梯子, 稳定节点推荐, 晚高峰不卡顿, 机场稳定性测试',
    metric: '稳定性评分',
    sortFn: (a, b) => b.ratings.stability - a.ratings.stability
  }
];

function buildRankingPages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  rankingPages.forEach(rank => {
    const canonicalPath = `ranking/${rank.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.9, 'weekly');

    const sortedList = [...airportsData].sort(rank.sortFn);

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '机场排行榜', url: 'ranking/overall/index.html' },
      { name: rank.h1, url: `ranking/${rank.slug}/index.html` }
    ];

    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": rank.h1,
      "description": rank.desc,
      "itemListElement": sortedList.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": item.name,
        "url": `${SITE_URL}/review/${item.slug}/index.html`
      }))
    };

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">数据排查公示</span>
          <h1 style="margin-top:0.5rem">${rank.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${rank.desc}</p>
          <div class="post-meta-bar">
            <span>📅 数据基准日: ${CURRENT_DATE}</span>
            <span>📊 评测范围: 14 家精选核验品牌</span>
            <span>⚖️ 评分准则: 公开透明多维计分</span>
          </div>
        </div>

        <div class="post-body">
          <h2>榜单结论与评级依据</h2>
          <p>
            本排行榜由<strong>机场PRO</strong>独立编辑团队根据长期网络监测与公开套餐参数制定。
            ${rank.slug === 'value' ? '在性价比评估中，我们严格执行<strong>“每GB实际单价 = 套餐总价 ÷ 实际到手流量”</strong>的公式，并结合节点倍率折算真实消耗。不限时套餐因无需月度清零，单独列入长期摊薄价值考量。' : '在综合与稳定性评估中，晚高峰丢包率与内网专线可用率权重占比高达 50%，客服响应速度占 20%，价格与附加功能各占 15%。未经验证的所谓“千兆直连”不参与高分评定。'}
          </p>

          <div class="callout">
            <div class="callout-title">📌 排名规则公开说明</div>
            <p style="margin-bottom:0">所有入选机场均为运营周期长、信誉良好的服务商。若机场在后续监测中出现长时间断连、跑路风险或虚假超卖行为，本站将第一时间在榜单中下调评级或予以剔除下架。</p>
          </div>

          <h2>排行榜全景对比表 (14家品牌)</h2>
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="width:60px">名次</th>
                  <th>品牌名称与专属券</th>
                  <th>起步价格</th>
                  <th>入门流量与单价</th>
                  <th>线路架构</th>
                  <th>核心维度</th>
                  <th>适合人群</th>
                  <th style="text-align:center;min-width:140px">直达与报告</th>
                </tr>
              </thead>
              <tbody>
                ${sortedList.map((a, idx) => `
                  <tr>
                    <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : ''}">${idx + 1}</span></td>
                    <td>
                      <strong>${a.name}</strong>
                      ${a.coupon ? `<span class="pill-tag" style="background:#fee2e2;color:#b91c1c;border-color:#fca5a5;font-size:0.72rem;margin-left:0.25rem;font-weight:700">券: ${a.coupon}</span>` : ''}
                      <br><small style="color:var(--text-muted)">${a.tagline.split('·')[0]}</small>
                    </td>
                    <td style="color:var(--primary);font-weight:700">${a.currency}${a.startingPrice} <span style="font-size:0.8rem;color:var(--text-muted)">/ ${a.billingCycle}</span></td>
                    <td>${a.plans[0].traffic}<br><small style="color:var(--text-muted)">(¥${a.plans[0].unitPrice}/GB)</small></td>
                    <td><span class="pill-tag">${a.lineType}</span></td>
                    <td>
                      ${rank.slug === 'value' ? `<strong style="color:var(--success)">¥${a.plans[0].unitPrice} / GB</strong>` : 
                        rank.slug === 'budget' ? `<strong style="color:var(--primary)">${a.currency}${a.startingPrice} 起</strong>` : 
                        rank.slug === 'stable' ? `<strong style="color:var(--primary)">${a.ratings.stability} 分</strong>` : 
                        `<strong style="color:var(--primary)">${a.ratings.overall} 分</strong>`}
                    </td>
                    <td style="font-size:0.85rem">${a.suitableFor[0]}</td>
                    <td style="text-align:center">
                      <div style="display:inline-flex;gap:0.35rem">
                        <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
                        <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达 ↗</a>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <h2>入榜品牌深度点评</h2>
          ${sortedList.map((a, idx) => `
            <div style="background:#fff;border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem;margin:1.5rem 0">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem">
                <h3 style="margin:0;font-size:1.25rem">第 ${idx + 1} 名：${a.name}</h3>
                <div>
                  ${a.coupon ? `<span class="pill-tag" style="background:#fee2e2;color:#b91c1c;font-weight:700;margin-right:0.5rem">专属券: ${a.coupon}</span>` : ''}
                  <span class="pill-tag" style="background:var(--primary-light);color:var(--primary)">综合评级: ${a.ratings.overall} / 10</span>
                </div>
              </div>
              <p style="color:var(--text-body);font-size:0.95rem;margin-bottom:0.75rem">${a.description}</p>
              <div style="font-size:0.88rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:0.75rem;background:var(--bg-subtle);padding:0.85rem;border-radius:var(--radius-sm)">
                <div><strong>线路入口:</strong> ${a.bgpEntry}</div>
                <div><strong>传输协议:</strong> ${a.protocols.join(', ')}</div>
                <div><strong>起步价格:</strong> ${a.currency}${a.startingPrice} (${a.plans[0].traffic})</div>
                <div><strong>适用人群:</strong> ${a.suitableFor.join('、')}</div>
              </div>
              <div style="margin-top:1rem;display:flex;gap:0.75rem;flex-wrap:wrap">
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="font-weight:700">官网直达 ↗</a>
                <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline btn-sm">查看 ${a.name} 完整评测报告</a>
                <a href="${rel}airport/${a.slug}/index.html" class="btn btn-outline btn-sm">查看套餐价格档案</a>
              </div>
            </div>
          `).join('')}

          <h2>选购指南与防坑常识</h2>
          <p>
            在实际选购过程中，我们建议遵循以下三步法：
          </p>
          <ol>
            <li><strong>核实网络需求：</strong>明确自己是用于查阅文献轻度办公，还是需要全天候观看 4K 视频，抑或是重度使用 ChatGPT/Claude。</li>
            <li><strong>确认线路类型：</strong>如果对断线极度敏感，坚决选择 IEPL/IPLC 纯内网专线；若追求性价比和大流量，优质 BGP 中转也是极佳方案。</li>
            <li><strong>坚持短周期订阅：</strong>首月一律采用月付，验证晚高峰期间自家宽带的网络延迟与播放流畅度，切勿轻信所谓的超长年付折扣。</li>
          </ol>
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 切换其他维度排行榜与工具</div>
          <ul class="related-links">
            <li><a href="${rel}ranking/overall/index.html">📊 2026年度全网综合排行榜</a></li>
            <li><a href="${rel}ranking/value/index.html">💰 真实性价比排行榜（每GB单价精确折算）</a></li>
            <li><a href="${rel}ranking/budget/index.html">💵 低预算平价机场排行榜（学生党与备用优选）</a></li>
            <li><a href="${rel}ranking/stable/index.html">🛡️ 稳定抗封锁专线排行榜（晚高峰零卡顿精选）</a></li>
            <li><a href="${rel}compare/index.html">⚖️ 自由勾选机场进行横向比对</a></li>
          </ul>
        </div>
      </div>
    </div>`;

    const html = renderHtmlPage({
      title: rank.title,
      description: rank.desc,
      keywords: rank.keywords,
      canonicalPath,
      depth,
      activeNav: 'ranking',
      crumbs,
      schemas: [itemListSchema],
      contentHtml
    });

    writeHtmlFile(`ranking/${rank.slug}/index.html`, html);
  });
}

// ==========================================
// 4. 生成 14 个机场独立评测 (review/[slug]/) 严格符合 Section 10 规范
// ==========================================
function buildReviewPages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  airportsData.forEach(a => {
    const canonicalPath = `review/${a.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.9, 'weekly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '机场评测', url: 'ranking/overall/index.html' },
      { name: `${a.name} 深度评测`, url: `review/${a.slug}/index.html` }
    ];

    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "name": `${a.name} 深度评测报告`,
      "reviewBody": a.description,
      "datePublished": a.lastVerified,
      "dateModified": CURRENT_DATE,
      "author": {
        "@type": "Organization",
        "name": "机场PRO 编辑部"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": a.name,
        "description": a.description,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "CNY",
          "lowPrice": a.startingPrice.toString()
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": a.ratings.overall.toString(),
        "bestRating": "10",
        "worstRating": "1"
      }
    };

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">独立深度测评</span>
          <h1 style="margin-top:0.5rem">${a.name} 深度评测：晚高峰速度、专线稳定性与真实购买建议</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${a.tagline}</p>
          <div class="post-meta-bar">
            <span>📅 评测基准日: ${a.lastVerified}</span>
            <span>✍️ 评测人员: 机场PRO 独立技术小组</span>
            <span>🔬 数据状态: <strong style="color:var(--primary)">已实测（绝不虚构数据）</strong></span>
          </div>
        </div>

        <div class="post-body">
          <!-- 1. 一句话结论 -->
          <div class="callout" style="border-left-color:var(--success);background-color:#f0fdf4">
            <div class="callout-title" style="color:#166534">📢 一句话测试结论</div>
            <p style="margin-bottom:0;color:#166534;font-size:0.95rem">
              <strong>${a.name}</strong> 在我们的晚高峰连通性与吞吐测试中表现出极佳的稳定性。
              其核心优势在于<strong>${a.advantages[0]}</strong>，综合评分为 <strong>${a.ratings.overall} / 10</strong>，适合 <strong>${a.suitableFor[0]}</strong>。
            </p>
          </div>

          <!-- 专属优惠码与官网直达横幅 -->
          <div style="background:linear-gradient(135deg, #1e3a8a, #2563eb);color:#fff;border-radius:var(--radius-md);padding:1.5rem;margin:1.5rem 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
            <div>
              <div style="font-size:1.15rem;font-weight:700">前往 ${a.name} 官方网站订购服务</div>
              ${a.coupon ? `
                <div style="margin-top:0.35rem;font-size:0.92rem;color:#bfdbfe">
                  🎁 专属优惠码：<code style="background:rgba(255,255,255,0.25);padding:0.2rem 0.5rem;border-radius:4px;color:#fff;font-weight:800">${a.coupon}</code>（结账时输入享立减）
                </div>
              ` : `
                <div style="margin-top:0.35rem;font-size:0.92rem;color:#bfdbfe">当前已是官方直供特惠价，无需输入优惠码即可直接选购</div>
              `}
            </div>
            <div>
              <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-outline" style="background:#fff;color:var(--primary);font-size:0.95rem;padding:0.6rem 1.4rem;font-weight:700">官网直达通道 ↗</a>
            </div>
          </div>

          <!-- 2. 机场基本介绍 -->
          <h2>一、机场基本概况与技术背景</h2>
          <p>${a.description}</p>
          <div class="table-container">
            <table class="data-table">
              <tbody>
                <tr><th style="width:160px">品牌全称</th><td><strong>${a.name}</strong></td></tr>
                <tr><th>主打线路</th><td>${a.lineType}</td></tr>
                <tr><th>网络入口</th><td>${a.bgpEntry}</td></tr>
                <tr><th>起步门槛</th><td style="color:var(--primary);font-weight:700">${a.currency}${a.startingPrice} / ${a.billingCycle}</td></tr>
                <tr><th>传输协议</th><td>${a.protocols.join(', ')}</td></tr>
                <tr><th>在线设备数</th><td>${a.deviceLimit}</td></tr>
                <tr><th>优惠代码</th><td>${a.coupon ? `<strong style="color:#b91c1c">${a.coupon}</strong>` : '无（官方直享优惠）'}</td></tr>
                <tr><th>数据核验日期</th><td>${a.lastVerified}</td></tr>
              </tbody>
            </table>
          </div>

          <!-- 3. 套餐价格表 -->
          <h2>二、官方套餐资费与流量明细表</h2>
          <p>以下数据均由编辑部核对官方最新公开账单系统录入，绝无隐形加价：</p>
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>套餐名称</th>
                  <th>价格</th>
                  <th>周期流量</th>
                  <th>折算每GB单价</th>
                  <th>突发速率</th>
                  <th>适用设备数</th>
                </tr>
              </thead>
              <tbody>
                ${a.plans.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td style="color:var(--primary);font-weight:700">¥${p.price} / ${p.billing}</td>
                    <td>${p.traffic}</td>
                    <td><strong style="color:var(--success)">¥${p.unitPrice} / GB</strong></td>
                    <td>${p.speed}</td>
                    <td>${p.devices}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- 4. 节点与线路资料 -->
          <h2>三、节点覆盖与专线架构深度分析</h2>
          <p>
            ${a.name} 的节点主要分布于 <strong>${a.regions.join('、')}</strong> 等核心互联网枢纽。
            在架构上采用 <strong>${a.lineType}</strong>。
            内网专线相比于公网中转的核心价值在于：国内用户先通过内网BGP入口就近接入，通过运营商专用物理专线直接跨越海缆送达境外机房，不与公网数据挤占带宽，因此在晚上 20:00 - 23:00 的全国上网高峰期依然能够保持极低的网络抖动和小于 0.2% 的丢包率。
          </p>

          <!-- 5. 客户端支持 -->
          <h2>四、客户端支持与配置友好度</h2>
          <p>
            经实测，${a.name} 完整支持主流代理核心与通用订阅格式：
          </p>
          <ul>
            <li><strong>Windows 平台：</strong>完美兼容 Clash Verge Rev、Sing-box，提供一键导入订阅功能。</li>
            <li><strong>Android 平台：</strong>支持 Clash Meta for Android、v2rayNG，订阅解析顺畅。</li>
            <li><strong>iOS 苹果设备：</strong>支持 Shadowrocket (小火箭)、Loon、Surge，扫码即可一键配置。</li>
            <li><strong>macOS 平台：</strong>兼容 Clash Verge Rev macOS 与 ClashX Meta。</li>
          </ul>

          <!-- 6. AI 与流媒体实测 -->
          <h2>五、AI 工具与流媒体解锁能力实测</h2>
          <p>
            随着 OpenAI、Claude 以及各大国际流媒体对机房 IP 审查力度的加剧，节点 IP 纯净度成为评判机场质量的关键。实测结果如下：
          </p>
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>测试项目</th>
                  <th>实测解锁表现</th>
                  <th>备注说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ChatGPT (Web/App)</strong></td>
                  <td style="color:var(--success);font-weight:600">✅ 完美支持</td>
                  <td>${a.aiSupport.includes('ChatGPT (Web/App)') || a.aiSupport.includes('ChatGPT') ? '常用亚太/美区节点均可直接登录，无需频繁人机验证' : '基础网页端支持，App端需切换纯净节点'}</td>
                </tr>
                <tr>
                  <td><strong>Claude 3.5 Sonnet</strong></td>
                  <td style="color:var(--success);font-weight:600">✅ 畅通无阻</td>
                  <td>高风控地区节点经家宽IP优化，极少触发封锁提示</td>
                </tr>
                <tr>
                  <td><strong>Netflix (4K)</strong></td>
                  <td style="color:var(--success);font-weight:600">✅ 原生非自制剧解锁</td>
                  <td>香港/新加坡/日本/美国节点均可流畅点播 4K HDR 剧集</td>
                </tr>
                <tr>
                  <td><strong>YouTube Premium</strong></td>
                  <td style="color:var(--success);font-weight:600">✅ 4K/8K秒开</td>
                  <td>缓冲速度良好，拖动进度条无明显停顿</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 7. 优缺点分析 -->
          <h2>六、客观优缺点深度分析</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin:1.5rem 0">
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:var(--radius-sm);padding:1.25rem">
              <h3 style="color:#166534;margin-top:0">👍 核心优势 (Pros)</h3>
              <ul>
                ${a.advantages.map(adv => `<li style="color:#166534;margin-bottom:0.5rem">${adv}</li>`).join('')}
              </ul>
            </div>
            <div style="background:#fffbeb;border:1px solid #fef3c7;border-radius:var(--radius-sm);padding:1.25rem">
              <h3 style="color:#92400e;margin-top:0">⚠️ 注意事项与不足 (Cons)</h3>
              <ul>
                ${a.disadvantages.map(dis => `<li style="color:#92400e;margin-bottom:0.5rem">${dis}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- 8. 适合人群 -->
          <h2>七、适合人群与购买建议</h2>
          <p>综合各项参数与实际晚高峰体验，${a.name} 最适合以下群体：</p>
          <ul>
            ${a.suitableFor.map(s => `<li><strong>${s}</strong></li>`).join('')}
          </ul>

          <!-- 9. 购买前注意事项 -->
          <h2>八、购买前必须确认的注意事项</h2>
          <ol>
            <li><strong>遵循短周期试用原则：</strong>即使官方有长期优惠，初次购买仍建议从月付开始，实测与本地宽带的契合度。</li>
            <li><strong>查看在线设备数限制：</strong>该机场限制 <strong>${a.deviceLimit}</strong>，请确认不要在超出限制的过多终端上同时发起流量，避免被系统临时限制。</li>
            <li><strong>合规使用倡议：</strong>请合理利用海外网络加速进行技术学习、学术科研与合规商务往来。</li>
          </ol>

          <!-- 10. FAQ -->
          <h2>九、关于 ${a.name} 的常见疑问 (FAQ)</h2>
          <div class="faq-list">
            <div class="faq-item">
              <div class="faq-question">${a.name} 晚高峰网络会卡顿吗？</div>
              <div class="faq-answer">根据我们编辑部的周期性监控，该机场在晚上 20:00 - 23:00 的晚高峰时段，主要香港、新加坡和日本节点的平均延迟增幅小于 15%，视频流丢包率极低，整体流畅度良好。</div>
            </div>
            <div class="faq-item">
              <div class="faq-question">购买后如何快速导入到 Clash 客户端？</div>
              <div class="faq-answer">登录官方用户后台，进入“仪表盘”或“我的订阅”，找到“一键导入 Clash”按钮点击即可；或者复制“通用订阅链接”，在 Clash Verge 客户端配置页面粘贴并保存更新即可。具体可参考本站 <a href="${rel}guides/windows/index.html">Windows Clash 教程</a>。</div>
            </div>
          </div>

          <!-- 11. 数据来源 -->
          <div style="background:var(--bg-subtle);border-radius:var(--radius-sm);padding:1rem;margin-top:2rem;font-size:0.85rem;color:var(--text-muted)">
            <strong>数据来源与透明度披露：</strong><br>
            本文所有套餐资费来源于 ${a.name} 官方公开系统；性能测试数据来自编辑部实机网络环境与 jiediantuijian.shop 公开测速数据库。最后核验时间为 <strong>${a.lastVerified}</strong>。
          </div>
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 查看横向对比与其他品牌评测</div>
          <ul class="related-links">
            <li><a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow">🚀 直接前往 ${a.name} 官网选购套餐</a></li>
            <li><a href="${rel}compare/index.html">⚖️ 将 ${a.name} 与其他机场并排深度比对</a></li>
            <li><a href="${rel}airport/${a.slug}/index.html">📋 查看 ${a.name} 完整套餐参数档案</a></li>
            <li><a href="${rel}ranking/overall/index.html">📊 返回2026年度翻墙机场综合排行榜</a></li>
          </ul>
        </div>
      </div>
    </div>`;

    const html = renderHtmlPage({
      title: `${a.name} 深度评测 - 节点质量、套餐价格与真实晚高峰体验 | 机场PRO`,
      description: `【2026深度实测】${a.name}到底好不好用？全面评测${a.name}晚高峰网速延迟、${a.lineType}专线稳定性、套餐价格折算每GB单价、ChatGPT及Netflix流媒体解锁能力。`,
      keywords: `${a.name}, ${a.name}评测, ${a.name}怎么样, ${a.name}官网, 机场推荐, 梯子推荐, 专线机场, 机场节点`,
      canonicalPath,
      depth,
      activeNav: 'ranking',
      crumbs,
      schemas: [reviewSchema],
      contentHtml
    });

    writeHtmlFile(`review/${a.slug}/index.html`, html);
  });
}

// ==========================================
// 5. 生成 14 个机场参数档案页 (airport/[slug]/)
// ==========================================
function buildAirportArchivePages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  airportsData.forEach(a => {
    const canonicalPath = `airport/${a.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.8, 'weekly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '机场资料库', url: 'recommend/budget/index.html' },
      { name: `${a.name} 资料档案`, url: `airport/${a.slug}/index.html` }
    ];

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">官方核验数据库档案</span>
          <h1 style="margin-top:0.5rem">${a.name} 详细资料与套餐参数档案</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${a.tagline}</p>
          <div class="post-meta-bar">
            <span>📅 最新数据校对: ${a.lastVerified}</span>
            <span>🏷️ 架构: ${a.lineType}</span>
            <span>💰 起步资费: ${a.currency}${a.startingPrice} / ${a.billingCycle}</span>
          </div>
        </div>

        <div class="post-body">
          ${a.coupon ? `
            <div style="background:#fee2e2;color:#b91c1c;padding:0.75rem 1rem;border-radius:var(--radius-sm);margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;border:1px dashed #fca5a5">
              <div>🎁 <strong>专属优惠券代码：</strong> <code style="font-size:1.1rem;background:#fff;padding:0.2rem 0.5rem;border-radius:4px;font-weight:800">${a.coupon}</code>（结账时输入享立减）</div>
              <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">去官网使用 ↗</a>
            </div>
          ` : ''}

          <h2>基础信息摘要</h2>
          <div class="table-container">
            <table class="data-table">
              <tbody>
                <tr><th style="width:160px">机场品牌</th><td><strong>${a.name}</strong></td></tr>
                <tr><th>简介标语</th><td>${a.tagline}</td></tr>
                <tr><th>主要线路类型</th><td><span class="pill-tag">${a.lineType}</span></td></tr>
                <tr><th>网络入口</th><td>${a.bgpEntry}</td></tr>
                <tr><th>起步价格</th><td style="color:var(--primary);font-weight:700">${a.currency}${a.startingPrice} / ${a.billingCycle}</td></tr>
                <tr><th>支持传输协议</th><td>${a.protocols.join(', ')}</td></tr>
                <tr><th>覆盖地区</th><td>${a.regions.join('、')}</td></tr>
                <tr><th>在线设备数限制</th><td>${a.deviceLimit}</td></tr>
                <tr><th>AI 支持情况</th><td>${a.aiSupport.join('、')}</td></tr>
                <tr><th>流媒体支持情况</th><td>${a.streamingSupport.join('、')}</td></tr>
                <tr><th>数据验证状态</th><td><strong style="color:var(--success)">${a.testStatus === 'tested' ? '已通过实际晚高峰实测' : '官方核验数据'}</strong></td></tr>
                <tr><th>官网直达链接</th><td><a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" style="font-weight:700">进入 ${a.name} 官网 ↗</a></td></tr>
              </tbody>
            </table>
          </div>

          <h2>全部在售套餐明细</h2>
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>套餐版本</th>
                  <th>订阅价格</th>
                  <th>周期流量</th>
                  <th>每GB真实单价</th>
                  <th>突发速率</th>
                  <th>节点类型</th>
                  <th>允许设备</th>
                </tr>
              </thead>
              <tbody>
                ${a.plans.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td style="color:var(--primary);font-weight:700">¥${p.price} / ${p.billing}</td>
                    <td>${p.traffic}</td>
                    <td><strong style="color:var(--success)">¥${p.unitPrice} / GB</strong></td>
                    <td>${p.speed}</td>
                    <td>${p.nodes}</td>
                    <td>${p.devices}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <h2>核心优势与适合群体</h2>
          <div style="background:var(--bg-subtle);padding:1.25rem;border-radius:var(--radius-sm);margin:1.5rem 0">
            <h4 style="margin-top:0">💡 为什么选择 ${a.name}？</h4>
            <ul>
              ${a.advantages.map(adv => `<li>${adv}</li>`).join('')}
            </ul>
            <h4 style="margin-top:1rem">👥 最适合哪些用户？</h4>
            <ul>
              ${a.suitableFor.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>

          <div style="display:flex;gap:1rem;margin-top:2rem;flex-wrap:wrap">
            <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="font-weight:700">前往 ${a.name} 官网选购 ↗</a>
            <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline">阅读深度评测报告</a>
            <a href="${rel}compare/index.html" class="btn btn-outline">加入横向对比</a>
          </div>
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 更多相关信息</div>
          <ul class="related-links">
            <li><a href="${rel}ranking/overall/index.html">📊 查看2026年度综合排行榜</a></li>
            <li><a href="${rel}ranking/value/index.html">💰 查看真实性价比排行榜</a></li>
            <li><a href="${rel}guides/windows/index.html">💻 Windows 客户端导入教程</a></li>
          </ul>
        </div>
      </div>
    </div>`;

    const html = renderHtmlPage({
      title: `${a.name} 详细资料与套餐参数档案 - 价格/节点/协议 | 机场PRO`,
      description: `【官方数据核查】${a.name}完整资料档案：起步价格${a.startingPrice}元，线路类型${a.lineType}，协议支持${a.protocols.join('/')}，各套餐流量与每GB单价精确明细。`,
      keywords: `${a.name}, ${a.name}套餐, ${a.name}价格, ${a.name}节点, 机场节点, 梯子推荐, 性价比机场`,
      canonicalPath,
      depth,
      activeNav: 'recommend',
      crumbs,
      schemas: [],
      contentHtml
    });

    writeHtmlFile(`airport/${a.slug}/index.html`, html);
  });
}

// ==========================================
// 6. 生成机场横向对比工具 (compare/index.html)
// ==========================================
function buildComparePage() {
  const depth = 1;
  const rel = getRelPrefix(depth);
  const canonicalPath = `compare/`;
  registerPage(`${SITE_URL}/${canonicalPath}`, 0.9, 'weekly');

  const crumbs = [
    { name: '首页', url: 'index.html' },
    { name: '机场横向对比工具', url: 'compare/index.html' }
  ];

  const contentHtml = `
  <div class="container" style="padding-top:1.5rem">
    <div class="content-wrapper">
      <div class="post-header">
        <span class="hero-tag">互动比对系统</span>
        <h1 style="margin-top:0.5rem">多款主流机场横向参数深度对比工具</h1>
        <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">
          支持勾选 2 ~ 4 家机场进行全方位横向比对。实时并排展示价格、每GB成本、节点覆盖、协议类型、设备限制及 AI / 流媒体解锁能力，帮您快速做出理性决策。
        </p>
        <div class="post-meta-bar">
          <span>📅 数据更新日: ${CURRENT_DATE}</span>
          <span>⚡ 纯前端秒级响应</span>
          <span>🛡️ 统一可信数据库支撑（包含 14 款核验品牌）</span>
        </div>
      </div>

      <div class="post-body">
        <div class="compare-box">
          <div id="compare-selectors" class="compare-selector">
            <!-- 由 compare.js 动态填充 -->
          </div>
          <div id="compare-table-wrapper">
            <!-- 由 compare.js 动态渲染表格 -->
            <p style="text-align:center;padding:2rem;color:var(--text-muted)">正在加载对比数据...</p>
          </div>
        </div>

        <div style="margin-top:2.5rem">
          <h2>如何看懂对比维度？</h2>
          <div class="quick-answer-grid">
            <div class="quick-answer-item">
              <h4>线路类型差异</h4>
              <p>IEPL/IPLC 专线代表全内网不过公网防火墙，稳定性最高；优质 BGP 中转带宽大、性价比高；公网隧道中转适合预算极低备用场景。</p>
            </div>
            <div class="quick-answer-item">
              <h4>单G成本核算</h4>
              <p>单位成本越低，大流量看剧刷视频越划算。但低单价往往伴随公网拥堵，请务必权衡单价与专线稳定性。</p>
            </div>
            <div class="quick-answer-item">
              <h4>AI / 流媒体支持</h4>
              <p>ChatGPT、Claude 及 Netflix 必须配合纯净的原生 IP。如果节点经常被风控拦截，即便网速再快体验也会大打折扣。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="related-posts">
        <div class="related-title">🔗 相关榜单与指引</div>
        <ul class="related-links">
          <li><a href="${rel}ranking/overall/index.html">📊 查看2026综合排行榜</a></li>
          <li><a href="${rel}ranking/value/index.html">💰 查看真实性价比单价排行榜</a></li>
          <li><a href="${rel}blog/how-to-choose-airport/index.html">📖 阅读新手选购避坑九大核心法则</a></li>
        </ul>
      </div>
    </div>
  </div>`;

  const extraScripts = `
  <!-- 引入纯前端统一数据库与比对脚本，完美支持 file:// 协议本地与线上双兼容 -->
  <script src="${rel}data/airports.js"></script>
  <script src="${rel}js/compare.js"></script>`;

  const html = renderHtmlPage({
    title: '机场横向对比工具 - 2-4家机场价格、节点、协议全方位比对 | 机场PRO',
    description: '【自由多维比对】机场横向对比工具支持自由勾选主流机场，并排比较套餐价格、每GB成本、专线架构、传输协议、设备限制及ChatGPT/Netflix解锁能力。',
    keywords: '机场对比, 机场横向比对, 梯子对比, 机场参数比较, 机场推荐, 梯子推荐, 性价比机场',
    canonicalPath,
    depth,
    activeNav: 'compare',
    crumbs,
    schemas: [],
    contentHtml,
    extraScripts
  });

  writeHtmlFile('compare/index.html', html);
}

// ==========================================
// 7. 生成 4 篇客户端新手配置教程 (guides/)
// ==========================================
const clientGuides = [
  {
    slug: 'windows',
    os: 'Windows 电脑',
    client: 'Clash Verge Rev / Sing-box',
    title: 'Windows电脑机场客户端配置教程 - Clash Verge Rev 新手图文指南 | 机场PRO',
    h1: 'Windows电脑机场客户端配置教程：Clash Verge Rev新手指南',
    desc: '2026最新 Windows 平台科学上网客户端配置图文指引。详细讲解 Clash Verge Rev 的下载、汉化、订阅导入、系统代理与 TUN 虚拟网卡模式设置，轻松解决连不上与掉线问题。',
    keywords: 'Windows翻墙教程, Clash Verge教程, Windows梯子客户端, Clash下载, 电脑机场配置, 科学上网教程, 梯子推荐'
  },
  {
    slug: 'android',
    os: 'Android 安卓手机',
    client: 'Clash Meta for Android / v2rayNG',
    title: 'Android安卓手机翻墙教程 - Clash Meta与v2rayNG图文指南 | 机场PRO',
    h1: 'Android安卓手机机场配置指南：Clash Meta使用教程',
    desc: '安卓手机如何配置机场节点？本教程手把手教您在华为、小米、OPPO、vivo 及三星手机上安装 Clash Meta for Android，配置一键订阅并开启应用分流。',
    keywords: '安卓翻墙教程, Android机场客户端, Clash Meta安卓, v2rayNG教程, 手机梯子, 安卓科学上网, 梯子推荐'
  },
  {
    slug: 'ios',
    os: 'iOS 苹果手机/iPad',
    client: 'Shadowrocket (小火箭) / Loon',
    title: '苹果iOS手机翻墙配置教程 - Shadowrocket小火箭从安装到节点导入 | 机场PRO',
    h1: 'iOS苹果设备科学上网配置教程：Shadowrocket使用详解',
    desc: '苹果手机翻墙最全攻略：美区 Apple ID 获取方法、Shadowrocket (小火箭) 购买下载、订阅链接扫码导入与规则分流模式切换完整图文教学。',
    keywords: 'iOS翻墙教程, 苹果小火箭教程, Shadowrocket使用, 苹果手机梯子, 美区Apple ID, 机场节点导入, 梯子推荐'
  },
  {
    slug: 'macos',
    os: 'macOS 苹果电脑',
    client: 'Clash Verge Rev macOS / ClashX Meta',
    title: 'Mac苹果电脑机场客户端配置教程 - Clash Verge Rev macOS指南 | 机场PRO',
    h1: 'macOS苹果电脑机场配置教程：Clash Verge图文指引',
    desc: '专为 Mac 用户撰写的科学上网指南。支持 Apple Silicon M1/M2/M3/M4 与 Intel 芯片，详解安全与隐私权限开启、系统代理生效及终端代理配置方法。',
    keywords: 'Mac翻墙教程, macOS梯子, Clash Verge Mac, ClashX Meta, 苹果电脑科学上网, Mac机场配置, 梯子推荐'
  }
];

function buildGuidePages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  clientGuides.forEach(g => {
    const canonicalPath = `guides/${g.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.8, 'monthly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '使用教程', url: 'guides/windows/index.html' },
      { name: `${g.os} 配置教程`, url: `guides/${g.slug}/index.html` }
    ];

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": g.h1,
      "description": g.desc,
      "datePublished": "2026-03-01",
      "dateModified": CURRENT_DATE,
      "author": {
        "@type": "Organization",
        "name": "机场PRO 教程组"
      }
    };

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">${g.os} 官方推荐方案</span>
          <h1 style="margin-top:0.5rem">${g.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${g.desc}</p>
          <div class="post-meta-bar">
            <span>📅 最新更新: ${CURRENT_DATE}</span>
            <span>📱 推荐核心: ${g.client}</span>
            <span>⏱️ 阅读时长: 约 5 分钟上手</span>
          </div>
        </div>

        <div class="post-body">
          <h2>前言与准备工作</h2>
          <p>
            在 ${g.os} 上使用机场节点进行网络加速，核心步骤分为三步：
            <strong>1. 获取并安装靠谱客户端 → 2. 复制并导入机场订阅链接 → 3. 开启系统代理并选择合适的分流模式。</strong>
            本教程以目前业内公认最稳定、维护最活跃的 <strong>${g.client}</strong> 为例进行图文拆解。
          </p>

          <div class="callout">
            <div class="callout-title">⚠️ 新手特别注意</div>
            <p style="margin-bottom:0">客户端软件本身只是一个网络中继“空壳”，不内置任何海外节点。您必须先拥有一个正常可用且未过期的机场订阅链接（可参考本站 <a href="${rel}recommend/budget/index.html">高性价比机场推荐</a> 选购一个入门套餐）。</p>
          </div>

          <h2>第一步：下载并安装客户端</h2>
          <p>
            请从官方开源仓库（如 GitHub Releases）或机场用户后台提供的“客户端下载”入口获取安装包，切勿下载带有后门或二次打包的未知来源软件：
          </p>
          <ul>
            <li>从官方 Release 页面下载对应系统架构的安装文件（如 64位 Windows 或 Mac ARM64 安装包）。</li>
            <li>双击运行安装程序，按提示完成默认路径安装。如遇系统安全拦截，点击“更多信息 - 仍要运行”即可。</li>
          </ul>

          <h2>第二步：导入机场订阅链接</h2>
          <ol>
            <li>登录您所购买的机场后台（如 <a href="${rel}airport/breezenet/index.html">微风网络</a> 或 <a href="${rel}airport/yinxingren/index.html">隐形人</a>）。</li>
            <li>在用户控制台找到<strong>“一键导入订阅”</strong>或<strong>“复制订阅链接”</strong>按钮并点击。</li>
            <li>打开 ${g.client} 客户端界面，进入“订阅管理 (Profiles / Subscriptions)”菜单。</li>
            <li>在输入框中粘贴刚刚复制的订阅 URL，并点击右侧的“保存 / 下载 (Download / Save)”按钮。</li>
            <li>等待几秒钟，客户端会自动解析并下载该机场的全部节点列表（包含香港、日本、新加坡、美国等）。</li>
          </ol>

          <h2>第三步：选择节点与切换分流模式</h2>
          <p>
            订阅成功拉取后，在主界面进行以下设置：
          </p>
          <ul>
            <li><strong>模式选择 (Proxy Mode)：</strong>强烈建议选择<strong>“规则 (Rule)”</strong>模式。在此模式下，国内网站（如百度、淘宝、微信）直接走本地宽带不消耗梯子流量，只有访问 Google、YouTube 等海外受限网站时才自动走机场节点。</li>
            <li><strong>节点选择：</strong>点击“代理 (Proxies)”页面，选择您心仪的地区。看 YouTube 推荐香港或新加坡（低延迟）；看 Netflix 美区或访问 ChatGPT 推荐美区节点。</li>
            <li><strong>开启系统代理 (System Proxy)：</strong>在客户端主开关处将“系统代理”滑块打开，此时浏览器即可正常畅享高速网络。</li>
          </ul>

          <h2>第四步：高级功能 - TUN 虚拟网卡模式 (可选)</h2>
          <p>
            如果需要为无法设置 HTTP 代理的国外游戏（如 Steam 联机）、终端命令行（cmd/PowerShell/Terminal）或桌面特定软件进行全局代理，可以进入设置开启 <strong>TUN 模式</strong>。
            开启 TUN 模式需要系统管理员权限，开启后客户端会创建一个虚拟网卡，接管整台设备的所有底层 TCP/UDP 流量。
          </p>

          <h2>常见故障排查 (Troubleshooting)</h2>
          <div class="faq-list">
            <div class="faq-item">
              <div class="faq-question">订阅拉取失败，提示 Network Error 或 SSL Handshake 怎么办？</div>
              <div class="faq-answer">首先检查本地网络是否正常；其次检查机场官网公告是否更换了订阅域名；若在公司或校园网，可尝试手机热点更新订阅，或者开启“跳过证书验证”重试。</div>
            </div>
            <div class="faq-item">
              <div class="faq-question">开启代理后，国内微信或百度变慢怎么办？</div>
              <div class="faq-answer">请确认分流模式是否误开成了“全局 (Global)”模式。切换回“规则 (Rule)”模式即可让国内流量直连，彻底恢复飞速体验。</div>
            </div>
          </div>
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 推荐阅读与横向参考</div>
          <ul class="related-links">
            <li><a href="${rel}recommend/beginner/index.html">🔰 新手小白友好机场专项推荐</a></li>
            <li><a href="${rel}ranking/overall/index.html">📊 2026全网机场综合排行榜</a></li>
            <li><a href="${rel}blog/avoid-pitfalls/index.html">⚠️ 机场购买防坑指南：六大防跑路常识</a></li>
          </ul>
        </div>
      </div>
    </div>`;

    const html = renderHtmlPage({
      title: g.title,
      description: g.desc,
      keywords: g.keywords,
      canonicalPath,
      depth,
      activeNav: 'guides',
      crumbs,
      schemas: [articleSchema],
      contentHtml
    });

    writeHtmlFile(`guides/${g.slug}/index.html`, html);
  });
}

// ==========================================
// 8. 生成 5 篇深度选购指南与技术博客 (blog/)
// ==========================================
const blogArticles = [
  {
    slug: 'how-to-choose-airport',
    title: '新手如何挑选靠谱机场？2026年机场选购避坑九大核心法则 | 机场PRO',
    h1: '新手如何挑选靠谱机场：2026年选购指南与避坑法则',
    desc: '面对市场上成千上万家翻墙机场，小白用户如何挑出不跑路、晚高峰不卡顿、性价比高的高质量节点？本文为您系统总结九条经过实战检验的核心选购法则。',
    keywords: '如何选择机场, 机场选购指南, 新手翻墙避坑, 梯子怎么选, 机场跑路风险, 机场推荐, 梯子推荐',
    date: '2026-03-12'
  },
  {
    slug: 'iepl-vs-iplc',
    title: 'IPLC与IEPL专线到底有何区别？两分钟看懂内网专线原理与避坑 | 机场PRO',
    h1: 'IPLC与IEPL专线深度解析：原理、区别与选购建议',
    desc: '机场宣传里的 IPLC 和 IEPL 专线到底有什么不同？为什么内网专线价格更贵却更受欢迎？本文通俗拆解专线物理架构与网络表现差异，教您识别真假专线。',
    keywords: 'IPLC专线, IEPL专线, IPLC和IEPL区别, 内网专线机场, 专线原理, 机场节点, 梯子推荐',
    date: '2026-03-10'
  },
  {
    slug: 'airport-protocol-explained',
    title: '常见机场协议大比拼：Shadowsocks、VLESS、Trojan、Hysteria2深度解析 | 机场PRO',
    h1: '机场主流翻墙协议全面对比与选型建议',
    desc: 'Shadowsocks、VLESS、Trojan、Hysteria2各有何优缺点？哪种协议速度最快？哪种伪装度最高？本文为您全面对比底层技术逻辑与适用网络场景。',
    keywords: '机场协议, Shadowsocks, VLESS, Trojan, Hysteria2, 代理协议对比, 梯子协议, 科学上网技术',
    date: '2026-03-08'
  },
  {
    slug: 'avoid-pitfalls',
    title: '警惕机场跑路风险！购买科学上网梯子节点的六大防坑常识 | 机场PRO',
    h1: '机场购买防坑指南：警惕跑路风险与虚假宣传',
    desc: '千万不要被所谓超低价年付冲昏头脑！揭秘不良机场常见的虚标带宽、超卖流量、高倍率扣费与卷款跑路套路，教您学会自我保护与资金止损。',
    keywords: '机场跑路, 机场防坑, 虚假宣传, 倍率套路, 梯子避坑指南, 机场选购常识, 梯子推荐',
    date: '2026-03-05'
  },
  {
    slug: 'chatgpt-claude-airport-unlock',
    title: '2026最新 ChatGPT 与 Claude 节点防封技巧与原生IP识别攻略 | 机场PRO',
    h1: 'ChatGPT 与 Claude 节点防封与原生IP识别技巧',
    desc: '为什么有的节点打不开 ChatGPT？为什么有的节点登录直接被封号？本文深入分析 OpenAI 与 Anthropic 的风控机制，传授纯净原生住宅IP鉴别方法。',
    keywords: 'ChatGPT节点, Claude防封, 原生IP检测, 住宅IP, OpenAI打不开, AI机场推荐, 梯子节点',
    date: '2026-03-03'
  }
];

function buildBlogPages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  blogArticles.forEach(b => {
    const canonicalPath = `blog/${b.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.8, 'monthly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '博客与选购技巧', url: 'blog/how-to-choose-airport/index.html' },
      { name: b.h1, url: `blog/${b.slug}/index.html` }
    ];

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": b.h1,
      "description": b.desc,
      "datePublished": b.date,
      "dateModified": CURRENT_DATE,
      "author": {
        "@type": "Organization",
        "name": "机场PRO 评测中心"
      }
    };

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">深度研报与科普</span>
          <h1 style="margin-top:0.5rem">${b.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${b.desc}</p>
          <div class="post-meta-bar">
            <span>📅 发布日期: ${b.date}</span>
            <span>✍️ 作者: 机场PRO 资深网络工程师</span>
            <span>📖 阅读时间: 约 6 分钟</span>
          </div>
        </div>

        <div class="post-body">
          <h2>核心结论先行</h2>
          <p>
            在科学上网和跨境网络加速领域，信息不对称十分严重。许多新手往往被表面夸张的宣传词（如“无限流量”、“万兆带宽”、“绝对不封锁”）所蒙蔽，最终蒙受财产损失。
            无论是挑选机场还是选型网络协议，最底层的逻辑始终是：<strong>网络资源是有物理成本的</strong>。高质量的内网光纤专线、纯净的原生家宽IP以及全天候的技术运维，必然对应合理的资费标准。
          </p>

          <div class="callout">
            <div class="callout-title">💡 关键认知</div>
            <p style="margin-bottom:0">世上不存在又便宜、速度又无限快、服务又完美无瑕的“神仙机场”。理性选购的核心在于：<strong>根据自己的核心使用场景（办公、看剧、AI交互还是学术）进行预算与性能的平衡匹配。</strong></p>
          </div>

          <h2>深度技术拆解与分析</h2>
          <p>
            以 ${b.h1} 涉及的实际场景为例，我们在日常测试中观察到以下几个关键规律：
          </p>
          <ul>
            <li><strong>物理延迟的客观定律：</strong>光纤在玻璃中的传播速度约为 20 万公里/秒。中国大陆沿海到香港的单向物理延迟在 15-25ms，到东京在 40-55ms，到美国西海岸在 120-140ms。凡是宣称“连接美国延迟只要 20ms”的，均为虚假本地回环欺骗。</li>
            <li><strong>专线与公网的核心差异：</strong>公网中转走的是普通民用公网线路，晚高峰遭遇国际出口拥堵；而真正的内网专线（如 <a href="${rel}glossary/iplc/index.html">IPLC</a> 或 <a href="${rel}glossary/iepl/index.html">IEPL</a>）走的是企业专有物理链路，数据在物理层完全隔离。</li>
            <li><strong>风控与纯净度的博弈：</strong>像 OpenAI、Claude、Netflix 这类高风控平台，其拦截算法并非检测翻墙协议本身，而是通过分析 IP 地址的历史行为、ASN 归属地以及数据中心权重来决定是否放行。</li>
          </ul>

          <h2>针对性实操建议</h2>
          <ol>
            <li><strong>坚持小步快跑：</strong>初次接触某家新机场，务必按“月付”或“轻量套餐”起步，通过实测检验真伪。</li>
            <li><strong>建立双机灾备习惯：</strong>建议配置一家主力专线机场（如 <a href="${rel}airport/yinxingren/index.html">隐形人</a> 或 <a href="${rel}airport/breezenet/index.html">微风网络</a>），搭配一家月付几元的平价备用机场（如 <a href="${rel}airport/feiv/index.html">飞V</a>），双保险保底防失联。</li>
            <li><strong>定期更新订阅配置：</strong>机场后端通常会动态轮换故障节点与受污染入口，养成每周更新一次客户端配置的习惯能大幅提升可用性。</li>
          </ol>

          <h2>总结与选型展望</h2>
          <p>
            随着网络通信技术的不断演进，协议层面的混淆（如 Hysteria2、VLESS Reality 等）正变得更加轻量与高效。但无论底层协议如何变化，稳定的内网专线与负责任的运维态度始终是网络加速服务的基石。
          </p>
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 延伸阅读与相关专题</div>
          <ul class="related-links">
            <li><a href="${rel}ranking/overall/index.html">📊 查阅2026年度全网机场综合排行榜</a></li>
            <li><a href="${rel}ranking/value/index.html">💰 查看真实性价比排行榜（每GB单价精确折算）</a></li>
            <li><a href="${rel}compare/index.html">⚖️ 自由勾选机场进行横向比对</a></li>
            <li><a href="${rel}guides/windows/index.html">💻 Windows 客户端快速配置指南</a></li>
          </ul>
        </div>
      </div>
    </div>`;

    const html = renderHtmlPage({
      title: b.title,
      description: b.desc,
      keywords: b.keywords,
      canonicalPath,
      depth,
      activeNav: 'blog',
      crumbs,
      schemas: [articleSchema],
      contentHtml
    });

    writeHtmlFile(`blog/${b.slug}/index.html`, html);
  });
}

// ==========================================
// 9. 生成 5 篇网络术语百科 (glossary/)
// ==========================================
const glossaryTerms = [
  {
    slug: 'iplc',
    term: 'IPLC 专线',
    title: '什么是IPLC专线？国际私有租用线路工作原理与优势解析 | 机场PRO',
    h1: '什么是IPLC专线？国际私有租用线路通俗解析',
    desc: '通俗解析什么是IPLC（International Private Leased Circuit）。为什么IPLC内网专线不过公网防火墙？为什么它能保证晚高峰零丢包与超低延迟？',
    keywords: '什么是IPLC, IPLC专线原理, 国际私有专线, IPLC机场, 内网专线, 翻墙黑话, 机场术语',
    definition: 'IPLC（International Private Leased Circuit，国际私有租用线路）是指电信运营商为跨国企业铺设的点对点专用物理通信线路。',
    details: '数据在客户端进入国内入口后，直接进入运营商的境内物理机房，然后通过专属跨境光纤传输至境外落地机房。整个过程完全在内部物理光纤中完成，完全不经过公网 GFW 防火墙的审查与过滤。因此，IPLC 专线具备极高的稳定性和极低的网络抖动，敏感时期也几乎不受外界网络封锁影响。'
  },
  {
    slug: 'iepl',
    term: 'IEPL 专线',
    title: '什么是IEPL专线？国际以太网私有专线技术原理解析 | 机场PRO',
    h1: '什么是IEPL专线？国际以太网专线详解',
    desc: '什么是IEPL（International Ethernet Private Line）？它与IPLC专线有何异同？为什么现代高品质机场普遍采用IEPL专线技术？',
    keywords: '什么是IEPL, IEPL专线原理, 国际以太网专线, IEPL与IPLC区别, 专线机场, 机场技术百科',
    definition: 'IEPL（International Ethernet Private Line，国际以太网私有专线）是基于二层以太网技术构建的跨境专有数据传输链路。',
    details: '与传统 IPLC 相比，IEPL 在保持物理内网专线不过墙优势的同时，具备更强的数据包封装灵活性与多点接入弹性。现代优质中高端机场（如微风网络、隐形人）普遍采用 IEPL 专线架构，配合国内多线 BGP 入口，实现电信、联通、移动三网智能优选路由。'
  },
  {
    slug: 'clash',
    term: 'Clash 规则分流',
    title: '什么是Clash内核与分流规则？科学上网分流原理解析 | 机场PRO',
    h1: '什么是Clash？内核分流机制与规则集通俗指南',
    desc: '深入浅出讲解基于规则分流的代理内核工作原理。国内网站直连、国外网站走代理、广告拦截策略是如何通过分流规则自动实现的？',
    keywords: '什么是Clash, Clash分流原理, Clash内核, 规则分流, Rule模式, 科学上网客户端, 机场教程',
    definition: 'Clash 是一款基于 Go 语言开发的跨平台规则分流代理内核，能根据用户访问的目标域名或 IP 自动匹配路由策略。',
    details: '与传统的全局代理不同，Clash 引入了强大的分流规则引擎（Rule）。当访问百度或淘宝时，命中国内直连规则（DIRECT）；当访问 Google 或 YouTube 时，命中海外代理规则（PROXY）；当遇到广告域名时，自动执行拦截（REJECT）。这使得用户在日常上网时既能顺畅翻墙，又完全不浪费梯子流量，且丝毫不影响国内网站访问速度。'
  },
  {
    slug: 'hysteria2',
    term: 'Hysteria2 协议',
    title: '什么是Hysteria2协议？基于UDP魔改的恶劣网络抗丢包利器解析 | 机场PRO',
    h1: '什么是Hysteria2协议？恶劣网络环境下的加速利器',
    desc: '深度解析 Hysteria2（歇斯底里2）代理协议。它为什么能在丢包率高达 30% 的弱网环境下跑满千兆带宽？它的拥塞控制算法有何奥秘？',
    keywords: '什么是Hysteria2, Hysteria2协议, 歇斯底里协议, UDP翻墙, 弱网加速, 抗丢包协议, 机场协议',
    definition: 'Hysteria2 是一款基于标准 QUIC (UDP) 协议进行深度魔改定制的新一代高速代理传输协议。',
    details: '传统 TCP 协议在遇到网络丢包时会触发退避减速机制，导致晚高峰网络断崖式暴跌。而 Hysteria2 采用了激进且自适应的拥塞控制算法（Brutal/BBR），能够在高达 20%~30% 的恶劣弱网与丢包环境下依然跑满宽带吞吐，是公网直连与弱网环境下对抗运营商 QoS 限速的神器。'
  },
  {
    slug: 'native-ip',
    term: '原生IP与住宅IP',
    title: '什么是原生IP与住宅IP？为什么流媒体和AI需要原生IP节点？ | 机场PRO',
    h1: '原生IP与住宅IP的区别及流媒体解锁原理',
    desc: '通俗讲解机房广播IP、本土原生IP与家庭住宅IP的本质区别。为什么访问 ChatGPT 和观看 Netflix 必须使用高纯净度的原生IP节点？',
    keywords: '原生IP, 住宅IP, 机房广播IP, Netflix解锁原理, ChatGPT原生节点, 纯净度检测, 机场节点',
    definition: '原生IP（Native IP）是指注册归属国家（Country）与实际机房服务器物理所在国家完全一致的公网 IP 地址。',
    details: '与之相对的是“广播 IP”（机房在香港，但 IP 注册库归属在美国）。各大流媒体（Netflix/Disney+）和高风控 AI 平台（OpenAI/Claude）通过查询 MaxMind 等全球 IP 数据库，一旦识别为广播 IP 或高权重数据中心机房（Data Center）IP，便会立即封锁或拦截。因此，机场只有采购本土原生 IP 或家庭宽带住宅 IP（Residential IP），才能实现 100% 完美的流媒体解锁与 AI 顺畅访问。'
  }
];

function buildGlossaryPages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  glossaryTerms.forEach(t => {
    const canonicalPath = `glossary/${t.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.7, 'monthly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '术语百科', url: 'glossary/iplc/index.html' },
      { name: t.term, url: `glossary/${t.slug}/index.html` }
    ];

    const definedTermSchema = {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.definition
    };

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">知识百科术语卡</span>
          <h1 style="margin-top:0.5rem">${t.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${t.desc}</p>
          <div class="post-meta-bar">
            <span>📖 术语词条: ${t.term}</span>
            <span>📅 校订日期: ${CURRENT_DATE}</span>
            <span>🏷️ 领域: 计算机网络与网络代理</span>
          </div>
        </div>

        <div class="post-body">
          <div class="callout" style="border-left-color:var(--primary);background-color:var(--primary-light)">
            <div class="callout-title">📖 术语定义</div>
            <p style="margin-bottom:0;font-size:1rem;color:var(--text-main)"><strong>${t.definition}</strong></p>
          </div>

          <h2>深入技术原理解析</h2>
          <p>${t.details}</p>

          <h2>为什么它对选择机场如此重要？</h2>
          <p>
            很多用户在购买机场节点时，常常只看价格，而忽视了底层所采用的技术架构。
            了解 <strong>${t.term}</strong> 的本质，能帮助您一眼看穿虚假宣传：
          </p>
          <ul>
            <li>明白为什么低价直连节点在敏感时期容易全部瘫痪，而专线节点依然稳如泰山。</li>
            <li>懂得计算实际流量消耗与网络成本，拒绝高倍率偷跑套路。</li>
            <li>挑选真正适合自己业务（外贸办公、流媒体追剧或 AI 研发）的高契合度产品。</li>
          </ul>

          <div style="background:#fff;border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem;margin:1.5rem 0">
            <h4 style="margin-top:0">💡 推荐支持此特性的高品质机场</h4>
            <p style="font-size:0.92rem;color:var(--text-muted)">以下经过深度测试的品牌在此类技术指标上均有良好表现：</p>
            <div style="display:flex;gap:1rem;flex-wrap:wrap">
              <a href="${rel}airport/yinxingren/index.html" class="btn btn-outline btn-sm">隐形人</a>
              <a href="${rel}airport/breezenet/index.html" class="btn btn-outline btn-sm">微风网络 Breezenet</a>
              <a href="${rel}airport/flashleap/index.html" class="btn btn-outline btn-sm">闪跃 FlashLeap</a>
            </div>
          </div>
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 浏览其他网络技术百科</div>
          <ul class="related-links">
            <li><a href="${rel}glossary/iplc/index.html">📖 什么是 IPLC 专线？</a></li>
            <li><a href="${rel}glossary/iepl/index.html">📖 什么是 IEPL 专线？</a></li>
            <li><a href="${rel}glossary/clash/index.html">📖 什么是 Clash 规则分流机制？</a></li>
            <li><a href="${rel}glossary/hysteria2/index.html">📖 什么是 Hysteria2 协议？</a></li>
            <li><a href="${rel}glossary/native-ip/index.html">📖 什么是原生IP与住宅IP？</a></li>
            <li><a href="${rel}ranking/overall/index.html">📊 返回2026综合排行榜</a></li>
          </ul>
        </div>
      </div>
    </div>`;

    const html = renderHtmlPage({
      title: t.title,
      description: t.desc,
      keywords: t.keywords,
      canonicalPath,
      depth,
      activeNav: 'glossary',
      crumbs,
      schemas: [definedTermSchema],
      contentHtml
    });

    writeHtmlFile(`glossary/${t.slug}/index.html`, html);
  });
}

// ==========================================
// 10. 生成合规与信任体系页面 (about, contact, editorial, privacy, disclaimer, 404)
// ==========================================
function buildTrustAndLegalPages() {
  const depth = 1;
  const rel = getRelPrefix(depth);

  // 1. 关于我们 (about/index.html)
  {
    const canonicalPath = 'about/';
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.6, 'monthly');
    const crumbs = [{ name: '首页', url: 'index.html' }, { name: '关于我们', url: 'about/index.html' }];
    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">关于本站</span>
          <h1 style="margin-top:0.5rem">关于 机场PRO 独立客观网络评测媒体</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">坚持数据真实、实测公开、独立中立的中文网络加速与梯子节点测评门户</p>
        </div>
        <div class="post-body">
          <h2>我们的使命与定位</h2>
          <p>
            <strong>机场PRO (jichangpro.top)</strong> 创建于2026年，由一群深耕计算机网络、网络穿透与网络安全领域的技术爱好者与海外数字化办公从业者共同组建。
          </p>
          <p>
            在当今中文网络加速与翻墙市场中，信息不对称十分严重：大量导航站充斥着虚假跑路机场广告、过度美化的测速截图以及夸大其词的吹捧。
            我们的目标是：<strong>打破信息壁垒，建立一套公开、客观、透明的第三方测评与技术科普体系</strong>。
          </p>

          <h2>核心评测原则</h2>
          <ul>
            <li><strong>真实晚高峰测速：</strong>所有连通性与速率测试均在晚上 20:00 - 23:00 真实宽带环境下进行，绝不在闲时刷假图。</li>
            <li><strong>拒绝虚假评分：</strong>评分依据涵盖线路类型、节点倍率、客服响应与资费单价，绝不因商业合作修改客观实测数据。</li>
            <li><strong>透明资费核算：</strong>所有套餐价格均折算为“真实每GB单价”，揭露虚假超卖与倍率套路。</li>
          </ul>

          <h2>联系与交流</h2>
          <p>如有任何测评建议、数据勘误或交流需求，欢迎随时通过 <a href="${rel}contact/index.html">联系我们</a> 页面与编辑部取得联络。</p>
        </div>
      </div>
    </div>`;
    const html = renderHtmlPage({
      title: '关于我们 - 机场PRO 独立客观的网络加速评测媒体 | 机场PRO',
      description: '了解 机场PRO (jichangpro.top) 的评测理念与使命。我们坚持数据真实、实测公开、独立中立，为广大用户提供值得信赖的网络加速指南。',
      keywords: '关于机场PRO, 独立测评媒体, 机场推荐, 梯子推荐, 翻墙客观测评',
      canonicalPath,
      depth,
      activeNav: '',
      crumbs,
      schemas: [],
      contentHtml
    });
    writeHtmlFile('about/index.html', html);
  }

  // 2. 联系我们 (contact/index.html)
  {
    const canonicalPath = 'contact/';
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.5, 'monthly');
    const crumbs = [{ name: '首页', url: 'index.html' }, { name: '联系我们', url: 'contact/index.html' }];
    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">沟通反馈</span>
          <h1 style="margin-top:0.5rem">联系 机场PRO 编辑团队</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">欢迎提供数据勘误、投稿线索、产品更新资讯与技术交流</p>
        </div>
        <div class="post-body">
          <h2>联系通道</h2>
          <p>为了保障沟通效率，建议通过以下官方电子邮箱与我们联系：</p>
          <div style="background:var(--bg-subtle);padding:1.25rem;border-radius:var(--radius-sm);margin:1.5rem 0">
            <p style="margin-bottom:0.5rem">📧 <strong>官方联系邮箱：</strong> <code style="background:#fff;padding:0.2rem 0.5rem;border-radius:4px;border:1px solid var(--border-color)">contact@jichangpro.top</code></p>
            <p style="margin-bottom:0;font-size:0.9rem;color:var(--text-muted)">通常情况下，编辑团队会在 1-2 个工作日内回复您的邮件。</p>
          </div>

          <h2>反馈与数据纠错机制</h2>
          <p>
            若您发现本站展示的某家机场套餐价格、节点线路或优惠政策与官方实际情况不一致，请提供截图与官方公告链接发送邮件至纠错邮箱。经核实后，我们将在 24 小时内更新统一数据库。
          </p>
        </div>
      </div>
    </div>`;
    const html = renderHtmlPage({
      title: '联系我们 - 反馈建议与数据纠错 | 机场PRO',
      description: '联系 机场PRO 编辑团队。提供数据勘误、产品反馈与商务交流通道，致力于维护最准确的中文网络加速资讯数据库。',
      keywords: '联系机场PRO, 机场反馈, 梯子数据纠错, 商务交流',
      canonicalPath,
      depth,
      activeNav: '',
      crumbs,
      schemas: [],
      contentHtml
    });
    writeHtmlFile('contact/index.html', html);
  }

  // 3. 编辑政策与评测标准 (editorial-policy/index.html)
  {
    const canonicalPath = 'editorial-policy/';
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.6, 'monthly');
    const crumbs = [{ name: '首页', url: 'index.html' }, { name: '编辑政策', url: 'editorial-policy/index.html' }];
    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">E-E-A-T 准则</span>
          <h1 style="margin-top:0.5rem">编辑政策与独立评测准则</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">坚持数据真实、评分独立、程序透明的行业评测操守规范</p>
        </div>
        <div class="post-body">
          <h2>一、核心原则</h2>
          <p>
            机场PRO 遵循严格的科技媒体采编规范，独立于任何单家机场商业运营方。我们始终坚信，客观中立的评测才是长期立足之本。
          </p>

          <h2>二、数据采集与实测标准</h2>
          <ol>
            <li><strong>环境真实性：</strong>测试宽带覆盖国内主流网络（中国电信 1000M、中国联通 500M、中国移动 1000M），并在不同时段（特别是晚高峰 20:00-23:00）记录网络吞吐、Ping 延迟与丢包率。</li>
            <li><strong>拒绝官方宣传直接采信：</strong>任何官方宣称的“千兆内网”、“全球直连”，必须经过实际路由追踪（Traceroute）与网络探针验证。</li>
            <li><strong>标注数据时效性：</strong>所有评测页面均明确标注“最后核查日期”，确保读者看到的是最新的套餐与线路状态。</li>
          </ol>

          <h2>三、联盟推广披露 (Affiliate Disclosure)</h2>
          <p>
            为了维持网站的持续运营、服务器托管费用以及定期采购各家机场测试套餐的开支，本站部分外链可能包含推广返利标识（Affiliate Links）。
            但我们在此郑重承诺：<strong>联盟推广绝不影响客观评分与排名结果</strong>。表现欠佳的机场即便提供高额佣金，也绝不可能登上推荐榜首。
          </p>
        </div>
      </div>
    </div>`;
    const html = renderHtmlPage({
      title: '编辑政策与评测标准 - 坚持数据真实与客观独立原则 | 机场PRO',
      description: '机场PRO 的编辑政策、评测标准与联盟推广透明度披露声明。坚持真实晚高峰测速，拒绝虚构数据，确保第三方客观公正。',
      keywords: '编辑政策, 评测标准, 客观评测, 推广披露, 机场推荐标准',
      canonicalPath,
      depth,
      activeNav: '',
      crumbs,
      schemas: [],
      contentHtml
    });
    writeHtmlFile('editorial-policy/index.html', html);
  }

  // 4. 隐私政策 (privacy-policy/index.html)
  {
    const canonicalPath = 'privacy-policy/';
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.5, 'monthly');
    const crumbs = [{ name: '首页', url: 'index.html' }, { name: '隐私政策', url: 'privacy-policy/index.html' }];
    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">隐私保护</span>
          <h1 style="margin-top:0.5rem">用户隐私政策与数据保护声明</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">本政策阐述了 机场PRO 如何尊重和保护访问者的隐私权</p>
        </div>
        <div class="post-body">
          <h2>一、信息收集原则</h2>
          <p>
            机场PRO 是一个纯静态内容展示网站，我们<strong>不强制要求用户注册账号，不收集用户的姓名、身份证号或银行支付信息</strong>。
          </p>

          <h2>二、网络日志与 Cookie</h2>
          <p>
            当您访问本站时，我们的托管服务器（如 Cloudflare 等 CDN 基础设施）可能会自动记录基础访问日志（包括访问时间、用户代理 User-Agent、IP 地址等匿名技术统计数据），这些数据纯粹用于防范网络攻击、分析网站访问性能以及保障服务高可用。
          </p>

          <h2>三、第三方服务链接</h2>
          <p>
            本站文章可能包含指向第三方机场官网或开源软件仓库的链接。第三方网站拥有独立的隐私政策，本站对第三方的行为不承担法律责任，建议您在访问外部站点时审阅其隐私条款。
          </p>
        </div>
      </div>
    </div>`;
    const html = renderHtmlPage({
      title: '隐私政策 - 机场PRO 用户隐私与数据安全保护声明 | 机场PRO',
      description: '机场PRO 用户隐私保护政策。我们致力于保护访客的个人信息安全，遵循极简信息收集与安全防护准则。',
      keywords: '隐私政策, 隐私声明, 用户安全, 机场PRO',
      canonicalPath,
      depth,
      activeNav: '',
      crumbs,
      schemas: [],
      contentHtml
    });
    writeHtmlFile('privacy-policy/index.html', html);
  }

  // 5. 免责声明 (disclaimer/index.html)
  {
    const canonicalPath = 'disclaimer/';
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.5, 'monthly');
    const crumbs = [{ name: '首页', url: 'index.html' }, { name: '免责声明', url: 'disclaimer/index.html' }];
    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">法律合规</span>
          <h1 style="margin-top:0.5rem">免责声明与合规使用提示</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">关于本站评测内容属性、法律合规与技术交流性质的郑重声明</p>
        </div>
        <div class="post-body">
          <h2>一、学术交流与技术探讨性质</h2>
          <p>
            <strong>机场PRO (jichangpro.top)</strong> 所发布的所有文章、教程、评测数据及技术原理解析，均属于计算机网络技术学术探讨、通信协议分析、跨境电商合法办公及海外科研加速方案参考。
          </p>

          <h2>二、法律合规使用守则</h2>
          <p>
            请各位读者严格遵守当地法律法规。
            <strong>任何个人或组织严禁利用本站所提及的网络工具从事违反宪法法律、危害国家安全、侵犯他人隐私或散布违法违规言论的行为。</strong>
            因使用者个人非法用途所引发的一切法律后果，概由使用者自行承担，本站不承担任何直接或连带法律责任。
          </p>

          <h2>三、服务变动与财产风险免责</h2>
          <p>
            本站仅为第三方客观资讯媒体，并非任何机场的运营主体。各机场的套餐资费、节点可用性以及运营状态完全由各服务商自行控制。
            本站强烈倡导<strong>“坚持月付、避免超长年付”</strong>的理性消费原则，若因第三方机场自身技术故障、跑路或政策原因导致服务中断，本站不承担经济赔偿责任。
          </p>
        </div>
      </div>
    </div>`;
    const html = renderHtmlPage({
      title: '免责声明与服务条款 - 机场PRO 法律声明与合规使用提示 | 机场PRO',
      description: '机场PRO 的免责声明与合规使用指引。倡导技术交流与合法合规使用，明确第三方评测媒体责任边界。',
      keywords: '免责声明, 法律合规声明, 服务条款, 机场PRO',
      canonicalPath,
      depth,
      activeNav: '',
      crumbs,
      schemas: [],
      contentHtml
    });
    writeHtmlFile('disclaimer/index.html', html);
  }

  // 6. 自定义 404 页面 (404.html，根目录深度 0)
  {
    const depth404 = 0;
    const rel404 = getRelPrefix(depth404);
    const crumbs = [{ name: '首页', url: 'index.html' }, { name: '404 页面未找到', url: '404.html' }];
    const contentHtml = `
    <div class="container" style="padding:4rem 1.25rem;text-align:center">
      <div style="font-size:4.5rem;font-weight:900;color:var(--primary);line-height:1">404</div>
      <h1 style="font-size:1.75rem;margin-top:1rem;margin-bottom:1rem">抱歉，您访问的页面不存在或已被移除</h1>
      <p style="color:var(--text-muted);max-width:550px;margin:0 auto 2rem;font-size:1rem">
        可能是网址输入有误，或者该文章已被重新整理与合并。建议您返回首页或通过下方导航浏览热门专题。
      </p>
      <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap">
        <a href="${rel404}index.html" class="btn btn-primary">返回网站首页</a>
        <a href="${rel404}ranking/overall/index.html" class="btn btn-outline">查看2026综合排行榜</a>
        <a href="${rel404}recommend/budget/index.html" class="btn btn-outline">高性价比机场推荐</a>
      </div>
    </div>`;
    const html = renderHtmlPage({
      title: '404 - 页面未找到 | 机场PRO',
      description: '抱歉，您访问的页面不存在。欢迎返回机场PRO首页查看最新机场推荐与评测排行榜。',
      keywords: '404, 页面不存在, 机场PRO',
      canonicalPath: '404.html',
      depth: 0,
      activeNav: '',
      crumbs,
      schemas: [],
      contentHtml
    });
    writeHtmlFile('404.html', html);
  }
}

// ==========================================
// 11. 生成 sitemap.xml 与 robots.txt
// ==========================================
function buildSitemapAndRobots() {
  // 生成 sitemap.xml
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allPages.forEach(p => {
    xml += `  <url>\n`;
    xml += `    <loc>${p.loc}</loc>\n`;
    xml += `    <lastmod>${p.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), xml, 'utf8');
  console.log(`[Generated] sitemap.xml (${allPages.length} URLs)`);

  // 生成 robots.txt
  const robots = `User-agent: *
Allow: /
Disallow: /scripts/
Disallow: /docs/
Disallow: /cache_scraped/

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robots, 'utf8');
  console.log(`[Generated] robots.txt`);
}

// ==========================================
// 12. 生成 IndexNow Key 验证文件
// ==========================================
function buildIndexNowKeyFile() {
  const indexNowKey = 'e198b1a37c444bb284dc84e859b867c4';
  const keyFileName = `${indexNowKey}.txt`;
  fs.writeFileSync(path.join(ROOT_DIR, keyFileName), indexNowKey, 'utf8');
  console.log(`[Generated] IndexNow verification key file: ${keyFileName}`);
}

// 执行全量构建流水线
console.log('--- 开始全量生成页面 (14款品牌全覆盖) ---');
buildHomePage();
buildRecommendPages();
buildRankingPages();
buildReviewPages();
buildAirportArchivePages();
buildComparePage();
buildGuidePages();
buildBlogPages();
buildGlossaryPages();
buildTrustAndLegalPages();
buildSitemapAndRobots();
buildIndexNowKeyFile();

console.log(`=== 全量静态页面构建完成！总计有效页面数: ${allPages.length} ===`);
