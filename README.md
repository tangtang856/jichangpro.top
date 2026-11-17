# 机场PRO (jichangpro.top)

> 🚀 2026专业中文机场推荐与科学上网节点导航 · Bing SEO 专业建站系统

本项目是一个专为 **Bing (必应) 自然搜索流量** 深度优化的高性能中文网络加速与翻墙机场资讯门户。
全站采用 **纯静态 HTML + 原生 CSS + 轻量 JavaScript** 架构，零重型构建依赖，全站资源与内链严格遵循标准相对路径，兼具秒开级加载性能与本地直接双击（`file://` 协议）浏览能力。

---

## 一、核心技术与架构特色

- **零重型依赖 & 秒开级速度**：放弃复杂的前端构建器与重型 JS 框架，页面完全由服务端预先静态生成，纯原生 CSS 响应式布局。
- **100% 标准相对路径**：所有 CSS、JS、图片及超链接均使用精准相对路径（如 `css/style.css`、`../../index.html`），本地无需服务器直接双击即可畅通无阻。
- **全方位 Bing SEO 技术架构**：
  - 独立 Title、Description、单一 H1 架构
  - 全局规范化 Canonical (`https://jichangpro.top/...`)
  - 完整 Schema 结构化数据 (Organization, BreadcrumbList, Article, Review, ItemList)
  - 动态生成的 `sitemap.xml` (包含 41 个正式 URL) 与 `robots.txt`
  - 深度集成 **IndexNow** 自动化提交系统 (`npm run indexnow`)
- **统一机场参数数据库**：`data/airports.json` 与 `data/airports.js` 提供唯一真实数据源，拒绝虚假宣传。
- **自动化质量把控 (QA)**：内置全自动 SEO 审计 (`scripts/audit-seo.js`)、链接完整性测试 (`scripts/check-links.js`) 与数据一致性核验 (`scripts/validate-content.js`)。

---

## 二、网站信息架构与页面分布

```text
/
├── index.html                   # 门户首页 (严格实现 13 个功能分区)
├── recommend/                   # 6大核心推荐专题
│   ├── budget/                  # 高性价比/平价精选
│   ├── premium/                 # 高端优质专线精选
│   ├── beginner/                # 新手小白入门友好
│   ├── stable/                  # 稳定优先抗封锁节点
│   ├── ai/                      # ChatGPT/Claude 纯净原生节点
│   └── streaming/               # Netflix/Disney+/YouTube 4K 流媒体
├── ranking/                     # 4大维度排行榜
│   ├── overall/                 # 2026综合排行榜
│   ├── value/                   # 真实性价比单G单价榜 (计算每GB单价)
│   ├── budget/                  # 平价低预算排行榜
│   └── stable/                  # 稳定性专线排行榜
├── airport/                     # 5家真实品牌参数档案
│   ├── flyingbird/              # 飞鸟云 FlyingBird
│   ├── tag-internet/            # TAG Internet
│   ├── wancheng/                # 万城网络 Wancheng
│   ├── kuanyun/                 # 宽云网络 KuanYun
│   └── yemao/                   # 野猫网络 Yemao
├── review/                      # 5篇独立深度评测报告 (符合完整评测模板)
│   ├── flyingbird/
│   ├── tag-internet/
│   ├── wancheng/
│   ├── kuanyun/
│   └── yemao/
├── compare/                     # 在线横向比对工具 (支持2-4家机场并排比对)
├── guides/                      # 4大客户端图文配置教程
│   ├── windows/                 # Windows Clash Verge Rev 教程
│   ├── android/                 # Android Clash Meta 教程
│   ├── ios/                     # iOS Shadowrocket 小火箭教程
│   └── macos/                   # macOS Clash Verge 教程
├── blog/                        # 5篇深度决策与技术科普文章
│   ├── how-to-choose-airport/   # 新手选购避坑九大法则
│   ├── iepl-vs-iplc/            # IPLC 与 IEPL 专线深度解析
│   ├── airport-protocol-explained/# 主流协议对比 (SS/VLESS/Hysteria2)
│   ├── avoid-pitfalls/          # 警惕机场跑路风险指南
│   └── chatgpt-claude-airport-unlock/ # AI 节点防封与原生IP技巧
├── glossary/                    # 5篇技术术语百科词条
│   ├── iplc/                    # 什么是 IPLC 专线
│   ├── iepl/                    # 什么是 IEPL 专线
│   ├── clash/                   # 什么是 Clash 规则分流
│   ├── hysteria2/               # 什么是 Hysteria2 协议
│   └── native-ip/               # 什么是原生IP与住宅IP
├── about/                       # 关于我们 (E-E-A-T 独立评测媒体)
├── contact/                     # 联系我们与数据纠错
├── editorial-policy/            # 编辑政策与评测标准
├── privacy-policy/              # 用户隐私政策
├── disclaimer/                  # 免责声明与合规使用提示
└── 404.html                     # 自定义 404 错误页
```

---

## 三、常用管理与构建命令

```bash
# 全量重新生成全站静态页面与 Sitemap
npm run build

# 执行自动化 SEO 与死链质量检测 (100% 通过验证)
npm test

# 向 Bing 搜索引擎提交 IndexNow 实时推送
npm run indexnow

# 本地快速预览 (亦可直接双击任意 HTML 文件在浏览器中打开)
npx serve .
```

---

## 四、文档中心

- [SEO 关键词地图 (docs/keyword-map.csv)](docs/keyword-map.csv)
- [自动化全项验收报告 (docs/final-audit.md)](docs/final-audit.md)
- [Bing 站长平台操作指南 (docs/bing-webmaster-guide.md)](docs/bing-webmaster-guide.md)
- [Cloudflare Pages 与正式部署指南 (docs/deployment-guide.md)](docs/deployment-guide.md)

---

## 五、版权与声明

本项目所有评测数据均来源于公开套餐信息及测试样本节点实际网络表现。评测结果仅供技术学术交流、外贸办公及海外研发网络加速参考，请遵守当地法律法规。
