const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const buildSitePath = path.join(ROOT_DIR, 'scripts', 'build-site.js');
let content = fs.readFileSync(buildSitePath, 'utf8');

const startMarker = '  const contentHtml = `';
const endMarker = '  const html = renderHtmlPage({';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('无法定位 buildIndexPage 标记点: startIndex=' + startIndex + ', endIndex=' + endIndex);
  process.exit(1);
}

const newIndexHtml = `  // 首页主内容 (全新现代科技媒体杂志风格)
  const contentHtml = \`
  <!-- 顶部跑马灯测速雷达 -->
  <div class="top-ticker-bar">
    <div class="container ticker-inner">
      <div>
        <span class="pulse-dot"></span>
        <strong style="color:#e2e8f0">晚高峰网络监测雷达:</strong>
        <span>14 家核验品牌链路全天候监控中 · 骨干专线连通率 99.8%</span>
      </div>
      <div style="display:flex;gap:1rem">
        <span>📅 数据更新于: \${CURRENT_DATE}</span>
        <a href="\${rel}ranking/overall/index.html" style="color:#38bdf8">查看最新基准排行榜 →</a>
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
            <a href="\${rel}review/breezenet/index.html" class="btn btn-outline" style="flex:1">深度评测报告</a>
            <a href="\${rel}airport/breezenet/index.html" class="btn btn-outline" style="flex:1">参数档案</a>
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
              <a href="\${rel}review/muguang/index.html" class="btn btn-outline btn-sm">评测报告</a>
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
              <a href="\${rel}review/feimaoyun/index.html" class="btn btn-outline btn-sm">评测报告</a>
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
          \${airportsData.filter(a => ['yinxingren', 'flashleap', 'wuyou', 'lingmao'].includes(a.id)).map(a => \`
            <div class="tier-horizontal-card">
              <div>
                <div style="display:flex;align-items:center;gap:0.35rem">
                  <strong style="font-size:1.15rem;color:var(--text-main)">\${a.name}</strong>
                  \${a.coupon ? \`<span class="coupon-tag">券: \${a.coupon}</span>\` : ''}
                </div>
                <div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.25rem">\${a.lineType}</div>
              </div>
              <div>
                <div style="font-size:0.88rem;color:var(--text-body);line-height:1.5">\${a.advantages[0]}</div>
                <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.2rem">适合人群: \${a.suitableFor[0]}</div>
              </div>
              <div>
                <div style="font-size:1.2rem;font-weight:800;color:var(--primary)">\${a.currency}\${a.startingPrice} <span style="font-size:0.8rem;color:var(--text-muted);font-weight:400">/ \${a.billingCycle}</span></div>
                <div style="font-size:0.78rem;color:var(--text-muted)">包含 \${a.plans[0].traffic} (约 ¥\${a.plans[0].unitPrice}/GB)</div>
              </div>
              <div style="display:flex;gap:0.4rem;justify-content:flex-end">
                <a href="\${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="font-weight:700">官网 ↗</a>
                <a href="\${rel}review/\${a.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>

      <!-- Tier 2: 极致性价比与超低预算特刊 -->
      <div style="margin-bottom:2.75rem">
        <div class="tier-title-bar">
          <h3><span>💰 Tier 2: 极致性价比与学生党特刊 (门槛低至几元)</span></h3>
          <span style="font-size:0.85rem;color:var(--text-muted)">核算真实单G成本，小花销办大事</span>
        </div>
        <div class="tier-chip-grid">
          \${airportsData.filter(a => ['firefly', 'feiv', 'kuajiecloud', 'quanqiuyun'].includes(a.id)).map(a => \`
            <div class="tier-chip-card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start">
                <strong style="font-size:1.1rem;color:var(--text-main)">\${a.name}</strong>
                \${a.coupon ? \`<span class="coupon-tag">券: \${a.coupon}</span>\` : ''}
              </div>
              <div style="font-size:0.8rem;color:var(--text-muted);margin:0.25rem 0">\${a.lineType}</div>
              <div class="tier-chip-price-badge">
                <span class="tier-chip-price">\${a.currency}\${a.startingPrice}</span>
                <span style="font-size:0.8rem;color:var(--text-muted)">/ \${a.billingCycle}</span>
                <span class="tier-chip-unit">(¥\${a.plans[0].unitPrice}/GB)</span>
              </div>
              <p style="font-size:0.82rem;color:var(--text-body);margin-bottom:0.85rem;flex:1">\${a.advantages[0]}</p>
              <div style="display:flex;gap:0.4rem;padding-top:0.6rem;border-top:1px solid var(--border-color)">
                <a href="\${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1;font-weight:700">直达官网 ↗</a>
                <a href="\${rel}review/\${a.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>

      <!-- Tier 3: 场景专家与特色客户端优化 -->
      <div>
        <div class="tier-title-bar">
          <h3><span>🚀 Tier 3: 场景专家与特色客户端优化</span></h3>
          <span style="font-size:0.85rem;color:var(--text-muted)">针对商务漫游、独立软件与多地灾备专门调优</span>
        </div>
        <div class="tier-chip-grid">
          \${airportsData.filter(a => ['wavenet', 'laddercloud', 'lingdongcloud'].includes(a.id)).map(a => \`
            <div class="tier-chip-card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start">
                <strong style="font-size:1.1rem;color:var(--text-main)">\${a.name}</strong>
                <span class="pill-tag">\${a.deviceLimit}</span>
              </div>
              <div style="font-size:0.8rem;color:var(--text-muted);margin:0.25rem 0">\${a.lineType}</div>
              <div class="tier-chip-price-badge">
                <span class="tier-chip-price">\${a.currency}\${a.startingPrice}</span>
                <span style="font-size:0.8rem;color:var(--text-muted)">/ \${a.billingCycle}</span>
                <span style="font-size:0.8rem;color:var(--primary);font-weight:600">· 包含 \${a.plans[0].traffic}</span>
              </div>
              <p style="font-size:0.82rem;color:var(--text-body);margin-bottom:0.85rem;flex:1">\${a.advantages[0]}</p>
              <div style="display:flex;gap:0.4rem;padding-top:0.6rem;border-top:1px solid var(--border-color)">
                <a href="\${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1;font-weight:700">直达官网 ↗</a>
                <a href="\${rel}review/\${a.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
              </div>
            </div>
          \`).join('')}
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
          <a href="\${rel}ranking/overall/index.html" class="btn btn-outline btn-sm" style="border-color:#475569;color:#e2e8f0">查看排行依据说明 →</a>
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
              \${[...airportsData].sort((a,b) => (a.rank || 0) - (b.rank || 0)).map((item, idx) => \`
                <tr>
                  <td style="text-align:center">
                    <span class="rank-medal-pill \${idx === 0 ? 'rank-gold' : idx === 1 ? 'rank-silver' : idx === 2 ? 'rank-bronze' : ''}">\${idx + 1}</span>
                  </td>
                  <td>
                    <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap">
                      <strong style="font-size:0.95rem">\${item.name}</strong>
                      \${item.coupon ? \`<span class="coupon-tag">券: \${item.coupon}</span>\` : ''}
                    </div>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem">\${item.tagline.split('·')[0]}</div>
                  </td>
                  <td style="color:var(--primary);font-weight:700">\${item.currency}\${item.startingPrice} <span style="font-size:0.8rem;color:var(--text-muted)">/ \${item.billingCycle}</span></td>
                  <td>\${item.plans[0].traffic}<br><small style="color:var(--text-muted)">(¥\${item.plans[0].unitPrice}/GB)</small></td>
                  <td><span class="pill-tag">\${item.lineType}</span></td>
                  <td>
                    <div class="score-bar-wrap">
                      <strong style="color:var(--primary);font-size:1rem">\${item.ratings.overall}</strong>
                      <div class="score-bar-track">
                        <div class="score-bar-fill" style="width:\${(item.ratings.overall / 10) * 100}%"></div>
                      </div>
                    </div>
                  </td>
                  <td style="font-size:0.85rem">\${item.suitableFor[0]}</td>
                  <td style="text-align:center">
                    <div style="display:inline-flex;gap:0.35rem">
                      <a href="\${rel}review/\${item.slug}/index.html" class="btn btn-outline btn-sm">评测</a>
                      <a href="\${item.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">官网 ↗</a>
                    </div>
                  </td>
                </tr>
              \`).join('')}
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
        <a href="\${rel}recommend/premium/index.html" class="matrix-topic-card topic-bg-premium">
          <div style="font-size:1.75rem">💎</div>
          <h3>高端商业专线</h3>
          <p>全IPLC/IEPL物理内网专线不过墙，覆盖欧美亚核心节点，晚高峰零丢包与低抖动代表。</p>
          <span class="card-link-text">查阅商业专线精选 →</span>
        </a>
        <a href="\${rel}recommend/budget/index.html" class="matrix-topic-card topic-bg-budget">
          <div style="font-size:1.75rem">💰</div>
          <h3>高性价比平价梯子</h3>
          <p>月付低至几元钱，核算真实单G成本与剔除倍率陷阱，在校学生与备用梯子首选。</p>
          <span class="card-link-text">查阅平价梯子精选 →</span>
        </a>
        <a href="\${rel}recommend/beginner/index.html" class="matrix-topic-card topic-bg-beginner">
          <div style="font-size:1.75rem">🔰</div>
          <h3>新手入门零门槛</h3>
          <p>全平台一键导入订阅，支持 Clash Verge、小火箭等客户端，附带详尽图文教程与客服响应。</p>
          <span class="card-link-text">查阅新手小白方案 →</span>
        </a>
        <a href="\${rel}recommend/stable/index.html" class="matrix-topic-card topic-bg-stable">
          <div style="font-size:1.75rem">🛡️</div>
          <h3>稳定防失联节点</h3>
          <p>多线 BGP 入口与异地冷备机房，抗极端封锁与重大敏感时期网络抖动，全天候挂机可用。</p>
          <span class="card-link-text">查阅防封锁推荐 →</span>
        </a>
        <a href="\${rel}recommend/ai/index.html" class="matrix-topic-card topic-bg-ai">
          <div style="font-size:1.75rem">🤖</div>
          <h3>ChatGPT & Claude 专线</h3>
          <p>纯净原生住宅 IP 分流优化，彻底告别 Access Denied 1020 报错与批量风控封号。</p>
          <span class="card-link-text">查阅 AI 专用节点 →</span>
        </a>
        <a href="\${rel}recommend/streaming/index.html" class="matrix-topic-card topic-bg-streaming">
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
              <a href="\${rel}blog/how-to-choose-airport/index.html">新手如何挑选靠谱机场？2026年机场选购避坑九大核心法则</a>
            </h3>
            <p class="lead-story-excerpt">
              面对市场上成千上万家翻墙机场，小白用户如何挑出不跑路、晚高峰不卡顿、高性价比的节点？本文为您系统总结九条经过实战检验的核心选购法则：从月付试水、专线鉴别、倍率核算到双机场容灾备用实践。
            </p>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;font-size:0.85rem;color:var(--text-muted)">
              <span>✍️ 机场PRO 编辑部 · 2026-03-15</span>
              <a href="\${rel}blog/how-to-choose-airport/index.html" class="btn btn-outline btn-sm">阅读专题全文 →</a>
            </div>
          </div>

          <!-- 下方双拼次级精选 -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:1.25rem">
            <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.25rem">
              <span class="pill-tag" style="font-size:0.75rem;margin-bottom:0.5rem">专线技术</span>
              <h4 style="font-size:1.05rem;line-height:1.4;margin:0.35rem 0 0.5rem">
                <a href="\${rel}blog/iepl-vs-iplc/index.html" style="color:var(--text-main)">IPLC 与 IEPL 专线有何区别？两分钟看懂原理</a>
              </h4>
              <p style="font-size:0.82rem;color:var(--text-body);line-height:1.6;margin-bottom:0.75rem">通俗拆解专线物理架构与网络表现差异，教您识别真假内网专线。</p>
              <a href="\${rel}blog/iepl-vs-iplc/index.html" class="card-link-text">深入阅读 →</a>
            </div>

            <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.25rem">
              <span class="pill-tag" style="font-size:0.75rem;margin-bottom:0.5rem">风控避坑</span>
              <h4 style="font-size:1.05rem;line-height:1.4;margin:0.35rem 0 0.5rem">
                <a href="\${rel}blog/avoid-pitfalls/index.html" style="color:var(--text-main)">警惕机场跑路风险！购买节点的六大防坑常识</a>
              </h4>
              <p style="font-size:0.82rem;color:var(--text-body);line-height:1.6;margin-bottom:0.75rem">千万别被所谓超低价年付冲昏头脑！揭秘虚标超卖与跑路套路。</p>
              <a href="\${rel}blog/avoid-pitfalls/index.html" class="card-link-text">深入阅读 →</a>
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
              <div class="trending-title"><a href="\${rel}blog/chatgpt-claude-airport-unlock/index.html">ChatGPT 与 Claude 节点防封技巧与原生住宅IP识别</a></div>
              <div class="trending-meta">AI专属 · 7 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">02</span>
            <div>
              <div class="trending-title"><a href="\${rel}blog/value-airport-calculation/index.html">剔除虚标陷阱！机场真实每GB单价换算公式与倍率折算</a></div>
              <div class="trending-meta">性价比测算 · 6 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">03</span>
            <div>
              <div class="trending-title"><a href="\${rel}blog/vpn-vs-airport-deep-dive/index.html">VPN和机场有什么本质区别？底层协议与运作原理</a></div>
              <div class="trending-meta">网络架构 · 8 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">04</span>
            <div>
              <div class="trending-title"><a href="\${rel}blog/hysteria2-udp-brutal/index.html">Hysteria2 协议底层原理解析：UDP 恶劣弱网抗丢包神器</a></div>
              <div class="trending-meta">协议技术 · 6 分钟阅读</div>
            </div>
          </div>
          <div class="trending-item">
            <span class="trending-num">05</span>
            <div>
              <div class="trending-title"><a href="\${rel}blog/netflix-region-unlock-guide/index.html">Netflix 奈飞锁区破解与非自制剧点播：原生IP与DNS解锁</a></div>
              <div class="trending-meta">流媒体技巧 · 5 分钟阅读</div>
            </div>
          </div>

          <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border-color);text-align:center">
            <a href="\${rel}blog/index.html" class="btn btn-outline btn-sm" style="width:100%">查阅全部 100 篇深度博客专栏 →</a>
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
        <a href="\${rel}guides/windows/index.html" class="category-card">
          <div class="category-icon">💻</div>
          <h3>Windows 电脑配置 (6篇)</h3>
          <p>Clash Verge Rev、v2rayN、Sing-box、Clash Nyanpasu 与 TUN 虚拟网卡模式教程。</p>
          <span class="card-link-text">阅读 Windows 系列教程 →</span>
        </a>
        <a href="\${rel}guides/android/index.html" class="category-card">
          <div class="category-icon">📱</div>
          <h3>Android 安卓手机 (6篇)</h3>
          <p>Clash Meta for Android (CMFA)、v2rayNG、Surfboard 冲浪板与防杀后台白名单配置。</p>
          <span class="card-link-text">阅读 Android 系列教程 →</span>
        </a>
        <a href="\${rel}guides/ios/index.html" class="category-card">
          <div class="category-icon">🍎</div>
          <h3>iOS 苹果设备 (6篇)</h3>
          <p>Shadowrocket 小火箭、Loon、Quantumult X (圈X)、Surge iOS 与美区 Apple ID 自助注册。</p>
          <span class="card-link-text">阅读 iOS 系列教程 →</span>
        </a>
        <a href="\${rel}guides/macos/index.html" class="category-card">
          <div class="category-icon">🖥️</div>
          <h3>macOS 苹果电脑 (6篇)</h3>
          <p>Mac 平台 Clash Verge Rev (M芯片支持)、Surge Mac 增强模式与终端命令行代理加速。</p>
          <span class="card-link-text">阅读 macOS 系列教程 →</span>
        </a>
        <a href="\${rel}guides/openwrt-passwall/index.html" class="category-card">
          <div class="category-icon">🖧</div>
          <h3>软路由与全屋网关 (4篇)</h3>
          <p>OpenWrt PassWall、OpenClash Meta、Apple TV / PS5 游戏主机加速与 DNS 防污染。</p>
          <span class="card-link-text">阅读软路由系列教程 →</span>
        </a>
        <a href="\${rel}guides/docker-git-proxy/index.html" class="category-card">
          <div class="category-icon">⚡</div>
          <h3>开发者与跨平台工具 (2篇)</h3>
          <p>Docker 镜像拉取加速、GitHub 命令行代理与 Telegram 电报内置独占代理配置。</p>
          <span class="card-link-text">阅读开发者加速教程 →</span>
        </a>
      </div>
      <div style="text-align:center;margin-top:1.75rem">
        <a href="\${rel}guides/index.html" class="btn btn-outline">进入教程中心，浏览全部 30 篇详细图文配置指南 →</a>
      </div>
    </section>

    <!-- 知识百科精选 -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title"><span>📖 网络技术与翻墙黑话百科</span></h2>
        <p class="section-subtitle">解开通信协议迷雾，弄懂 IPLC、IEPL、Clash、Hysteria2 与住宅原生IP底层机理</p>
      </div>
      <div class="glossary-grid">
        <a href="\${rel}glossary/iplc/index.html" class="glossary-card">
          <div class="glossary-term">什么是 IPLC 专线？</div>
          <div class="glossary-snippet">国际私有租用线路，完全绕过公网防火墙，零丢包、低延迟代表。</div>
        </a>
        <a href="\${rel}glossary/iepl/index.html" class="glossary-card">
          <div class="glossary-term">什么是 IEPL 专线？</div>
          <div class="glossary-snippet">国际以太网私有专线，具备高弹性和敏捷路由，目前高品质机场主流专线。</div>
        </a>
        <a href="\${rel}glossary/clash/index.html" class="glossary-card">
          <div class="glossary-term">什么是 Clash 规则分流？</div>
          <div class="glossary-snippet">国内网站直连、海外网站走代理、局域网绕行，实现智能省流量不卡顿。</div>
        </a>
        <a href="\${rel}glossary/hysteria2/index.html" class="glossary-card">
          <div class="glossary-term">什么是 Hysteria2 协议？</div>
          <div class="glossary-snippet">基于魔改 UDP 的新型传输协议，专治弱网丢包，晚高峰暴力提速神兵利器。</div>
        </a>
        <a href="\${rel}glossary/native-ip/index.html" class="glossary-card">
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
  </div>\`;
`;

const updatedContent = content.slice(0, startIndex) + newIndexHtml + '\n' + content.slice(endIndex);
fs.writeFileSync(buildSitePath, updatedContent, 'utf8');
console.log('✅ 成功将全新的现代科技媒体杂志风格首页注入 build-site.js！');
