const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build-site.js');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '// 7. 生成 4 篇客户端新手配置教程 (guides/)';
const endMarker = '// 9. 生成 5 篇网络术语百科 (glossary/)';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('无法找到标记点: startIndex=' + startIndex + ', endIndex=' + endIndex);
  process.exit(1);
}

const replacement = `// 7. 生成 30 篇客户端新手与进阶配置教程 (guides/)
// ==========================================
const guidesData = require(path.join(ROOT_DIR, 'data', 'guides-data.js'));

function buildGuidePages() {
  const depth = 2;
  const rel = getRelPrefix(depth);

  guidesData.forEach(g => {
    const canonicalPath = \`guides/\${g.slug}/\`;
    registerPage(\`\${SITE_URL}/\${canonicalPath}\`, 0.8, 'monthly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '使用教程', url: 'guides/index.html' },
      { name: g.h1, url: \`guides/\${g.slug}/index.html\` }
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

    const stepsHtml = (g.steps || []).map((step, idx) => \`
      <h2>步骤 \${idx + 1}：\${step.title}</h2>
      <p>\${step.content}</p>
    \`).join('');

    const faqsHtml = (g.faqs || []).length > 0 ? \`
      <h2>常见故障排查与答疑 (Troubleshooting)</h2>
      <div class="faq-list">
        \${g.faqs.map(f => \`
          <div class="faq-item">
            <div class="faq-question">\${f.q}</div>
            <div class="faq-answer">\${f.a}</div>
          </div>
        \`).join('')}
      </div>
    \` : '';

    const contentHtml = \`
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">\${g.category} 平台教程</span>
          <h1 style="margin-top:0.5rem">\${g.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">\${g.desc}</p>
          <div class="post-meta-bar">
            <span>📅 最新更新: \${g.date || CURRENT_DATE}</span>
            <span>📱 推荐核心: \${g.client}</span>
            <span>⏱️ 阅读时长: 约 \${g.readTime || '5 分钟'}</span>
          </div>
        </div>

        <div class="post-body">
          <div class="callout" style="margin-bottom:1.5rem">
            <div class="callout-title">💡 教程概要与前提</div>
            <p style="margin-bottom:0">\${g.summary || '本教程系统详解客户端下载、配置导入与分流设置，助您实现安全稳定的网络加速。'}</p>
          </div>

          \${stepsHtml}

          \${faqsHtml}
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 推荐阅读与横向参考</div>
          <ul class="related-links">
            <li><a href="\${rel}guides/index.html">📚 返回教程中心总览（查阅全部 30 篇教程）</a></li>
            <li><a href="\${rel}ranking/overall/index.html">📊 查阅2026年度全网机场综合排行榜</a></li>
            <li><a href="\${rel}recommend/budget/index.html">💰 查看高性价比平价机场精选</a></li>
            <li><a href="\${rel}compare/index.html">⚖️ 自由勾选机场进行横向比对</a></li>
          </ul>
        </div>
      </div>
    </div>\`;

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

    writeHtmlFile(\`guides/\${g.slug}/index.html\`, html);
  });

  // 生成教程中心总览页 guides/index.html
  buildGuidesHubPage();
}

function buildGuidesHubPage() {
  const depth = 1;
  const rel = getRelPrefix(depth);
  const canonicalPath = 'guides/';
  registerPage(\`\${SITE_URL}/\${canonicalPath}\`, 0.9, 'weekly');

  const crumbs = [
    { name: '首页', url: 'index.html' },
    { name: '使用教程中心', url: 'guides/index.html' }
  ];

  const categories = ['Windows', 'Android', 'iOS', 'macOS', '软路由与网关', '开发工具'];

  const categorySections = categories.map(cat => {
    const items = guidesData.filter(g => g.category === cat);
    return \`
      <div style="margin-top:2.5rem">
        <h2 style="font-size:1.35rem;display:flex;align-items:center;gap:0.5rem;border-bottom:2px solid var(--border-color);padding-bottom:0.5rem">
          <span>📁 \${cat} 专题教程</span>
          <span class="pill-tag" style="font-size:0.75rem">\${items.length} 篇</span>
        </h2>
        <div class="hub-grid">
          \${items.map(g => \`
            <div class="hub-card">
              <div class="hub-card-header">
                <span class="pill-tag">\${g.os}</span>
                <span style="font-size:0.75rem;color:var(--text-muted)">⏱️ \${g.readTime}</span>
              </div>
              <h3 class="hub-card-title"><a href="\${rel}guides/\${g.slug}/index.html">\${g.h1}</a></h3>
              <p class="hub-card-desc">\${g.desc}</p>
              <div class="hub-card-footer">
                <span>核心: <strong>\${g.client}</strong></span>
                <a href="\${rel}guides/\${g.slug}/index.html" class="card-link-text">查看教程 →</a>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;
  }).join('');

  const contentHtml = \`
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
        \${categorySections}
      </div>
    </div>
  </div>\`;

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
    const canonicalPath = \`blog/\${b.slug}/\`;
    registerPage(\`\${SITE_URL}/\${canonicalPath}\`, 0.8, 'monthly');

    const crumbs = [
      { name: '首页', url: 'index.html' },
      { name: '选购指南与博客', url: 'blog/index.html' },
      { name: b.h1, url: \`blog/\${b.slug}/index.html\` }
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

    const sectionsHtml = (b.sections || []).map(s => \`
      <h2>\${s.title}</h2>
      <p>\${s.content}</p>
    \`).join('');

    const faqsHtml = (b.faqs || []).length > 0 ? \`
      <h2>常见问题解答 (FAQ)</h2>
      <div class="faq-list">
        \${b.faqs.map(f => \`
          <div class="faq-item">
            <div class="faq-question">\${f.q}</div>
            <div class="faq-answer">\${f.a}</div>
          </div>
        \`).join('')}
      </div>
    \` : '';

    const contentHtml = \`
    <div class="container" style="padding-top:1.5rem">
      <div class="content-wrapper">
        <div class="post-header">
          <span class="hero-tag">\${b.category || '深度选购与科普'}</span>
          <h1 style="margin-top:0.5rem">\${b.h1}</h1>
          <p class="section-subtitle" style="font-size:1.05rem;line-height:1.7;color:var(--text-body);margin-top:0.75rem">\${b.desc}</p>
          <div class="post-meta-bar">
            <span>📅 发布日期: \${b.date || CURRENT_DATE}</span>
            <span>✍️ 机场PRO 编辑部</span>
            <span>⏱️ 预计阅读: \${b.readTime || '6 分钟'}</span>
          </div>
        </div>

        <div class="post-body">
          <div class="callout" style="margin-bottom:1.5rem">
            <div class="callout-title">📌 本篇导读</div>
            <p style="margin-bottom:0">\${b.summary || b.desc}</p>
          </div>

          \${sectionsHtml}

          \${faqsHtml}
        </div>

        <div class="related-posts">
          <div class="related-title">🔗 延伸阅读与相关专题</div>
          <ul class="related-links">
            <li><a href="\${rel}blog/index.html">📖 浏览全部 100 篇选购指南与技术博客</a></li>
            <li><a href="\${rel}ranking/overall/index.html">📊 查阅2026年度全网机场综合排行榜</a></li>
            <li><a href="\${rel}ranking/value/index.html">💰 查看真实性价比排行榜（每GB单价精确折算）</a></li>
            <li><a href="\${rel}compare/index.html">⚖️ 自由勾选机场进行横向比对</a></li>
            <li><a href="\${rel}guides/index.html">💻 查看全平台科学上网客户端配置教程 (30篇)</a></li>
          </ul>
        </div>
      </div>
    </div>\`;

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

    writeHtmlFile(\`blog/\${b.slug}/index.html\`, html);
  });

  // 生成博客中心总览页 blog/index.html
  buildBlogHubPage();
}

function buildBlogHubPage() {
  const depth = 1;
  const rel = getRelPrefix(depth);
  const canonicalPath = 'blog/';
  registerPage(\`\${SITE_URL}/\${canonicalPath}\`, 0.9, 'weekly');

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
    return \`
      <div style="margin-top:2.5rem">
        <h2 style="font-size:1.35rem;display:flex;align-items:center;gap:0.5rem;border-bottom:2px solid var(--border-color);padding-bottom:0.5rem">
          <span>📚 \${cat} 专题专栏</span>
          <span class="pill-tag" style="font-size:0.75rem">\${items.length} 篇</span>
        </h2>
        <div class="hub-grid">
          \${items.map(b => \`
            <div class="hub-card">
              <div class="hub-card-header">
                <span class="pill-tag">\${b.category}</span>
                <span style="font-size:0.75rem;color:var(--text-muted)">📅 \${b.date}</span>
              </div>
              <h3 class="hub-card-title"><a href="\${rel}blog/\${b.slug}/index.html">\${b.h1}</a></h3>
              <p class="hub-card-desc">\${b.desc}</p>
              <div class="hub-card-footer">
                <span>⏱️ 阅读: \${b.readTime}</span>
                <a href="\${rel}blog/\${b.slug}/index.html" class="card-link-text">深入阅读 →</a>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;
  }).join('');

  const contentHtml = \`
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
        \${categorySections}
      </div>
    </div>
  </div>\`;

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
`;

const newContent = content.slice(0, startIndex) + replacement + '\n// ==========================================\n' + content.slice(endIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('✅ 成功将 30 篇教程与 100 篇博客集成到 build-site.js！');
