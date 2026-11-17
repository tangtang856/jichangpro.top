# 机场PRO (jichangpro.top) 极速部署指南

本项目采用 **纯静态 HTML + 原生 CSS + 轻量 JavaScript** 架构，无需任何外部运行容器或数据库，具备极致的秒开速度与极高的容灾能力。

全站资源与内链**100% 采用严格相对路径**，支持以下多种部署与使用方式：

---

## 方案一：Cloudflare Pages 部署 (强烈推荐，全球加速 + 免费 HTTPS)

Cloudflare Pages 是托管此类静态资讯网站的最佳选择，全球 Anycast CDN 节点覆盖，国内访问极速且抗攻击能力卓越。

### 部署步骤：
1. **登录 Cloudflare**：
   - 访问 [Cloudflare 仪表盘](https://dash.cloudflare.com/) 并登录。
2. **创建 Pages 项目**：
   - 进入 **“Compute (Workers & Pages)”** -> 点击 **“Create application”** -> 选择 **“Pages”** -> 点击 **“Connect to Git”**。
3. **关联 GitHub 仓库**：
   - 授权并选择仓库：`tangtang856/jichangpro.top`。
4. **构建设置 (Build configuration)**：
   - **Framework preset (框架预设)**：选择 `None` (无框架)。
   - **Build command (构建命令)**：`npm run build`（或者留空，因为仓库中已预先生成好全部 HTML）。
   - **Build output directory (构建输出目录)**：填写 `.`（即当前根目录）或留空。
5. **点击 “Save and Deploy (保存并部署)”**：
   - 等待约 15 秒，系统即可完成全球自动化部署。
6. **绑定自定义域名**：
   - 在项目详情页点击 **“Custom domains (自定义域)”**。
   - 输入您的正式域名：`jichangpro.top`。
   - 按照 Cloudflare 提示将域名 Nameservers 修改为 Cloudflare 分配的地址，SSL/TLS 证书将自动签发并永久免费续期。

---

## 方案二：GitHub Pages 部署

1. 打开 GitHub 仓库设置：`https://github.com/tangtang856/jichangpro.top/settings/pages`
2. 在 **“Build and deployment”** 下：
   - **Source**：选择 `Deploy from a branch`。
   - **Branch**：选择 `main` 分支，目录选择 `/ (root)`。
   - 点击 **“Save”**。
3. 在下方 **“Custom domain”** 处输入 `jichangpro.top`，保存后勾选 **“Enforce HTTPS”**。

---

## 方案三：传统 Nginx / Apache / 宝塔面板服务器部署

若您有自己的 VPS 云服务器：
1. 将本项目目录下的所有文件上传至网站根目录（如 `/www/wwwroot/jichangpro.top/`）。
2. Nginx 配置示例：
   ```nginx
   server {
       listen 80;
       listen 443 ssl http2;
       server_name jichangpro.top www.jichangpro.top;

       root /www/wwwroot/jichangpro.top;
       index index.html;

       # 开启 Gzip 极速压缩
       gzip on;
       gzip_min_length 1k;
       gzip_types text/plain text/css application/javascript application/json image/svg+xml;

       # 静态资源长期缓存
       location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff2)$ {
           expires 30d;
           add_header Cache-Control "public, no-transform";
       }

       # 自定义 404
       error_page 404 /404.html;
   }
   ```

---

## 方案四：本地直接双击浏览 (file:// 协议)

得益于对相对路径的严格校验：
- 您无需启动任何本地开发服务器或 HTTP 服务。
- 直接在本地文件管理器中双击打开 `index.html` 或任意子目录下的 `index.html`。
- CSS 样式、JS 逻辑、比较工具以及所有内部页面跳转均能 **100% 完美加载与点击流转**。
