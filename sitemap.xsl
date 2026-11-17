<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
      <head>
        <title>XML 网站地图 (Sitemap) | 机场PRO</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
            background: #f8fafc;
            color: #0f172a;
            font-size: 14px;
            line-height: 1.6;
            padding: 2.5rem 1.5rem;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #ffffff;
            padding: 2.5rem 2rem;
            border-bottom: 3px solid #2563eb;
          }
          .header-badge {
            display: inline-block;
            background: rgba(37, 99, 235, 0.3);
            color: #93c5fd;
            border: 1px solid rgba(147, 197, 253, 0.3);
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
          }
          .header h1 {
            font-size: 1.85rem;
            font-weight: 700;
            letter-spacing: -0.025em;
            margin-bottom: 0.5rem;
          }
          .header p {
            color: #94a3b8;
            font-size: 0.95rem;
            max-width: 800px;
          }
          .header a {
            color: #38bdf8;
            text-decoration: none;
          }
          .header a:hover {
            text-decoration: underline;
          }
          .stats-bar {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            padding: 1.25rem 2rem;
            background: #f1f5f9;
            border-bottom: 1px solid #e2e8f0;
          }
          .stat-item {
            background: #ffffff;
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
          }
          .stat-label {
            font-size: 0.75rem;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          .stat-value {
            font-size: 1.25rem;
            font-weight: 700;
            color: #0f172a;
          }
          .table-wrapper {
            padding: 1.5rem 2rem;
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 0.88rem;
          }
          th {
            background: #f8fafc;
            color: #475569;
            font-weight: 600;
            padding: 0.85rem 1rem;
            border-bottom: 2px solid #e2e8f0;
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 0.85rem 1rem;
            border-bottom: 1px solid #f1f5f9;
            color: #334155;
          }
          tr:hover td {
            background: #f8fafc;
          }
          .url-link {
            color: #2563eb;
            text-decoration: none;
            word-break: break-all;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.85rem;
          }
          .url-link:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }
          .badge-priority {
            display: inline-block;
            padding: 0.2rem 0.55rem;
            border-radius: 6px;
            font-size: 0.78rem;
            font-weight: 700;
            background: #e0f2fe;
            color: #0369a1;
          }
          .badge-changefreq {
            display: inline-block;
            padding: 0.2rem 0.55rem;
            border-radius: 6px;
            font-size: 0.78rem;
            background: #f1f5f9;
            color: #475569;
            font-weight: 500;
          }
          .footer {
            padding: 1.5rem 2rem;
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            color: #64748b;
            font-size: 0.85rem;
          }
          @media (max-width: 768px) {
            body {
              padding: 1rem 0.5rem;
            }
            .header, .table-wrapper, .stats-bar, .footer {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .stats-bar {
              grid-template-columns: 1fr 1fr;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-badge">XML SITEMAP 网站地图</div>
            <h1>机场PRO 搜索引擎站点地图</h1>
            <p>
              此 XML 网站地图由 <a href="https://jichangpro.top/">机场PRO (jichangpro.top)</a> 静态站点生成引擎全自动生成，严格遵从 sitemaps.org 0.9 协议标准，专供 Bing、Google 等全球搜索引擎进行高质量抓取、索引与收录。
            </p>
          </div>

          <div class="stats-bar">
            <div class="stat-item">
              <div class="stat-label">索引 URL 总数</div>
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> 个页面</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">核心主域名</div>
              <div class="stat-value" style="font-size:1.05rem;color:#2563eb">jichangpro.top</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">数据最后更新</div>
              <div class="stat-value"><xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></div>
            </div>
            <div class="stat-item">
              <div class="stat-label">协议技术标准</div>
              <div class="stat-value" style="font-size:1.05rem">sitemaps.org 0.9</div>
            </div>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 60px; text-align: center;">#</th>
                  <th>页面完整 URL (可直接点击访问)</th>
                  <th style="width: 120px; text-align: center;">抓取优先级</th>
                  <th style="width: 120px; text-align: center;">更新频率</th>
                  <th style="width: 130px; text-align: center;">最后核验更新</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td style="text-align: center; color: #94a3b8; font-weight: 600;">
                      <xsl:value-of select="position()"/>
                    </td>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}" class="url-link">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="text-align: center;">
                      <span class="badge-priority">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td style="text-align: center;">
                      <span class="badge-changefreq">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </span>
                    </td>
                    <td style="text-align: center; color: #64748b; font-size: 0.82rem;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>© 2026 机场PRO (jichangpro.top) · 2026专业中文机场推荐与梯子节点测评指南</p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>