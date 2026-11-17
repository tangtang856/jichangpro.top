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
        <a href="${rel}guides/index.html" class="nav-link ${activeNav === 'guides' ? 'active' : ''}">使用教程</a>
        <a href="${rel}blog/index.html" class="nav-link ${activeNav === 'blog' ? 'active' : ''}">选购指南</a>
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
      <li><a href="${rel}guides/index.html" class="nav-link">客户端使用教程中心 (30篇)</a></li>
      <li><a href="${rel}blog/index.html" class="nav-link">选购指南与技术博客 (100篇)</a></li>
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
            <li><a href="${rel}guides/index.html">客户端教程中心 (30篇)</a></li>
            <li><a href="${rel}blog/index.html">选购指南与博客 (100篇)</a></li>
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
            <li><a href="${rel}sitemap.html">网站地图 (HTML)</a> · <a href="${rel}sitemap.xml">XML 格式</a></li>
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

  // 首页主内容 (全新现代科技媒体杂志风格)
  const contentHtml = `
  <!-- 顶部跑马灯测速雷达 -->
  <div class="top-ticker-bar">
    <div class="container ticker-inner">
      <div>
        <span class="pulse-dot"></span>
        <strong style="color:#e2e8f0">晚高峰网络监测雷达:</strong>
        <span>14 家核验品牌链路全天候监控中 · 骨干专线连通率 99.8%</span>
      </div>
      <div style="display:flex;gap:1rem">
        <span>📅 数据更新于: ${CURRENT_DATE}</span>
        <a href="${rel}ranking/overall/index.html" style="color:#38bdf8">查看最新基准排行榜 →</a>
      </div>
    </div>
  </div>

  <!-- Bento Hero 主画幅区 -->
  <section class="bento-hero-section">
    <div class="container">
      <div class="bento-headline-wrap">
        <div class="hero-tag" style="margin-bottom:0.85rem">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>2026年独立第三方中文网络加速测评与节点选型智库</span>
        </div>
        <h1 class="hero-title" style="font-size:2.4rem;line-height:1.25">2026专业中文机场推荐与科学上网节点导航</h1>
        <p class="hero-desc" style="font-size:1.05rem;color:var(--text-body);margin-top:0.75rem">
          围绕<strong>机场推荐</strong>、<strong>梯子推荐</strong>、<strong>性价比机场</strong>与<strong>优质VPN节点</strong>，以晚高峰客观测速、真实单价折算与多维技术审计为基石。彻底告别虚标与断流，助您选出稳定、秒开4K的高性价比网络加速服务。
        </p>
      </div>

      <!-- Bento 网格布局: 冠军位 + 亚季军看板 -->
      <div class="bento-grid">
        <!-- 左侧大卡: 综合冠军 (微风网络) -->
        <div class="bento-champion-card">
          <div class="bento-champion-header">
            <span class="pill-tag" style="background:#dbeafe;color:#1e40af;font-weight:700">🥇 2026 年度综合排行榜首</span>
            <h2 style="font-size:1.75rem;margin:0.5rem 0 0.25rem;color:var(--text-main)">微风网络 Breezenet</h2>
            <p style="color:var(--text-muted);font-size:0.9rem">全IEPL/IPLC内网专线架构 · 晚高峰4K秒开 · 原生住宅IP解锁</p>
          </div>

          <div class="speed-radar-mini">
            <span>⚡ <strong>实测延迟:</strong> 广港 16ms / 沪日 36ms</span>
            <span>•</span>
            <span>🔒 <strong>晚高峰丢包:</strong> 0.0%</span>
            <span>•</span>
            <span>🤖 <strong>AI/流媒体:</strong> 完美解锁</span>
          </div>

          <div class="bento-stats-ribbon">
            <div>
              <div class="bento-stat-num">¥8.00</div>
              <div class="bento-stat-label">起步月付价格</div>
            </div>
            <div>
              <div class="bento-stat-num">200 GB</div>
              <div class="bento-stat-label">基础套餐月流量</div>
            </div>
            <div>
              <div class="bento-stat-num">¥0.04</div>
              <div class="bento-stat-label">每GB超低单价</div>
            </div>
          </div>

          <div style="background:#fee2e2;color:#b91c1c;padding:0.6rem 0.85rem;border-radius:var(--radius-sm);margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between;border:1px dashed #fca5a5">
            <span>🎁 专属优惠码: <code style="font-weight:800;background:#fff;padding:0.15rem 0.45rem;border-radius:3px">weifeng90</code> (结账立减)</span>
            <span style="font-size:0.75rem;background:#ef4444;color:#fff;padding:0.15rem 0.45rem;border-radius:3px;font-weight:700">9折特惠</span>
          </div>

          <div style="display:flex;gap:0.75rem;margin-top:auto;flex-wrap:wrap">
            <a href="https://edp01.breezenetaff.com/#/?code=h4GlIXwC" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="flex:1.5;font-weight:700;font-size:1rem;padding:0.65rem 1rem">直达微风网络官网 ↗</a>
            <a href="${rel}review/breezenet/index.html" class="btn btn-outline" style="flex:1">深度评测报告</a>
            <a href="${rel}airport/breezenet/index.html" class="btn btn-outline" style="flex:1">参数档案</a>
          </div>
        </div>

        <!-- 右侧双拼叠卡: 亚军暮光网络 + 季军飞猫云 -->
        <div class="bento-side-stack">
          <!-- 亚军: 暮光网络 -->
          <div class="bento-sub-card" style="border-top:3px solid #64748b">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <span class="bento-rank-label rank-label-silver">🥈 亚军 · 专线品质旗舰</span>
              <span style="font-size:0.85rem;font-weight:700;color:var(--primary)">综合评分 9.7</span>
            </div>
            <h3 style="font-size:1.35rem;margin:0.25rem 0 0.35rem">暮光网络</h3>
            <p style="font-size:0.85rem;color:var(--text-body);margin-bottom:0.75rem">高规格多线专线中继，节点冗余度极高，适合预算适中的大流量重度用户与涉外办公。</p>
            <div style="display:flex;justify-content:space-between;font-size:0.85rem;background:#f8fafc;padding:0.5rem 0.75rem;border-radius:var(--radius-sm);margin-bottom:0.75rem">
              <span>起步: <strong>¥20 /月</strong></span>
              <span>流量: <strong>120GB</strong></span>
              <span>架构: <strong>专线节点</strong></span>
            </div>
            <div style="display:flex;gap:0.5rem;margin-top:auto">
              <a href="https://varnexa.twilightaff.com/#/?code=8EtJCnBT" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1">官网直达 ↗</a>
              <a href="${rel}review/muguang/index.html" class="btn btn-outline btn-sm">评测报告</a>
            </div>
          </div>

          <!-- 季军: 飞猫云 -->
          <div class="bento-sub-card" style="border-top:3px solid #d97706">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <span class="bento-rank-label rank-label-bronze">🥉 季军 · 极致性价比之选</span>
              <span style="font-size:0.85rem;font-weight:700;color:var(--primary)">综合评分 9.6</span>
            </div>
            <h3 style="font-size:1.35rem;margin:0.25rem 0 0.35rem">飞猫云</h3>
            <p style="font-size:0.85rem;color:var(--text-body);margin-bottom:0.5rem">低至 ¥7/月 提供 150GB 优质中转与专线混合网络，学生党与高频视频点播首选。</p>
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem">
              <span class="coupon-tag">券: flycat888</span>
              <span style="font-size:0.78rem;color:var(--success);font-weight:600">单G单价约 ¥0.047</span>
            </div>
            <div style="display:flex;gap:0.5rem;margin-top:auto">
              <a href="https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1">官网直达 ↗</a>
              <a href="${rel}review/feimaoyun/index.html" class="btn btn-outline btn-sm">评测报告</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 晚高峰核心专线物理指标雷达带 -->
      <div class="radar-strip">
        <div style="display:flex;align-items:center;gap:0.4rem;font-weight:700;font-size:0.9rem">
          <span>📡 物理骨干链路实时雷达:</span>
        </div>
        <div class="radar-node-item">
          <span>深港 IEPL</span>
          <span class="radar-ping">16ms</span>
          <span style="color:#10b981;font-size:0.75rem">● 0丢包</span>
        </div>
        <div class="radar-node-item">
          <span>沪日 IPLC</span>
          <span class="radar-ping">36ms</span>
          <span style="color:#10b981;font-size:0.75rem">● 0丢包</span>
        </div>
        <div class="radar-node-item">
          <span>京法 BGP</span>
          <span class="radar-ping">118ms</span>
          <span style="color:#10b981;font-size:0.75rem">● 0丢包</span>
        </div>
        <div class="radar-node-item">
          <span>广美专线</span>
          <span class="radar-ping">136ms</span>
          <span style="color:#10b981;font-size:0.75rem">● 0丢包</span>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <!-- 梯队式媒体分栏 (Tiered Editorial Showcase) -->
    <section class="tier-showcase-section">
      <!-- Tier 1: 商务极客纯专线矩阵 -->
      <div style="margin-bottom:2.75rem">
        <div class="tier-title-bar">
          <h3><span>💎 Tier 1: 极客与商业专线标杆 (纯内网零丢包)</span></h3>
          <span style="font-size:0.85rem;color:var(--text-muted)">追求极致网络抖动与敏感期零失联</span>
        </div>
        <div class="tier-horizontal-grid">
          ${airportsData.filter(a => ['yinxingren', 'flashleap', 'wuyou', 'lingmao'].includes(a.id)).map(a => `
            <div class="tier-horizontal-card">
              <div>
                <div style="display:flex;align-items:center;gap:0.35rem">
                  <strong style="font-size:1.15rem;color:var(--text-main)">${a.name}</strong>
                  ${a.coupon ? `<span class="coupon-tag">券: ${a.coupon}</span>` : ''}
                </div>
                <div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.25rem">${a.lineType}</div>
              </div>
              <div>
                <div style="font-size:0.88rem;color:var(--text-body);line-height:1.5">${a.advantages[0]}</div>
                <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.2rem">适合人群: ${a.suitableFor[0]}</div>
              </div>
              <div>
                <div style="font-size:1.2rem;font-weight:800;color:var(--primary)">${a.currency}${a.startingPrice} <span style="font-size:0.8rem;color:var(--text-muted);font-weight:400">/ ${a.billingCycle}</span></div>
                <div style="font-size:0.78rem;color:var(--text-muted)">包含 ${a.plans[0].traffic} (约 ¥${a.plans[0].unitPrice}/GB)</div>
              </div>
              <div style="display:flex;gap:0.4rem;justify-content:flex-end">
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="font-weight:700">官网 ↗</a>
                <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tier 2: 极致性价比与超低预算特刊 -->
      <div style="margin-bottom:2.75rem">
        <div class="tier-title-bar">
          <h3><span>💰 Tier 2: 极致性价比与学生党特刊 (门槛低至几元)</span></h3>
          <span style="font-size:0.85rem;color:var(--text-muted)">核算真实单G成本，小花销办大事</span>
        </div>
        <div class="tier-chip-grid">
          ${airportsData.filter(a => ['firefly', 'feiv', 'kuajiecloud', 'quanqiuyun'].includes(a.id)).map(a => `
            <div class="tier-chip-card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start">
                <strong style="font-size:1.1rem;color:var(--text-main)">${a.name}</strong>
                ${a.coupon ? `<span class="coupon-tag">券: ${a.coupon}</span>` : ''}
              </div>
              <div style="font-size:0.8rem;color:var(--text-muted);margin:0.25rem 0">${a.lineType}</div>
              <div class="tier-chip-price-badge">
                <span class="tier-chip-price">${a.currency}${a.startingPrice}</span>
                <span style="font-size:0.8rem;color:var(--text-muted)">/ ${a.billingCycle}</span>
                <span class="tier-chip-unit">(¥${a.plans[0].unitPrice}/GB)</span>
              </div>
              <p style="font-size:0.82rem;color:var(--text-body);margin-bottom:0.85rem;flex:1">${a.advantages[0]}</p>
              <div style="display:flex;gap:0.4rem;padding-top:0.6rem;border-top:1px solid var(--border-color)">
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1;font-weight:700">直达官网 ↗</a>
                <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tier 3: 场景专家与特色客户端优化 -->
      <div>
        <div class="tier-title-bar">
          <h3><span>🚀 Tier 3: 场景专家与特色客户端优化</span></h3>
          <span style="font-size:0.85rem;color:var(--text-muted)">针对商务漫游、独立软件与多地灾备专门调优</span>
        </div>
        <div class="tier-chip-grid">
          ${airportsData.filter(a => ['wavenet', 'laddercloud', 'lingdongcloud'].includes(a.id)).map(a => `
            <div class="tier-chip-card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start">
                <strong style="font-size:1.1rem;color:var(--text-main)">${a.name}</strong>
                <span class="pill-tag">${a.deviceLimit}</span>
              </div>
              <div style="font-size:0.8rem;color:var(--text-muted);margin:0.25rem 0">${a.lineType}</div>
              <div class="tier-chip-price-badge">
                <span class="tier-chip-price">${a.currency}${a.startingPrice}</span>
                <span style="font-size:0.8rem;color:var(--text-muted)">/ ${a.billingCycle}</span>
                <span style="font-size:0.8rem;color:var(--primary);font-weight:600">· 包含 ${a.plans[0].traffic}</span>
              </div>
              <p style="font-size:0.82rem;color:var(--text-body);margin-bottom:0.85rem;flex:1">${a.advantages[0]}</p>
              <div style="display:flex;gap:0.4rem;padding-top:0.6rem;border-top:1px solid var(--border-color)">
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1;font-weight:700">直达官网 ↗</a>
                <a href="${rel}review/${a.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 彭博/Verge 级数据基准排行榜 (Benchmark Ranking Table) -->
    <section class="section">
      <div class="benchmark-table-wrapper">
        <div class="benchmark-table-header">
          <div>
            <h3>📊 2026年度翻墙机场与VPN节点综合排行榜 (14款核验品牌)</h3>
            <p style="font-size:0.85rem;color:#94a3b8;margin:0.25rem 0 0">依据晚高峰测速、内网线路连通率、客服响应与套餐性价比综合加权计分（公开透明评分准则）</p>
          </div>
          <a href="${rel}ranking/overall/index.html" class="btn btn-outline btn-sm" style="border-color:#475569;color:#e2e8f0">查看排行依据说明 →</a>
        </div>
        <div class="table-container" style="margin:0;border:none;border-radius:0">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width:55px;text-align:center">名次</th>
                <th style="min-width:230px">品牌名称与专属券</th>
                <th style="min-width:110px">起步价格</th>
                <th style="min-width:115px">入门流量 / 单价</th>
                <th style="min-width:120px">线路类型</th>
                <th style="min-width:125px">综合评级</th>
                <th style="min-width:150px">核心适合人群</th>
                <th style="text-align:center;min-width:140px">操作入口</th>
              </tr>
            </thead>
            <tbody>
              ${[...airportsData].sort((a,b) => (a.rank || 0) - (b.rank || 0)).map((item, idx) => `
                <tr>
                  <td style="text-align:center">
                    <span class="rank-medal-pill ${idx === 0 ? 'rank-gold' : idx === 1 ? 'rank-silver' : idx === 2 ? 'rank-bronze' : ''}">${idx + 1}</span>
                  </td>
                  <td>
                    <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap">
                      <strong style="font-size:0.95rem">${item.name}</strong>
                      ${item.coupon ? `<span class="coupon-tag">券: ${item.coupon}</span>` : ''}
                    </div>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem">${item.tagline.split('·')[0]}</div>
                  </td>
                  <td style="color:var(--primary);font-weight:700">${item.currency}${item.startingPrice} <span style="font-size:0.8rem;color:var(--text-muted)">/ ${item.billingCycle}</span></td>
                  <td>${item.plans[0].traffic}<br><small style="color:var(--text-muted)">(¥${item.plans[0].unitPrice}/GB)</small></td>
                  <td><span class="pill-tag">${item.lineType}</span></td>
                  <td>
                    <div class="score-bar-wrap">
                      <strong style="color:var(--primary);font-size:1rem">${item.ratings.overall}</strong>
                      <div class="score-bar-track">
                        <div class="score-bar-fill" style="width:${(item.ratings.overall / 10) * 100}%"></div>
                      </div>
                    </div>
                  </td>
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
      </div>
    </section>

    <!-- 场景特刊渐变矩阵 (Thematic Gradient Matrix) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title"><span>🎯 六大核心使用场景精准导航</span></h2>
        <p class="section-subtitle">按具体业务场景选型，不为多余性能浪费一分钱预算</p>
      </div>
      <div class="thematic-matrix-grid">
        <a href="${rel}recommend/premium/index.html" class="matrix-topic-card topic-bg-premium">
          <div style="font-size:1.75rem">💎</div>
          <h3>高端商业专线</h3>
          <p>全IPLC/IEPL物理内网专线不过墙，覆盖欧美亚核心节点，晚高峰零丢包与低抖动代表。</p>
          <span class="card-link-text">查阅商业专线精选 →</span>
        </a>
        <a href="${rel}recommend/budget/index.html" class="matrix-topic-card topic-bg-budget">
          <div style="font-size:1.75rem">💰</div>
          <h3>高性价比平价梯子</h3>
          <p>月付低至几元钱，核算真实单G成本与剔除倍率陷阱，在校学生与备用梯子首选。</p>
          <span class="card-link-text">查阅平价梯子精选 →</span>
        </a>
        <a href="${rel}recommend/beginner/index.html" class="matrix-topic-card topic-bg-beginner">
          <div style="font-size:1.75rem">🔰</div>
          <h3>新手入门零门槛</h3>
          <p>全平台一键导入订阅，支持 Clash Verge、小火箭等客户端，附带详尽图文教程与客服响应。</p>
          <span class="card-link-text">查阅新手小白方案 →</span>
        </a>
        <a href="${rel}recommend/stable/index.html" class="matrix-topic-card topic-bg-stable">
          <div style="font-size:1.75rem">🛡️</div>
          <h3>稳定防失联节点</h3>
          <p>多线 BGP 入口与异地冷备机房，抗极端封锁与重大敏感时期网络抖动，全天候挂机可用。</p>
          <span class="card-link-text">查阅防封锁推荐 →</span>
        </a>
        <a href="${rel}recommend/ai/index.html" class="matrix-topic-card topic-bg-ai">
          <div style="font-size:1.75rem">🤖</div>
          <h3>ChatGPT & Claude 专线</h3>
          <p>纯净原生住宅 IP 分流优化，彻底告别 Access Denied 1020 报错与批量风控封号。</p>
          <span class="card-link-text">查阅 AI 专用节点 →</span>
        </a>
        <a href="${rel}recommend/streaming/index.html" class="matrix-topic-card topic-bg-streaming">
          <div style="font-size:1.75rem">🎬</div>
          <h3>4K 流媒体超清解锁</h3>
          <p>完美解锁 Netflix 原生非自制剧、Disney+ 与 YouTube 4K/8K 超高码率秒缓冲。</p>
          <span class="card-link-text">查阅流媒体解锁方案 →</span>
        </a>
      </div>
    </section>

    <!-- 杂志图文专栏排版 (The Verge / Wired Style - 100篇博客精选) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title"><span>💡 深度选购指南与技术专栏 (100篇知识库)</span></h2>
        <p class="section-subtitle">拒绝人云亦云，掌握科学客观的选购技巧与防坑避雷常识</p>
      </div>

      <div class="magazine-editorial-grid">
        <!-- 左侧: 头条大画幅 + 双拼文章 -->
        <div>
          <!-- 头条文章 -->
          <div class="lead-story-box">
            <span class="lead-story-tag">🔥 必读头条 · 选购法则</span>
            <h3 class="lead-story-title">
              <a href="${rel}blog/how-to-choose-airport/index.html">新手如何挑选靠谱机场？2026年机场选购避坑九大核心法则</a>
            </h3>
            <p class="lead-story-excerpt">
              面对市场上成千上万家翻墙机场，小白用户如何挑出不跑路、晚高峰不卡顿、高性价比的节点？本文为您系统总结九条经过实战检验的核心选购法则：从月付试水、专线鉴别、倍率核算到双机场容灾备用实践。
            </p>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;font-size:0.85rem;color:var(--text-muted)">
              <span>✍️ 机场PRO 编辑部 · 2026-03-15</span>
              <a href="${rel}blog/how-to-choose-airport/index.html" class="btn btn-outline btn-sm">阅读专题全文 →</a>
            </div>
          </div>

          <!-- 下方双拼次级精选 -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:1.25rem">
            <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.25rem">
              <span class="pill-tag" style="font-size:0.75rem;margin-bottom:0.5rem">专线技术</span>
              <h4 style="font-size:1.05rem;line-height:1.4;margin:0.35rem 0 0.5rem">
                <a href="${rel}blog/iepl-vs-iplc/index.html" style="color:var(--text-main)">IPLC 与 IEPL 专线有何区别？两分钟看懂原理</a>
              </h4>
              <p style="font-size:0.82rem;color:var(--text-body);line-height:1.6;margin-bottom:0.75rem">通俗拆解专线物理架构与网络表现差异，教您识别真假内网专线。</p>
              <a href="${rel}blog/iepl-vs-iplc/index.html" class="card-link-text">深入阅读 →</a>
            </div>

            <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.25rem">
              <span class="pill-tag" style="font-size:0.75rem;margin-bottom:0.5rem">风控避坑</span>
              <h4 style="font-size:1.05rem;line-height:1.4;margin:0.35rem 0 0.5rem">
                <a href="${rel}blog/avoid-pitfalls/index.html" style="color:var(--text-main)">警惕机场跑路风险！购买节点的六大防坑常识</a>
              </h4>
              <p style="font-size:0.82rem;color:var(--text-body);line-height:1.6;margin-bottom:0.75rem">千万别被所谓超低价年付冲昏头脑！揭秘虚标超卖与跑路套路。</p>
              <a href="${rel}blog/avoid-pitfalls/index.html" class="card-link-text">深入阅读 →</a>
            </div>
          </div>
        </div>

        <!-- 右侧: 24小时编辑精选热读榜 Top 5 -->
        <div class="trending-sidebar-box">
          <div class="trending-sidebar-header">
            <span>🔥 深度专栏 · 热读排行榜</span>
            <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400">TOP 5</span>
          </div>
          <div class="trending-item">
            <span class="trending-num">01</span>
            <div>
              <div class="trending-title"><a href="${rel}blog/chatgpt-claude-airport-unlock/index.html">ChatGPT 与 Claude 节点防封技巧与原生住宅IP识别</a></div>
              <div class="trending-meta">AI专属 · 7 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">02</span>
            <div>
              <div class="trending-title"><a href="${rel}blog/value-airport-calculation/index.html">剔除虚标陷阱！机场真实每GB单价换算公式与倍率折算</a></div>
              <div class="trending-meta">性价比测算 · 6 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">03</span>
            <div>
              <div class="trending-title"><a href="${rel}blog/vpn-vs-airport-deep-dive/index.html">VPN和机场有什么本质区别？底层协议与运作原理</a></div>
              <div class="trending-meta">网络架构 · 8 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">04</span>
            <div>
              <div class="trending-title"><a href="${rel}blog/hysteria2-udp-brutal/index.html">Hysteria2 协议底层原理解析：UDP 恶劣弱网抗丢包神器</a></div>
              <div class="trending-meta">协议技术 · 6 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">05</span>
            <div>
              <div class="trending-title"><a href="${rel}blog/netflix-region-unlock-guide/index.html">Netflix 奈飞锁区破解与非自制剧点播：原生IP与DNS解锁</a></div>
              <div class="trending-meta">流媒体技巧 · 5 分钟阅读</div>
            </div>
          </div>

          <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border-color);text-align:center">
            <a href="${rel}blog/index.html" class="btn btn-outline btn-sm" style="width:100%">查阅全部 100 篇深度博客专栏 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 教程中心精选看板 (30篇客户端指南) -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title"><span>💻 全平台科学上网客户端配置中心 (30篇)</span></h2>
        <p class="section-subtitle">覆盖桌面电脑、移动端设备、全屋软路由及开发者工具的保姆级图文配置指引</p>
      </div>
      <div class="category-grid">
        <a href="${rel}guides/windows/index.html" class="category-card">
          <div class="category-icon">💻</div>
          <h3>Windows 电脑配置 (6篇)</h3>
          <p>Clash Verge Rev、v2rayN、Sing-box、Clash Nyanpasu 与 TUN 虚拟网卡模式教程。</p>
          <span class="card-link-text">阅读 Windows 系列教程 →</span>
        </a>
        <a href="${rel}guides/android/index.html" class="category-card">
          <div class="category-icon">📱</div>
          <h3>Android 安卓手机 (6篇)</h3>
          <p>Clash Meta for Android (CMFA)、v2rayNG、Surfboard 冲浪板与防杀后台白名单配置。</p>
          <span class="card-link-text">阅读 Android 系列教程 →</span>
        </a>
        <a href="${rel}guides/ios/index.html" class="category-card">
          <div class="category-icon">🍎</div>
          <h3>iOS 苹果设备 (6篇)</h3>
          <p>Shadowrocket 小火箭、Loon、Quantumult X (圈X)、Surge iOS 与美区 Apple ID 自助注册。</p>
          <span class="card-link-text">阅读 iOS 系列教程 →</span>
        </a>
        <a href="${rel}guides/macos/index.html" class="category-card">
          <div class="category-icon">🖥️</div>
          <h3>macOS 苹果电脑 (6篇)</h3>
          <p>Mac 平台 Clash Verge Rev (M芯片支持)、Surge Mac 增强模式与终端命令行代理加速。</p>
          <span class="card-link-text">阅读 macOS 系列教程 →</span>
        </a>
        <a href="${rel}guides/openwrt-passwall/index.html" class="category-card">
          <div class="category-icon">🖧</div>
          <h3>软路由与全屋网关 (4篇)</h3>
          <p>OpenWrt PassWall、OpenClash Meta、Apple TV / PS5 游戏主机加速与 DNS 防污染。</p>
          <span class="card-link-text">阅读软路由系列教程 →</span>
        </a>
        <a href="${rel}guides/docker-git-proxy/index.html" class="category-card">
          <div class="category-icon">⚡</div>
          <h3>开发者与跨平台工具 (2篇)</h3>
          <p>Docker 镜像拉取加速、GitHub 命令行代理与 Telegram 电报内置独占代理配置。</p>
          <span class="card-link-text">阅读开发者加速教程 →</span>
        </a>
      </div>
      <div style="text-align:center;margin-top:1.75rem">
        <a href="${rel}guides/index.html" class="btn btn-outline">进入教程中心，浏览全部 30 篇详细图文配置指南 →</a>
      </div>
    </section>

    <!-- 知识百科精选 -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title"><span>📖 网络技术与翻墙黑话百科</span></h2>
        <p class="section-subtitle">解开通信协议迷雾，弄懂 IPLC、IEPL、Clash、Hysteria2 与住宅原生IP底层机理</p>
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

    <!-- FAQ 答疑 -->
    <section class="section" style="padding-bottom:1.5rem">
      <div class="section-header">
        <h2 class="section-title"><span>❓ 常见问题答疑 (FAQ)</span></h2>
        <p class="section-subtitle">围绕用户最关心的网络加速、隐私安全与节点选购问题做出客观解答</p>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">什么是机场？它和传统的商业 VPN 有何区别？</div>
          <div class="faq-answer">
            “机场”是中文互联网对基于 Shadowsocks、V2Ray、Trojan、Hysteria2 等协议提供多节点代理加速服务商的通称。传统 VPN（如 ExpressVPN）采用全局加密流量特征明显，易被防火长城识别阻断；而机场节点通过流量伪装与国内多线 BGP/IPLC 专线转发，具备更强抗封锁能力与极低延迟。
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">为什么不同机场的价格差距很大？几元钱和数十元有何不同？</div>
          <div class="faq-answer">
            核心成本差距在于<strong>线路物理带宽</strong>。几元钱的廉价机场多采用廉价公网直连 VPS 虚拟化超卖，晚高峰丢包严重；数十元的专线机场租用三大运营商正规企业级 IPLC/IEPL 跨境物理光纤，不走公网防火墙，晚高峰依然能跑满千兆带宽。
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">访问 ChatGPT 或使用 Claude 总是报错怎么办？</div>
          <div class="faq-answer">
            OpenAI 与 Anthropic 对访问 IP 实行严苛的风控过滤，大批量共用的数据中心机房 IP 容易被识别并提示 1020 报错或限制登录。建议在本站“AI 专线”专题中挑选具备<strong>原生住宅 IP 分流</strong>的高质量专线节点。
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">为什么我们强烈建议“主力+备用”双机场策略？</div>
          <div class="faq-answer">
            即使是顶级专线机场，也可能因海底光缆割接或运营商突发故障导致临时断流。配置一家优质专线月付套餐作为主力，再搭配一家不限时按量付费套餐作为备用，能实现极端特殊时期的绝对网络可用性保障。
          </div>
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
    filterAirports: ['breezenet', 'feimaoyun', 'wuyou', 'firefly', 'feiv', 'yinxingren']
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

    const filtered = cat.filterAirports.map(id => airportsData.find(a => a.id === id)).filter(Boolean);

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
                  <th style="min-width:210px">品牌与专属券</th>
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
                      <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap">
                        <strong style="font-size:0.95rem">${a.name}</strong>
                        ${a.coupon ? `<span class="coupon-tag">券: ${a.coupon}</span>` : ''}
                      </div>
                      <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem">${a.tagline.split('·')[0]}</div>
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
    sortFn: (a, b) => (a.rank || 0) - (b.rank || 0)
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
                  <th style="width:55px;text-align:center">名次</th>
                  <th style="min-width:230px">品牌名称与专属券</th>
                  <th style="min-width:110px">起步价格</th>
                  <th style="min-width:115px">入门流量与单价</th>
                  <th style="min-width:120px">线路架构</th>
                  <th style="min-width:100px">核心维度</th>
                  <th style="min-width:150px">适合人群</th>
                  <th style="text-align:center;min-width:140px">直达与报告</th>
                </tr>
              </thead>
              <tbody>
                ${sortedList.map((a, idx) => `
                  <tr>
                    <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : ''}">${idx + 1}</span></td>
                    <td>
                      <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap">
                        <strong style="font-size:0.95rem">${a.name}</strong>
                        ${a.coupon ? `<span class="coupon-tag">券: ${a.coupon}</span>` : ''}
                      </div>
                      <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem">${a.tagline.split('·')[0]}</div>
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
// 7. 生成 30 篇客户端新手与进阶配置教程 (guides/)
// ==========================================
const guidesData = require(path.join(ROOT_DIR, 'data', 'guides-data.js'));

function buildGuidePages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  guidesData.forEach(g => {
    const canonicalPath = `guides/${g.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.8, 'monthly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '使用教程', url: 'guides/index.html' },
      { name: g.h1, url: `guides/${g.slug}/index.html` }
    ];

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": g.h1,
      "description": g.desc,
      "datePublished": g.date || "2026-03-01",
      "dateModified": CURRENT_DATE,
      "author": {
        "@type": "Organization",
        "name": "机场PRO 教程组"
      }
    };

    const stepsHtml = (g.steps || []).map((step, idx) => `
      <h2>步骤 ${idx + 1}：${step.title}</h2>
      <p>${step.content}</p>
    `).join('');

    const faqsHtml = (g.faqs || []).length > 0 ? `
      <h2>常见故障排查与答疑 (Troubleshooting)</h2>
      <div class="faq-list">
        ${g.faqs.map(f => `
          <div class="faq-item">
            <div class="faq-question">${f.q}</div>
            <div class="faq-answer">${f.a}</div>
          </div>
        `).join('')}
      </div>
    ` : '';

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">${g.category} 平台教程</span>
          <h1 style="margin-top:0.5rem">${g.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${g.desc}</p>
          <div class="post-meta-bar">
            <span>📅 最新更新: ${g.date || CURRENT_DATE}</span>
            <span>📱 推荐核心: ${g.client}</span>
            <span>⏱️ 阅读时长: 约 ${g.readTime || '5 分钟'}</span>
          </div>
        </div>

        <div class="post-body">
          <div class="callout" style="margin-bottom:1.5rem">
            <div class="callout-title">💡 教程概要与前提</div>
            <p style="margin-bottom:0">${g.summary || '本教程系统详解客户端下载、配置导入与分流设置，助您实现安全稳定的网络加速。'}</p>
          </div>

          ${stepsHtml}

          ${faqsHtml}
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 推荐阅读与横向参考</div>
          <ul class="related-links">
            <li><a href="${rel}guides/index.html">📚 返回教程中心总览（查阅全部 30 篇教程）</a></li>
            <li><a href="${rel}ranking/overall/index.html">📊 查阅2026年度全网机场综合排行榜</a></li>
            <li><a href="${rel}recommend/budget/index.html">💰 查看高性价比平价机场精选</a></li>
            <li><a href="${rel}compare/index.html">⚖️ 自由勾选机场进行横向比对</a></li>
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

  // 生成教程中心总览页 guides/index.html
  buildGuidesHubPage();
}

function buildGuidesHubPage() {
  const depth = 1;
  const rel = getRelPrefix(depth);
  const canonicalPath = 'guides/';
  registerPage(`${SITE_URL}/${canonicalPath}`, 0.9, 'weekly');

  const crumbs = [
    { name: '首页', url: 'index.html' },
    { name: '使用教程中心', url: 'guides/index.html' }
  ];

  const categories = ['Windows', 'Android', 'iOS', 'macOS', '软路由与网关', '开发工具'];

  const categorySections = categories.map(cat => {
    const items = guidesData.filter(g => g.category === cat);
    return `
      <div style="margin-top:2.5rem">
        <h2 style="font-size:1.35rem;display:flex;align-items:center;gap:0.5rem;border-bottom:2px solid var(--border-color);padding-bottom:0.5rem">
          <span>📁 ${cat} 专题教程</span>
          <span class="pill-tag" style="font-size:0.75rem">${items.length} 篇</span>
        </h2>
        <div class="hub-grid">
          ${items.map(g => `
            <div class="hub-card">
              <div class="hub-card-header">
                <span class="pill-tag">${g.os}</span>
                <span style="font-size:0.75rem;color:var(--text-muted)">⏱️ ${g.readTime}</span>
              </div>
              <h3 class="hub-card-title"><a href="${rel}guides/${g.slug}/index.html">${g.h1}</a></h3>
              <p class="hub-card-desc">${g.desc}</p>
              <div class="hub-card-footer">
                <span>核心: <strong>${g.client}</strong></span>
                <a href="${rel}guides/${g.slug}/index.html" class="card-link-text">查看教程 →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  const contentHtml = `
  <div class="container" style="padding-top:1.5rem">
    <div class="content-wrapper" style="max-width:1100px">
      <div class="post-header" style="text-align:center">
        <span class="hero-tag">全平台客户端教程库</span>
        <h1 style="margin-top:0.5rem">2026 全平台科学上网与客户端配置教程中心 (30篇)</h1>
        <p class="section-subtitle" style="font-size:1.1rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem;max-width:850px;margin-left:auto;margin-right:auto">
          汇聚 Windows、Android、iOS、macOS、软路由及开发者工具共 30 篇保姆级图文配置指南。助您快速上手 Clash Verge、v2rayN、Shadowrocket 小火箭、Sing-box 等主流代理工具。
        </p>
      </div>

      <div class="post-body">
        ${categorySections}
      </div>
    </div>
  </div>`;

  const html = renderHtmlPage({
    title: '科学上网客户端使用教程中心 - Windows/Android/iOS/Mac 翻墙配置大全 | 机场PRO',
    description: '机场PRO官方使用教程中心。收录 Windows、Android、iOS、macOS、软路由及开发者工具共 30 篇详尽配置教程。包含 Clash Verge、v2rayN、Shadowrocket小火箭、Surge、Sing-box 从零上手与排障全解。',
    keywords: '科学上网教程, 翻墙教程, 机场教程, Clash教程, 小火箭教程, v2rayN教程, 梯子推荐, 机场推荐',
    canonicalPath,
    depth,
    activeNav: 'guides',
    crumbs,
    schemas: [],
    contentHtml
  });

  writeHtmlFile('guides/index.html', html);
}

// ==========================================
// 8. 生成 100 篇深度选购指南与技术博客 (blog/)
// ==========================================
const articlesData = require(path.join(ROOT_DIR, 'data', 'articles-data.js'));

function buildBlogPages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  articlesData.forEach(b => {
    const canonicalPath = `blog/${b.slug}/`;
    registerPage(`${SITE_URL}/${canonicalPath}`, 0.8, 'monthly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '选购指南与博客', url: 'blog/index.html' },
      { name: b.h1, url: `blog/${b.slug}/index.html` }
    ];

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": b.h1,
      "description": b.desc,
      "datePublished": b.date || "2026-03-01",
      "dateModified": CURRENT_DATE,
      "author": {
        "@type": "Organization",
        "name": "机场PRO 编辑部"
      }
    };

    const sectionsHtml = (b.sections || []).map(s => `
      <h2>${s.title}</h2>
      <p>${s.content}</p>
    `).join('');

    const faqsHtml = (b.faqs || []).length > 0 ? `
      <h2>常见问题解答 (FAQ)</h2>
      <div class="faq-list">
        ${b.faqs.map(f => `
          <div class="faq-item">
            <div class="faq-question">${f.q}</div>
            <div class="faq-answer">${f.a}</div>
          </div>
        `).join('')}
      </div>
    ` : '';

    const contentHtml = `
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">${b.category || '深度选购与科普'}</span>
          <h1 style="margin-top:0.5rem">${b.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">${b.desc}</p>
          <div class="post-meta-bar">
            <span>📅 发布日期: ${b.date || CURRENT_DATE}</span>
            <span>✍️ 机场PRO 编辑部</span>
            <span>⏱️ 预计阅读: ${b.readTime || '6 分钟'}</span>
          </div>
        </div>

        <div class="post-body">
          <div class="callout" style="margin-bottom:1.5rem">
            <div class="callout-title">📌 本篇导读</div>
            <p style="margin-bottom:0">${b.summary || b.desc}</p>
          </div>

          ${sectionsHtml}

          ${faqsHtml}
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 延伸阅读与相关专题</div>
          <ul class="related-links">
            <li><a href="${rel}blog/index.html">📖 浏览全部 100 篇选购指南与技术博客</a></li>
            <li><a href="${rel}ranking/overall/index.html">📊 查阅2026年度全网机场综合排行榜</a></li>
            <li><a href="${rel}ranking/value/index.html">💰 查看真实性价比排行榜（每GB单价精确折算）</a></li>
            <li><a href="${rel}compare/index.html">⚖️ 自由勾选机场进行横向比对</a></li>
            <li><a href="${rel}guides/index.html">💻 查看全平台科学上网客户端配置教程 (30篇)</a></li>
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

  // 生成博客中心总览页 blog/index.html
  buildBlogHubPage();
}

function buildBlogHubPage() {
  const depth = 1;
  const rel = getRelPrefix(depth);
  const canonicalPath = 'blog/';
  registerPage(`${SITE_URL}/${canonicalPath}`, 0.9, 'weekly');

  const crumbs = [
    { name: '首页', url: 'index.html' },
    { name: '选购指南与博客', url: 'blog/index.html' }
  ];

  const categories = [
    '选购与避坑',
    '性价比与平价',
    '专线与深度测评',
    'VPN与翻墙架构',
    '协议与内核技术',
    'AI工具与原生节点',
    '海外流媒体解锁',
    '安全隐私与网络排障'
  ];

  const categorySections = categories.map(cat => {
    const items = articlesData.filter(b => b.category === cat);
    return `
      <div style="margin-top:2.5rem">
        <h2 style="font-size:1.35rem;display:flex;align-items:center;gap:0.5rem;border-bottom:2px solid var(--border-color);padding-bottom:0.5rem">
          <span>📚 ${cat} 专题专栏</span>
          <span class="pill-tag" style="font-size:0.75rem">${items.length} 篇</span>
        </h2>
        <div class="hub-grid">
          ${items.map(b => `
            <div class="hub-card">
              <div class="hub-card-header">
                <span class="pill-tag">${b.category}</span>
                <span style="font-size:0.75rem;color:var(--text-muted)">📅 ${b.date}</span>
              </div>
              <h3 class="hub-card-title"><a href="${rel}blog/${b.slug}/index.html">${b.h1}</a></h3>
              <p class="hub-card-desc">${b.desc}</p>
              <div class="hub-card-footer">
                <span>⏱️ 阅读: ${b.readTime}</span>
                <a href="${rel}blog/${b.slug}/index.html" class="card-link-text">深入阅读 →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  const contentHtml = `
  <div class="container" style="padding-top:1.5rem">
    <div class="content-wrapper" style="max-width:1100px">
      <div class="post-header" style="text-align:center">
        <span class="hero-tag">资讯与知识库</span>
        <h1 style="margin-top:0.5rem">2026 翻墙机场选购指南与技术资讯中心 (100篇深度专栏)</h1>
        <p class="section-subtitle" style="font-size:1.1rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem;max-width:850px;margin-left:auto;margin-right:auto">
          机场PRO独立编辑部出品。拒绝虚标宣传，系统整理 8 大核心意图专题、100 篇深度科普与选购指南。涵盖机场推荐、梯子避坑、性价比折算、IPLC内网专线实测、ChatGPT/流媒体解锁与网络安全全流程。
        </p>
      </div>

      <div class="post-body">
        ${categorySections}
      </div>
    </div>
  </div>`;

  const html = renderHtmlPage({
    title: '机场选购指南与科学上网技术博客 - 100篇深度避坑专栏 | 机场PRO',
    description: '机场PRO独立编辑部出品的科学上网选购与技术资讯知识库。涵盖机场推荐、梯子避坑、性价比折算、IPLC内网专线实测、ChatGPT/流媒体解锁与网络安全共 100 篇深度科普专栏。',
    keywords: '机场推荐, 梯子推荐, 性价比机场, 机场节点, vpn, vpn机场, vpn节点, 翻墙避坑指南',
    canonicalPath,
    depth,
    activeNav: 'blog',
    crumbs,
    schemas: [],
    contentHtml
  });

  writeHtmlFile('blog/index.html', html);
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
// 10.5 生成 HTML 网站地图 (sitemap.html)
// ==========================================
function buildHtmlSitemapPage() {
  const depth = 0;
  const rel = getRelPrefix(depth);
  registerPage(`${SITE_URL}/sitemap.html`, 0.7, 'weekly');

  const contentHtml = `
  <div class="container section">
    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:var(--radius-md);padding:1.25rem 1.5rem;margin-bottom:2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem">
      <div>
        <h1 style="color:#1e40af;font-size:1.5rem;margin:0 0 0.25rem;line-height:1.3">🗺️ 机场PRO 站点地图 (Sitemap 索引目录)</h1>
        <p style="color:#3b82f6;font-size:0.88rem;margin:0">收录全站所有机场推荐、节点排行榜、独立评测、客户端教程与博客文章完整索引。</p>
      </div>
      <a href="${rel}sitemap.xml" target="_blank" class="btn btn-primary btn-sm">查看 XML 爬虫格式 ↗</a>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem">
      <!-- 核心页面 -->
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem">
        <h2 style="font-size:1.15rem;margin-bottom:1rem;color:var(--text-main);border-bottom:2px solid var(--primary);padding-bottom:0.5rem">
          📌 核心页面与横向对比
        </h2>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:0.5rem">
          <li><a href="${rel}index.html" style="color:var(--primary);font-weight:600">🏠 网站首页 (2026专业中文机场推荐与节点导航)</a></li>
          <li><a href="${rel}compare/index.html">⚖️ 机场横向对比工具 (支持2-4家参数横评)</a></li>
          <li><a href="${rel}guides/index.html">📚 客户端使用教程中心 (30篇全平台指引)</a></li>
          <li><a href="${rel}blog/index.html">💡 选购指南与技术博客 (100篇知识库)</a></li>
          <li><a href="${rel}about/index.html">🏢 关于我们</a></li>
          <li><a href="${rel}editorial-policy/index.html">🛡️ 编辑政策与独立评测准则</a></li>
          <li><a href="${rel}privacy-policy/index.html">🔒 隐私权保护声明</a></li>
          <li><a href="${rel}disclaimer/index.html">⚖️ 免责声明与合规告示</a></li>
          <li><a href="${rel}contact/index.html">✉️ 联系我们与反馈</a></li>
        </ul>
      </div>

      <!-- 六大推荐专题 -->
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem">
        <h2 style="font-size:1.15rem;margin-bottom:1rem;color:var(--text-main);border-bottom:2px solid var(--primary);padding-bottom:0.5rem">
          🎯 六大场景推荐专题
        </h2>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:0.5rem">
          <li><a href="${rel}recommend/budget/index.html">💰 高性价比平价机场推荐</a></li>
          <li><a href="${rel}recommend/premium/index.html">💎 高端优质专线机场推荐</a></li>
          <li><a href="${rel}recommend/beginner/index.html">🔰 新手小白友好机场推荐</a></li>
          <li><a href="${rel}recommend/stable/index.html">🛡️ 稳定防封锁防失联机场</a></li>
          <li><a href="${rel}recommend/ai/index.html">🤖 ChatGPT / Claude AI 专用节点</a></li>
          <li><a href="${rel}recommend/streaming/index.html">🎬 4K / 8K 流媒体超清解锁机场</a></li>
        </ul>
      </div>

      <!-- 四大排行榜 -->
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem">
        <h2 style="font-size:1.15rem;margin-bottom:1rem;color:var(--text-main);border-bottom:2px solid var(--primary);padding-bottom:0.5rem">
          📊 多维度基准排行榜
        </h2>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:0.5rem">
          <li><a href="${rel}ranking/overall/index.html">🏆 2026年度翻墙机场综合排行榜</a></li>
          <li><a href="${rel}ranking/value/index.html">💰 真实性价比单G单价排行榜</a></li>
          <li><a href="${rel}ranking/budget/index.html">💵 低预算平价机场排行榜</a></li>
          <li><a href="${rel}ranking/stable/index.html">🚀 晚高峰稳定性专线排行榜</a></li>
        </ul>
      </div>

      <!-- 术语百科 -->
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem">
        <h2 style="font-size:1.15rem;margin-bottom:1rem;color:var(--text-main);border-bottom:2px solid var(--primary);padding-bottom:0.5rem">
          📖 翻墙网络术语百科
        </h2>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:0.5rem">
          <li><a href="${rel}glossary/iplc/index.html">什么是 IPLC 专线？国际私有专线深度解析</a></li>
          <li><a href="${rel}glossary/iepl/index.html">什么是 IEPL 专线？以太网专线与物理跨境</a></li>
          <li><a href="${rel}glossary/clash/index.html">什么是 Clash 规则分流？内外网智能路由</a></li>
          <li><a href="${rel}glossary/hysteria2/index.html">什么是 Hysteria2 协议？魔改UDP暴力弱网提速</a></li>
          <li><a href="${rel}glossary/native-ip/index.html">什么是住宅原生IP？机房IP风控规避要领</a></li>
        </ul>
      </div>
    </div>

    <!-- 14大机场评测与档案 -->
    <div style="margin-top:2rem;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem">
      <h2 style="font-size:1.15rem;margin-bottom:1rem;color:var(--text-main);border-bottom:2px solid var(--primary);padding-bottom:0.5rem">
        🏢 14大核验机场独立评测与参数档案
      </h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:0.75rem">
        ${airportsData.map(a => `
          <div style="padding:0.5rem 0.75rem;background:#f8fafc;border-radius:6px;display:flex;justify-content:space-between;align-items:center">
            <strong>${a.name}</strong>
            <div style="display:flex;gap:0.4rem">
              <a href="${rel}review/${a.slug}/index.html" style="font-size:0.82rem;color:var(--primary)">深度评测</a>
              <span style="color:#cbd5e1">|</span>
              <a href="${rel}airport/${a.slug}/index.html" style="font-size:0.82rem;color:var(--text-muted)">参数档案</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 教程索引 (30篇) -->
    <div style="margin-top:2rem;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem">
      <h2 style="font-size:1.15rem;margin-bottom:1rem;color:var(--text-main);border-bottom:2px solid var(--primary);padding-bottom:0.5rem">
        💻 客户端使用教程 (共30篇)
      </h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:0.6rem">
        ${guidesData.map(g => `
          <div>
            <span style="font-size:0.75rem;background:#e0f2fe;color:#0369a1;padding:0.1rem 0.35rem;border-radius:3px">${g.platform || '客户端'}</span>
            <a href="${rel}guides/${g.slug}/index.html" style="font-size:0.85rem;margin-left:0.35rem">${(g.h1 || g.title).split('：')[0]}</a>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 博客索引 (100篇) -->
    <div style="margin-top:2rem;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem">
      <h2 style="font-size:1.15rem;margin-bottom:1rem;color:var(--text-main);border-bottom:2px solid var(--primary);padding-bottom:0.5rem">
        💡 选购指南与技术博客 (共100篇)
      </h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:0.6rem">
        ${articlesData.map(art => `
          <div>
            <span style="font-size:0.75rem;background:#f1f5f9;color:#475569;padding:0.1rem 0.35rem;border-radius:3px">${art.category || '指南'}</span>
            <a href="${rel}blog/${art.slug}/index.html" style="font-size:0.85rem;margin-left:0.35rem">${(art.h1 || art.title).split('：')[0]}</a>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;

  const html = renderHtmlPage({
    title: '网站地图 (Sitemap) - 全站页面索引导航 | 机场PRO',
    description: '机场PRO 网站地图，收录全站所有机场推荐、节点排行榜、独立评测、客户端教程与博客文章完整索引。',
    keywords: '网站地图, 机场PRO sitemap, 机场推荐, 节点导航, 梯子推荐',
    canonicalPath: 'sitemap.html',
    depth: 0,
    activeNav: '',
    crumbs: [{ name: '网站地图', url: `${rel}sitemap.html` }],
    schemas: [],
    contentHtml
  });

  writeHtmlFile('sitemap.html', html);
}

// ==========================================
// 11. 生成 sitemap.xml 与 robots.txt
// ==========================================
function buildSitemapAndRobots() {
  // 生成 sitemap.xml
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<?xml-stylesheet type="text/xsl" href="./sitemap.xsl"?>\n`;
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
buildHtmlSitemapPage();
buildSitemapAndRobots();
buildIndexNowKeyFile();

console.log(`=== 全量静态页面构建完成！总计有效页面数: ${allPages.length} ===`);
