# 机场PRO (jichangpro.top) Bing Webmaster Tools 操作指南

本指南专为 **Bing (必应) 搜索引擎优化** 编写，指导站长在网站上线后完成 Bing 站长平台的认证、Sitemap 提交、IndexNow 主动推送及流量监控。

---

## 一、人工登录与所有权验证 (需要站长手动操作)

1. **登录平台**：
   - 访问 [Bing Webmaster Tools (必应站长管理工具)](https://www.bing.com/webmasters)
   - 使用 Microsoft 账号、Google 账号或 GitHub 账号登录。

2. **添加站点**：
   - 点击左上角“添加站点”，输入您的正式域名：`https://jichangpro.top`。
   - **推荐验证方式（二选一）**：
     - **方式 A（DNS CNAME / TXT 验证，最稳妥）**：在您的域名 DNS 解析提供商（如 Cloudflare / 腾讯云 / 阿里云）添加 Bing 提供的 CNAME 记录或 TXT 记录。
     - **方式 B（HTML 标记验证）**：复制 Bing 给出的 `<meta name="msvalidate.01" content="..."/>`，可将其添加至 `index.html` 的 `<head>` 区域，然后点击“验证”。
     - **方式 C（从 Google Search Console 一键导入）**：如果您已在 GSC 完成验证，可直接一键同步授权。

---

## 二、Sitemap (网站地图) 提交

1. 在 Bing 站长后台左侧导航栏，点击 **“Sitemaps (站点地图)”**。
2. 在右上角点击 **“提交站点地图 (Submit Sitemap)”**。
3. 输入您的网站地图完整 URL：
   ```text
   https://jichangpro.top/sitemap.xml
   ```
4. 点击“提交”。
5. **预期结果**：状态最初显示“正在处理”，抓取成功后将显示状态为“成功 (Success)”，并显示已发现的 41 个页面。

---

## 三、IndexNow 实时推送验证

本项目已内置 IndexNow 模块，帮助您在发布新文章或更新价格时，毫秒级通知 Bing 爬虫前来进行抓取：

1. **验证本地 Key 文件**：
   - 本项目根目录已生成密钥文件：`e198b1a37c444bb284dc84e859b867c4.txt`
   - 网站上线后，请在浏览器中访问：`https://jichangpro.top/e198b1a37c444bb284dc84e859b867c4.txt`，确保能直接查看到密钥内容：`e198b1a37c444bb284dc84e859b867c4`。

2. **在终端执行一键推送**：
   ```bash
   # 默认提交近期核心落地页
   npm run indexnow

   # 或者提交全量 41 个页面
   node scripts/indexnow.js --all

   # 或者提交单篇新发布的文章
   node scripts/indexnow.js https://jichangpro.top/blog/how-to-choose-airport/
   ```

3. **在 Bing 后台查看 IndexNow 记录**：
   - 在 Bing Webmaster Tools 左侧菜单点击 **“IndexNow”**。
   - 您将看到刚刚提交的 URL 列表以及提交状态。
   - *注：提交成功表示 Bing 已收到更新信号，实际抓取和收录展示通常在数小时至数天内完成。*

---

## 四、URL 检查工具 (URL Inspection)

当您对某个重点页面进行了深度优化（如修改了首页、性价比排行榜）：
1. 在 Bing 站长后台顶部搜索栏或左侧菜单点击 **“URL Inspection (URL 检查)”**。
2. 输入待检查的页面，例如 `https://jichangpro.top/ranking/overall/`。
3. 检查：
   - **编制索引状态**：是否已编入索引。
   - **实时测试 (Live Test)**：Bing 爬虫能否正常读取页面 HTML 与 Schema 结构化数据。
   - **请求编制索引 (Request Indexing)**：点击该按钮可向 Bing 爬虫提交优先抓取请求（每日有额度限制）。

---

## 五、搜索表现与流量监测 (Search Performance)

在网站平稳运行 1-2 周后，可在 **“Search Performance (搜索表现)”** 报表中查看：
1. **核心关键词排名**：监控 `机场推荐`、`机场节点`、`性价比机场`、`梯子推荐` 等词的曝光量 (Impressions)、点击量 (Clicks) 与平均排名 (Average Position)。
2. **高意向落地页分析**：观察 `/recommend/budget/` 与 `/ranking/value/` 是否获得了预期的点击增长。
3. **Bing 移动端占比**：确认移动端用户的跳出率与浏览深度。

---

## 六、抓取异常与爬虫问题诊断 (Crawl Issues)

1. 点击 **“Crawl Control (抓取控制)”**：建议将抓取速率设置为默认，或根据访客时区将 Bing 爬虫的高频抓取时间设置在凌晨闲时。
2. 点击 **“Site Explorer (站点资源管理器)”**：查看是否存在 4xx 错误或重定向异常。
3. 检查 **“SEO Reports (SEO 建议报告)”**：Bing 会自动评估页面的 HTML 标记规范。由于本项目已在 `scripts/audit-seo.js` 中进行了严密排查，所有页面的 Title、Description、单一 H1 及 Schema 均符合最高标准。
