/**
 * 机场PRO - 30 篇全平台科学上网与客户端配置深度教程数据源
 * 涵盖：Windows / Android / iOS / macOS / 软路由 / 开发者跨平台工具
 * 严格执行：SEO 规范、专业图文逻辑、步骤详解、故障排除
 */

const GUIDES_DATA = [
  // ==========================================
  // 一、Windows 桌面生态 (6篇)
  // ==========================================
  {
    slug: 'windows',
    category: 'Windows',
    os: 'Windows 10 / 11',
    client: 'Clash Verge Rev',
    title: 'Windows 电脑翻墙配置指南 - Clash Verge Rev 客户端安装与订阅教程 | 机场PRO',
    h1: 'Windows 电脑翻墙教程：Clash Verge Rev 安装、配置与使用全攻略',
    desc: '面向 Windows 10/11 用户的 Clash Verge Rev 客户端保姆级安装使用指南。详解订阅导入、分流规则设置、TUN虚拟网卡及常见网络故障排查。',
    keywords: 'Windows翻墙, Clash Verge Rev, Windows梯子教程, Clash客户端, 电脑翻墙, 机场订阅导入, 梯子推荐',
    date: '2026-03-15',
    readTime: '6 分钟',
    summary: 'Clash Verge Rev 是目前 Windows 平台维护最活跃、界面最现代的 Clash 内核开源客户端，支持 Meta/Mihomo 内核与高级分流规则。',
    steps: [
      {
        title: '下载并安装客户端',
        content: '从官方开源仓库或机场后台下载最新版 Clash Verge Rev 安装包（通常推荐 <code>.msi</code> 或 <code>-x64-setup.exe</code>）。安装时建议选择默认路径。若遇 Windows Defender 拦截，点击“更多信息 - 仍要运行”即可。'
      },
      {
        title: '获取并导入机场订阅链接',
        content: '登录您选购的机场后台（如微风网络或暮光网络），复制“Clash 订阅链接”。打开 Clash Verge Rev，进入左侧“订阅 (Profiles)”页面，在顶部地址栏粘贴订阅链接并点击“导入 (Import)”，等待配置成功拉取。'
      },
      {
        title: '选择代理模式与优选节点',
        content: '在左侧菜单进入“代理 (Proxies)”，建议将分流模式设为<strong>规则 (Rule)</strong>。展开节点组列表，点击“延迟测试”测速图标，挑选延迟较低且绿色的节点（例如香港专线或日本优化节点）。'
      },
      {
        title: '开启系统代理与自启动',
        content: '在主界面或系统托盘图标右键菜单中，开启<strong>系统代理 (System Proxy)</strong>。在“设置 (Settings)”中建议勾选“开机自启动”，确保每次电脑开机自动恢复安全加速环境。'
      },
      {
        title: '高级技巧：开启 TUN 虚拟网卡模式',
        content: '若需要为 Steam 联机加速、终端命令行或不支持系统代理的桌面应用提供全局中继，可在设置中安装 Service Mode 服务模式并开启 TUN 模式，实现全系统底层流量接管。'
      }
    ],
    faqs: [
      { q: '导入订阅时提示 Network Error 或下载超时？', a: '请检查本地宽带是否通畅，尝试使用手机热点重试；或在订阅链接中勾选“允许不安全证书”，若依然不行可联系机场客服更换订阅域名。' },
      { q: '开启代理后国内网站（百度/淘宝）加载变慢？', a: '请检查是否将代理模式误选为“全局 (Global)”。切回“规则 (Rule)”模式即可让国内直连流量不经过海外节点。' }
    ]
  },
  {
    slug: 'windows-v2rayn',
    category: 'Windows',
    os: 'Windows 7 / 10 / 11',
    client: 'v2rayN (Xray)',
    title: 'v2rayN 电脑客户端配置教程 - 支持 VLESS/Trojan/Hysteria2 节点导入 | 机场PRO',
    h1: 'v2rayN 电脑客户端新手使用指南：Xray 内核与多协议聚合配置',
    desc: '系统详解 Windows 平台经典代理客户端 v2rayN 的安装、Xray 内核更新、节点批量导入、路由规则分流与开机自启动设置。',
    keywords: 'v2rayN教程, v2rayN配置, Xray客户端, VLESS节点, Trojan翻墙, Windows梯子, 机场推荐',
    date: '2026-03-14',
    readTime: '7 分钟',
    summary: 'v2rayN 是 Windows 平台上资历最深、协议支持最全的轻量级客户端，内存占用极低，支持 Shadowsocks、VMess、VLESS 及最新协议。',
    steps: [
      {
        title: '解压并安装运行环境',
        content: 'v2rayN 为绿色免安装软件，解压到非中文路径文件夹即可。注意运行前需确保系统已安装 Microsoft .NET Desktop Runtime 6.0 或更高版本。'
      },
      {
        title: '添加机场订阅',
        content: '打开主界面，点击顶部菜单“订阅分组 - 订阅分组设置”，点击“添加”。在“可选地址 (url)”栏粘贴机场提供的 v2ray 订阅链接，点击确定。'
      },
      {
        title: '更新订阅与测试延迟',
        content: '在顶部点击“订阅分组 - 更新全部订阅（不通过代理）”，稍等几秒即可看到节点列表。按快捷键 <code>Ctrl + A</code> 全选节点，按 <code>Ctrl + R</code> 进行批量真连接延迟测试。'
      },
      {
        title: '激活节点并设置路由分流',
        content: '在测试成功的节点上右键，选择“设为活动服务器”（或按回车键）。在底部状态栏将“系统代理”设置为“自动配置系统代理”，路由模式选择“绕过大陆 (绕过大陆局域网及大陆地址)”。'
      }
    ],
    faqs: [
      { q: '双击 v2rayN.exe 无法启动或闪退？', a: '通常是因为未安装微软 .NET 运行时环境。前往微软官网下载安装 .NET 6.0/8.0 Desktop Runtime 即可解决。' },
      { q: '测试节点延迟显示 -1 或不可用？', a: '请检查系统时间是否与北京时间完全同步（误差不得超过 60 秒，否则 VMess/VLESS 协议的时间校验会直接丢弃数据包）。' }
    ]
  },
  {
    slug: 'windows-singbox',
    category: 'Windows',
    os: 'Windows 10 / 11',
    client: 'Sing-box GUI',
    title: 'Sing-box Windows 客户端配置教程 - 新一代通用通用网络代理核心上手 | 机场PRO',
    h1: 'Sing-box Windows 图形客户端配置指南：极速核心与规则集详解',
    desc: '全面解析新一代开源通用代理平台 Sing-box 在 Windows 上的安装配置、配置导入、分流规则组设置与 TUN 虚拟网卡配置。',
    keywords: 'Sing-box教程, Sing-box Windows, 通用代理核心, 新一代翻墙内核, 规则分流, 机场节点, 梯子推荐',
    date: '2026-03-12',
    readTime: '6 分钟',
    summary: 'Sing-box 是近年来异军突起的通用网络核心，以超轻量、极低内存占用与对现代协议的原生高吞吐支持著称。',
    steps: [
      {
        title: '下载 Sing-box 图形版客户端',
        content: '前往 GitHub 官方 Release 页面下载适用于 Windows x64 架构的 Sing-box GUI 安装程序进行安装。'
      },
      {
        title: '导入机场专用 Sing-box 配置',
        content: '在现代机场用户中心复制“Sing-box 一键导入”或订阅 URL，在客户端“Profiles”界面点击添加并粘贴 URL 进行下载。'
      },
      {
        title: '选择出站规则与启动服务',
        content: '在 Groups 界面挑选合适的落地节点，并在主控制台开启 System Proxy，即可享受由 Go 语言极致调优带来的丝滑低延迟网络体验。'
      }
    ],
    faqs: [
      { q: 'Sing-box 与 Clash 相比有何核心优势？', a: 'Sing-box 资源消耗更小，内存占用通常仅为同等规模 Clash 的 1/3，且对新协议（如 Reality、TUIC、Hysteria2）的支持更为敏捷和原生。' }
    ]
  },
  {
    slug: 'windows-clash-nyanpasu',
    category: 'Windows',
    os: 'Windows 10 / 11',
    client: 'Clash Nyanpasu',
    title: 'Clash Nyanpasu 客户端配置与使用教程 - 基于 Rust+Tauri 极简美学翻墙 | 机场PRO',
    h1: 'Clash Nyanpasu Windows 快速上手指南：现代极简与极低内存占用',
    desc: '基于 Tauri 与 Rust 构建的下一代跨平台 Clash 客户端 Clash Nyanpasu 深度配置教学，涵盖订阅管理、内核切换与规则策略定制。',
    keywords: 'Clash Nyanpasu, Tauri客户端, 轻量Clash, Windows翻墙, 机场订阅导入, 梯子推荐',
    date: '2026-03-10',
    readTime: '5 分钟',
    summary: '告别庞大的 Electron 框架，Clash Nyanpasu 采用 Rust 与 Tauri 编写，启动极速且待机内存仅需几十兆。',
    steps: [
      {
        title: '安装 Clash Nyanpasu',
        content: '下载安装包并完成安装，软件自动内置最新的 Mihomo (Clash.Meta) 内核。'
      },
      {
        title: '订阅链接载入与节点选择',
        content: '在“配置 (Profiles)”模块中输入机场订阅链接并拉取，在“代理”页面选用低延迟的亚太专线节点。'
      },
      {
        title: '开启系统代理与开机自启',
        content: '点击左下角系统代理滑块即可开始使用。在“设置”中建议开启“开机自启动”和“静默启动”。'
      }
    ],
    faqs: [
      { q: '为什么推荐从旧版 Clash for Windows 迁移到 Clash Nyanpasu？', a: '旧版 CFW 已停止维护两年以上存在已知内核漏洞，而 Clash Nyanpasu 拥有活跃的开源社区支持，内核实时更新且内存占用减半。' }
    ]
  },
  {
    slug: 'windows-tun-mode',
    category: 'Windows',
    os: 'Windows 10 / 11',
    client: 'TUN 虚拟网卡',
    title: 'Windows 开启 TUN 虚拟网卡模式教程 - 游戏联机与命令行全局代理 | 机场PRO',
    h1: 'Windows TUN 模式深度配置教学：解决游戏加速与命令行不走代理痛点',
    desc: '许多桌面软件、Git 命令行与外服游戏无法识别常规 HTTP 代理。本文详解如何在 Windows 上启用 TUN 虚拟网卡接管底层网络。',
    keywords: 'TUN模式, 虚拟网卡代理, 游戏联机加速, 命令行代理, 全局翻墙, Clash TUN, 梯子推荐',
    date: '2026-03-08',
    readTime: '6 分钟',
    summary: '常规系统代理仅对支持 HTTP/Socks5 协议的应用有效，TUN 虚拟网卡技术能够在网络层创建虚拟网卡，强制接管所有应用的 TCP/UDP 流量。',
    steps: [
      {
        title: '安装 Service Mode（服务模式）',
        content: '以管理员身份运行客户端（如 Clash Verge Rev），进入设置页面找到“服务模式 (Service Mode)”，点击“安装”。'
      },
      {
        title: '开启 TUN 模式开关',
        content: '安装成功后，打开“TUN 模式”开关。此时系统网络适配器中会新增一张名为 <code>Mihomo</code> 或 <code>wintun</code> 的虚拟网卡。'
      },
      {
        title: '验证接管效果',
        content: '打开 cmd 或 PowerShell，输入 <code>curl -I https://www.google.com</code>，若直接返回 HTTP 200/301 即代表命令行流量已成功走代理。'
      }
    ],
    faqs: [
      { q: '开启 TUN 模式后电脑无法上网？', a: '请检查是否同时开启了其他 VPN 软件（如校园网客户端或杀毒软件防火墙），产生网卡路由冲突；关闭其他网络安全工具即可恢复。' }
    ]
  },
  {
    slug: 'windows-troubleshooting',
    category: 'Windows',
    os: 'Windows 10 / 11',
    client: '故障排查',
    title: 'Windows 电脑无法翻墙排查指南 - 系统代理自动关闭与节点超时全解决 | 机场PRO',
    h1: 'Windows 科学上网常见故障排查手册：节点连不上与代理异常修复',
    desc: 'Windows 翻墙突然失灵？本文针对系统代理自动关闭、订阅拉取失败、本地回环端口占用及 DNS 污染提供一揽子解决方案。',
    keywords: 'Windows翻墙排错, 代理连不上, 节点超时, 系统代理自动关闭, 端口被占用, 梯子坏了怎么办',
    date: '2026-03-05',
    readTime: '8 分钟',
    summary: '遇到翻墙异常先别慌，90% 的 Windows 网络问题都是由于端口冲突、注册表代理残留或系统时间未对齐引起的。',
    steps: [
      {
        title: '检查一：系统时间同步（最容易被忽视）',
        content: '进入 Windows 设置 - 时间和语言 - 日期和时间，点击“立即同步”。现代加密协议对时间误差极度敏感，误差超过 60 秒将导致所有节点握手失败。'
      },
      {
        title: '检查二：检查注册表代理残留',
        content: '在 Windows 设置 - 网络和 Internet - 代理中，查看“手动设置代理”是否开启。若客户端异常退出，有时会遗留无效的 127.0.0.1 端口，手动关闭即可恢复国内网络。'
      },
      {
        title: '检查三：端口占用排查',
        content: '默认 7890 端口可能被其他后台程序占用。在客户端设置中将 Mixed Port 改为 7892 或 10808 等不常用端口再试。'
      }
    ],
    faqs: [
      { q: '关闭代理软件后电脑打不开任何网页？', a: '这是典型的“代理未清理”现象。打开 Windows 代理设置，将“使用代理服务器”手动关闭即可立即恢复上网。' }
    ]
  },

  // ==========================================
  // 二、Android 安卓平台生态 (6篇)
  // ==========================================
  {
    slug: 'android',
    category: 'Android',
    os: 'Android 10 - 15',
    client: 'Clash Meta for Android',
    title: '安卓手机翻墙教程 - Clash Meta for Android 安装、订阅导入与配置 | 机场PRO',
    h1: '安卓手机科学上网指南：Clash Meta for Android 极简配置教程',
    desc: '详述 Android 手机上最好用的开源客户端 Clash Meta for Android (CMFA) 的安装包下载、机场配置一键导入、分流规则与应用分流设置。',
    keywords: '安卓翻墙, Clash安卓版, CMFA教程, 手机翻墙教程, 安卓梯子推荐, 机场订阅导入',
    date: '2026-03-15',
    readTime: '5 分钟',
    summary: 'Clash Meta for Android 完美兼容最新安卓系统与全面屏手势，内核支持最新协议，是目前安卓端最稳定的选择。',
    steps: [
      {
        title: '下载并安装 APK',
        content: '从官方 GitHub Releases 下载适用于通用 ARM64 架构的 apk 安装文件（如 <code>cmfa-universal-release.apk</code>），在手机上允许“从未知来源安装”。'
      },
      {
        title: '一键导入机场订阅',
        content: '在手机浏览器登录机场后台，点击“一键导入 Clash 订阅”，系统会自动唤起 CMFA 客户端并下载配置；也可在“配置 (Configuration)”页面手动粘贴 URL 拉取。'
      },
      {
        title: '点选节点并开启代理',
        content: '进入“代理 (Proxy)”页面挑选测速表现良好的节点。返回主页，点击最上方的“已停止”按钮，在弹出的系统 VPN 连接请求中点击“确定”。'
      }
    ],
    faqs: [
      { q: '手机开启后过几分钟自动断开？', a: '这是安卓系统杀后台机制所致。请进入手机“电池优化”设置，将该客户端加入“不限制后台耗电”白名单并锁定后台应用卡片。' }
    ]
  },
  {
    slug: 'android-v2rayng',
    category: 'Android',
    os: 'Android',
    client: 'v2rayNG',
    title: 'v2rayNG 安卓使用教程 - 经典轻量 Xray 客户端安装与节点导入配置 | 机场PRO',
    h1: 'v2rayNG 安卓客户端保姆级教程：单节点与订阅批量管理',
    desc: '面向安卓用户的经典翻墙利器 v2rayNG 配置教程。支持扫描二维码导入、订阅链接拉取、分应用代理及国内域名绕过。',
    keywords: 'v2rayNG, 安卓v2ray, 手机v2ray, v2rayNG配置, 节点导入, 手机梯子推荐',
    date: '2026-03-14',
    readTime: '5 分钟',
    summary: 'v2rayNG 操作直观、体积小巧，不仅支持常规批量订阅，还支持直接扫描二维码或粘贴剪贴板单个节点快速测试。',
    steps: [
      {
        title: '下载安装 v2rayNG',
        content: '从 GitHub 官方仓库下载安装最新版本，打开后授予必要的通知权限。'
      },
      {
        title: '订阅设置与分组更新',
        content: '点击左上角侧边栏菜单选择“订阅分组设置”，点击右上角“+”号添加机场订阅地址。保存后返回主列表，点击右上角三点菜单选择“更新订阅”。'
      },
      {
        title: '节点测速与连接',
        content: '在三点菜单中点击“测试全部配置 Real ping”，挑选延迟低的节点点击选中，然后点击右下角的“V”字圆形连接按钮即可。'
      }
    ],
    faqs: [
      { q: '为什么测速显示延迟很高或超时？', a: '请在侧边栏“设置”中确认“路由模式”是否设为“绕过大陆”；另外检查手机系统时间是否开启了网络自动对齐。' }
    ]
  },
  {
    slug: 'android-singbox',
    category: 'Android',
    os: 'Android',
    client: 'Sing-box for Android',
    title: 'Sing-box 安卓版配置指南 - 体验极低耗电与新一代通用代理核心 | 机场PRO',
    h1: 'Sing-box 安卓手机版配置教程：轻量省电与新一代网络体验',
    desc: '全面介绍 Sing-box 官方 Android 客户端的配置导入、出站策略组切换以及对 Hysteria2、TUIC、Reality 等先进协议的支持。',
    keywords: 'Sing-box安卓, Sing-box手机版, 安卓省电梯子, 新一代代理核心, 机场推荐, 梯子节点',
    date: '2026-03-12',
    readTime: '6 分钟',
    summary: '相比传统客户端，Sing-box 在移动设备上的后台休眠优化更为卓越，全天候挂机电量消耗极低。',
    steps: [
      {
        title: '获取安装包与安装',
        content: '可从 Google Play 商店或 GitHub 官方 Releases 下载最新的 Sing-box APK 文件进行安装。'
      },
      {
        title: '导入配置文件',
        content: '在 Profiles 菜单点击 New Profile，通过 Remote URL 模式粘贴机场专用订阅链接并下载保存。'
      },
      {
        title: '启动 VPN 隧道',
        content: '回到 Dashboard 主界面，点击开关启动 VPN 服务，在 Groups 界面自选低延迟线路畅享极速网络。'
      }
    ],
    faqs: [
      { q: '普通机场的 Clash 订阅能在 Sing-box 上直接用吗？', a: '大部分现代机场已经直接提供专属 Sing-box 订阅；若机场暂未适配，可使用机场提供的订阅转换工具快速生成。' }
    ]
  },
  {
    slug: 'android-surfboard',
    category: 'Android',
    os: 'Android',
    client: 'Surfboard (冲浪板)',
    title: 'Surfboard 冲浪板安卓配置教程 - 媲美 Surge 的美观规则分流工具 | 机场PRO',
    h1: 'Surfboard 安卓客户端使用指南：Surge 兼容语法与精细化分流',
    desc: '介绍 Android 平台高颜值客户端 Surfboard（冲浪板）。兼容 Surge 配置语法，具备实时网速曲线、精美分流面板与极低系统资源占用。',
    keywords: 'Surfboard教程, 冲浪板客户端, 安卓Surge, 规则分流, 手机翻墙, 机场节点推荐',
    date: '2026-03-10',
    readTime: '5 分钟',
    summary: '界面优雅且深度适配 Material You 设计风格，是追求高质感视觉交互与精准分流控制用户的首选。',
    steps: [
      {
        title: '下载 Surfboard',
        content: '可在 Google Play 应用商店搜索 Surfboard 安装，或通过官方 GitHub/Telegram 频道获取安装文件。'
      },
      {
        title: '配置文件导入',
        content: '在 Profile 标签页点击右下角加号，选择“Download from web”，粘贴机场的 Surge 格式或托管订阅 URL。'
      },
      {
        title: '开启代理与监控',
        content: '在 Switch 标签页选择节点，点击右下角播放键启动 VPN。在 Tools 标签页可实时查看当前分流规则与请求日志。'
      }
    ],
    faqs: [
      { q: 'Surfboard 支持一键测速吗？', a: '支持。在 Proxy 节点列表页面长按或点击右上角测速图标即可对全部节点进行并发可用性测速。' }
    ]
  },
  {
    slug: 'android-battery-optimization',
    category: 'Android',
    os: 'Android (MIUI/ColorOS/OriginOS/HarmonyOS)',
    client: '系统优化',
    title: '安卓手机防杀后台保活设置 - 小米/华为/OPPO/vivo 代理常驻指南 | 机场PRO',
    h1: '安卓翻墙防断连：主流国产品牌手机杀后台与省电策略设置全解',
    desc: '手机锁屏后梯子频繁断开？一文彻底搞定小米 HyperOS/MIUI、华为 HarmonyOS、vivo OriginOS 及 OPPO ColorOS 的后台保活白名单设置。',
    keywords: '安卓防杀后台, 手机翻墙断线, 梯子后台保活, MIUI防杀后台, 鸿蒙系统翻墙, 手机梯子设置',
    date: '2026-03-08',
    readTime: '6 分钟',
    summary: '国产安卓系统严格的省电与进程清理机制是翻墙断线的头号元凶，只需三步即可实现 24 小时稳定常驻。',
    steps: [
      {
        title: '步骤一：锁定多任务后台卡片',
        content: '进入多任务界面，长按客户端应用卡片，点击“小锁头”图标进行常驻锁定，防止一键清理时被误杀。'
      },
      {
        title: '步骤二：关闭电池优化与限制',
        content: '进入系统“设置 - 应用管理”，找到代理客户端，点击“省电策略 / 耗电管理”，将选项从“智能限制”改为“无限制 / 允许高耗电”。'
      },
      {
        title: '步骤三：允许自启动与关联启动',
        content: '在应用权限设置中，开启“允许自启动”和“后台运行”，确保系统休眠唤醒后能够自动恢复网络中继。'
      }
    ],
    faqs: [
      { q: '设置无限制后手机会严重耗电吗？', a: '现代内核（如 Meta/Sing-box）在无数据传输时处于极低功耗的休眠监听状态，全天挂机耗电通常低于 2%~3%，几乎无感。' }
    ]
  },
  {
    slug: 'android-app-split-tunneling',
    category: 'Android',
    os: 'Android',
    client: '应用分流',
    title: '安卓分应用代理设置教程 - 国内微信淘宝直连与海外App分流实战 | 机场PRO',
    h1: '安卓分应用代理配置：海外应用走梯子、国内App直连省流指南',
    desc: '教您如何在安卓手机上实现最彻底的流量隔离：银行、网购、微信等国内应用完全绕过梯子，YouTube、Telegram、Twitter 等一键走海外节点。',
    keywords: '分应用代理, 应用分流, 微信直连, 梯子省流量, 手机科学上网技巧, 机场节点',
    date: '2026-03-05',
    readTime: '5 分钟',
    summary: '除了域名分流规则外，在客户端直接开启“分应用代理 (Per-App Proxy)”是解决国内银行金融 App 报错与节省翻墙流量的最强手段。',
    steps: [
      {
        title: '进入客户端分应用代理菜单',
        content: '以 Clash Meta for Android 为例，点击“设置 (Settings) - 网络 (Network) - 分应用代理 (Access Control)”。'
      },
      {
        title: '选择模式（白名单或黑名单）',
        content: '推荐选择“白名单模式 (Allow Selected)”，即只有您勾选的应用才走代理，未勾选的应用 100% 走本地宽带直连。'
      },
      {
        title: '勾选需要海外网络的应用',
        content: '在应用列表中仅勾选 Chrome、YouTube、ChatGPT、Telegram、Twitter、Netflix 等海外应用即可。'
      }
    ],
    faqs: [
      { q: '分应用代理会影响浏览器下载速度吗？', a: '不会。只要浏览器被勾选，海外文件下载仍能跑满节点带宽；而国内应用则完全不受任何海外延迟影响。' }
    ]
  },

  // ==========================================
  // 三、iOS 苹果手机与 iPad 生态 (6篇)
  // ==========================================
  {
    slug: 'ios',
    category: 'iOS',
    os: 'iOS 15 - 18 / iPadOS',
    client: 'Shadowrocket (小火箭)',
    title: 'iOS 苹果手机翻墙教程 - Shadowrocket 小火箭安装、节点导入与规则配置 | 机场PRO',
    h1: 'iOS 苹果手机科学上网教程：Shadowrocket 小火箭保姆级入门指南',
    desc: '针对 iPhone 与 iPad 用户的 Shadowrocket（小火箭）完整使用教程。详解海外 Apple ID 获取、节点扫码与订阅导入、分流规则配置及常见问题。',
    keywords: 'iOS翻墙, Shadowrocket教程, 小火箭教程, 苹果手机翻墙, iPhone梯子, 机场订阅导入, 梯子推荐',
    date: '2026-03-15',
    readTime: '6 分钟',
    summary: 'Shadowrocket（俗称小火箭）是 iOS 平台上性价比最高、普及度最广的科学上网客户端，操作直观且生态丰富。',
    steps: [
      {
        title: '获取海外 Apple ID 并下载小火箭',
        content: '由于国内 App Store 下架了网络代理工具，需要先在手机 App Store 登录美区或日区 Apple ID，搜索并购买下载 <code>Shadowrocket</code>。'
      },
      {
        title: '一键导入或扫描机场订阅',
        content: '登录机场后台，点击“一键导入 Shadowrocket”，Safari 浏览器会提示打开小火箭并自动下载全部节点；也可点击主界面右上角“+”号选择“Subscribe”，粘贴 URL 手动拉取。'
      },
      {
        title: '设置全局路由模式与开启连接',
        content: '在小火箭主界面将“全局路由”从“配置”保持为<strong>“配置 (Config)”</strong>（代表智能分流）。选中一个低延迟专线节点，打开顶部的连接总开关，允许添加 VPN 凭证即可。'
      }
    ],
    faqs: [
      { q: '第一次连接时提示“添加 VPN 配置”弹出框？', a: '点击“允许”，并输入您的 iPhone 锁屏密码或通过 Face ID 验证，系统会自动创建受信任的网络通道。' },
      { q: '为什么在国区 App Store 搜到的小火箭都是山寨应用？', a: '国区均为仿冒或山寨收费欺诈 App。正版开发者为 Pan Gu，图标为灰白色背景火箭，售价通常为 2.99 美元。' }
    ]
  },
  {
    slug: 'ios-loon',
    category: 'iOS',
    os: 'iOS',
    client: 'Loon',
    title: 'Loon iOS 进阶配置指南 - 现代界面、规则分流与插件扩展入门 | 机场PRO',
    h1: 'Loon 客户端进阶教程：全协议支持、可视化分流与插件生态实战',
    desc: '深度解析 iOS 端高口碑代理工具 Loon 的安装配置、订阅策略组管理、自动化脚本插件安装与去广告分流规则配置。',
    keywords: 'Loon教程, Loon配置, iOS翻墙利器, 规则分流, 节点策略组, 苹果梯子推荐',
    date: '2026-03-14',
    readTime: '7 分钟',
    summary: 'Loon 兼顾了小白的易用性与发烧友的扩展性，UI 设计精致，并拥有极为活跃的插件（Plugin）与重写社区。',
    steps: [
      {
        title: '安装 Loon 并添加订阅',
        content: '美区 App Store 购买安装 Loon，进入“配置 - 订阅”点击右上角添加，填入机场订阅链接并启用。'
      },
      {
        title: '策略组与节点排序',
        content: '在策略组界面可根据需求将流媒体、海外社交、AI 节点分别绑定到不同的机场节点集合上。'
      },
      {
        title: '启用插件与启动代理',
        content: '可按需一键安装去开屏广告、流媒体解锁检测等社区插件，点击主页正中央的开关连接即可。'
      }
    ],
    faqs: [
      { q: 'Loon 能与 Mac 端同步配置吗？', a: '支持。Loon 拥有原生 macOS 独立版本，通过 iCloud Drive 可实现手机与电脑配置无缝秒同步。' }
    ]
  },
  {
    slug: 'ios-quantumult-x',
    category: 'iOS',
    os: 'iOS',
    client: 'Quantumult X (圈X)',
    title: 'Quantumult X (圈X) 从零开始配置教程 - 策略组分流与重写规则详解 | 机场PRO',
    h1: 'Quantumult X 快速上手指南：苹果手机发烧级策略组分流实战',
    desc: '手把手教您玩转 Quantumult X（圈X）。涵盖分资源订阅导入、分流规则集配置、MitM 证书安装与常见运行报错解决。',
    keywords: 'Quantumult X, 圈X教程, 圈X配置, iOS高级代理, MitM证书, 机场节点',
    date: '2026-03-12',
    readTime: '8 分钟',
    summary: '圈X以极其强大的策略组控制、底层网络抓包分析与 JavaScript 脚本重写功能著称，是追求极限操控感的玩家神器。',
    steps: [
      {
        title: '添加节点资源与更新',
        content: '打开圈X，点击右下角风车图标进入设置，在“节点 - 引用(资源)”中点击右上角添加机场订阅链接，滑动更新。'
      },
      {
        title: '配置分流规则集 (Filter)',
        content: '在“分流 - 引用”中添加常用国内直连与海外代理规则集，让网络请求精准路由。'
      },
      {
        title: '长按风车开启与节点切换',
        content: '长按右下角大风车展开悬浮面板选用节点，回到主页开启右上角连接滑块。'
      }
    ],
    faqs: [
      { q: '圈X提示“分流规则未匹配”？', a: '请在分流引用中确保启用了针对国内局域网和海外默认代理（Final）的兜底策略。' }
    ]
  },
  {
    slug: 'ios-surge',
    category: 'iOS',
    os: 'iOS',
    client: 'Surge iOS',
    title: 'Surge iOS 高级网络调试与代理配置 - 苹果顶级开发利器全解 | 机场PRO',
    h1: 'Surge iOS 终极配置手册：企业级网络控制、智能策略组与优化',
    desc: '针对苹果平台旗舰网络调试与代理利器 Surge iOS 的权威指南。详解托管配置、智能延迟探针策略、网络增强与跨设备接管。',
    keywords: 'Surge iOS, Surge教程, 苹果旗舰网络工具, 智能策略组, 优质专线机场, 梯子推荐',
    date: '2026-03-10',
    readTime: '8 分钟',
    summary: 'Surge 是 iOS 生态内性能、稳定性与调试能力的天花板，专为开发者与对网络品质有极致追求的专业人士设计。',
    steps: [
      {
        title: '导入托管配置',
        content: '在机场后台获取 Surge 托管配置链接，在 Surge 首页点击当前配置 - 从 URL 下载，填入并拉取。'
      },
      {
        title: '配置智能策略组 (Smart)',
        content: '利用 Surge 独有的智能策略功能，系统会自动向多个优质专线节点发送探测请求，毫秒级无感切换至最快线路。'
      },
      {
        title: '启动与实时流量监控',
        content: '点击 Start 启动 VPN 隧道，在 Activity 监控面板可实时追踪每个网络请求的耗时与具体归属策略。'
      }
    ],
    faqs: [
      { q: 'Surge 价格较贵，适合普通新手吗？', a: '普通看视频或查资料新手推荐 2.99 美元的小火箭（Shadowrocket）；如果有多设备协同或网络抓包需求，Surge 则物超所值。' }
    ]
  },
  {
    slug: 'ios-singbox',
    category: 'iOS',
    os: 'iOS',
    client: 'Sing-box iOS',
    title: 'Sing-box iOS 客户端安装与使用教程 - App Store 免费现代代理 | 机场PRO',
    h1: 'Sing-box iOS 快速入门指南：免费轻巧与多协议支持',
    desc: '介绍可在美区 App Store 免费获取的开源网络工具 Sing-box iOS 版。无需高昂购买成本，直接享受原生极速代理体验。',
    keywords: 'Sing-box iOS, 免费苹果翻墙, 苹果科学上网, Sing-box手机版, 机场推荐, 梯子推荐',
    date: '2026-03-08',
    readTime: '5 分钟',
    summary: 'Sing-box 官方 iOS 客户端不仅完全免费，而且完美适配 iOS 系统 VPN 框架，支持几乎所有新一代现代协议。',
    steps: [
      {
        title: '美区 App Store 安装 Sing-box',
        content: '登录美区 Apple ID，搜索“sing-box”直接免费下载安装。'
      },
      {
        title: '添加机场远程配置',
        content: '在 Profiles 界面点击新建，选择 Remote 远程模式，输入配置名称并粘贴机场提供的 Sing-box 订阅链接。'
      },
      {
        title: '启动并选用节点',
        content: '开启主开关，在 Dashboard 中挑选测试延迟正常的节点即可顺畅浏览海外网络。'
      }
    ],
    faqs: [
      { q: 'Sing-box iOS 版耗电量大吗？', a: '由于使用高效的 Go/NetworkExtension 混合架构，在同类软件中能耗控制处于顶尖水准。' }
    ]
  },
  {
    slug: 'ios-apple-id',
    category: 'iOS',
    os: 'iOS / Web',
    client: '海外 Apple ID',
    title: '2026最新美区 Apple ID 注册与充值教程 - 无需海外信用卡保姆级指南 | 机场PRO',
    h1: '美区 Apple ID 注册保姆级教程：无需海外信用卡，轻松下载小火箭',
    desc: '下载 Shadowrocket 或小火箭必备！详细图文拆解手把手教您自行注册美区 Apple ID、填写合规免税州地址与礼品卡充值全流程。',
    keywords: '美区Apple ID注册, 海外Apple ID, 下载小火箭, App Store换区, 苹果账号注册, 梯子下载教程',
    date: '2026-03-05',
    readTime: '7 分钟',
    summary: '掌握自己注册美区 Apple ID 的方法，彻底摆脱借用公共账号被锁机、账号失效或被恶意盗取隐私的巨大安全风险。',
    steps: [
      {
        title: '官网创建新 Apple ID',
        content: '在电脑或手机浏览器打开苹果官网（appleid.apple.com），点击创建账号，国家和地区选择“美国”，使用此前未注册过苹果服务的邮箱。'
      },
      {
        title: '输入验证码与邮箱验证',
        content: '依次输入收到的邮箱验证码和手机短信验证码完成初步注册。'
      },
      {
        title: 'App Store 登录与免税州账单地址填写',
        content: '打开手机 App Store（切勿在系统“设置”中登录 iCloud），登录新注册的美区账号。首次下载免费 App 会提示完善资料，付款方式务必选择“None”，账单地址建议填写特拉华州（Delaware）或俄勒冈州（Oregon）等美国免税州地址以享受免税。'
      },
      {
        title: '礼品卡充值与下载付费软件',
        content: '若需要购买 Shadowrocket（2.99 美元），可在正规电商平台或苹果官网购买对应金额的 App Store 电子礼品卡，在账户中点击“Redeem Gift Card”充值并完成购买。'
      }
    ],
    faqs: [
      { q: '付款方式没有“None”选项怎么办？', a: '请确保在 App Store 尝试下载一款免费应用时触发的激活流程，或者在网页端账号管理中心将账单地区正确设为美国。' }
    ]
  },

  // ==========================================
  // 四、macOS 苹果电脑生态 (6篇)
  // ==========================================
  {
    slug: 'macos',
    category: 'macOS',
    os: 'macOS 12 - 15 (Intel / Apple Silicon)',
    client: 'Clash Verge Rev for Mac',
    title: 'Mac 电脑翻墙教程 - Clash Verge Rev for Mac 安装与配置全攻略 | 机场PRO',
    h1: 'Mac 电脑科学上网指南：Clash Verge Rev for macOS 保姆级配置教程',
    desc: '专为 Mac 用户编写的 Clash Verge Rev 教程。全面适配 Apple Silicon (M1/M2/M3/M4) 及 Intel 架构，详解分流规则与系统网络设置。',
    keywords: 'Mac翻墙, Clash Mac版, Clash Verge Mac, 苹果电脑翻墙, Mac梯子教程, 机场推荐, 梯子推荐',
    date: '2026-03-15',
    readTime: '6 分钟',
    summary: 'Clash Verge Rev 对 macOS 系统的适配非常成熟，提供原生 Apple Silicon 架构支持，运行平稳且资源占用极低。',
    steps: [
      {
        title: '下载对应芯片架构的 DMG 安装包',
        content: '进入 GitHub Release 页面，M1/M2/M3 芯片用户请下载 <code>-aarch64.dmg</code>，老款 Intel 芯片用户请下载 <code>-x64.dmg</code>。打开 dmg 将应用拖入 Applications 目录。'
      },
      {
        title: '解决“已损坏”安全提示（如有）',
        content: '首次启动若提示未受信任，可在系统设置 - 隐私与安全中点击“仍要打开”；或在终端执行 <code>sudo xattr -r -d com.apple.quarantine /Applications/Clash\\ Verge.app</code>。'
      },
      {
        title: '导入订阅并开启系统代理',
        content: '在订阅界面粘贴机场链接并下载，在代理界面选择节点，点击开启主页的“系统代理 (System Proxy)”即可。'
      }
    ],
    faqs: [
      { q: 'Mac 经常弹出系统扩展权限申请？', a: '若开启了 TUN 虚拟网卡模式，系统需要创建网络扩展，输入 Mac 开机密码允许即可。' }
    ]
  },
  {
    slug: 'macos-surge',
    category: 'macOS',
    os: 'macOS',
    client: 'Surge for Mac',
    title: 'Surge for Mac 高级配置教程 - 增强模式、网关接管与网络调试 | 机场PRO',
    h1: 'Surge Mac 版深度配置：增强模式、局部网关与发烧级分流实战',
    desc: '深入挖掘 Surge for Mac 的终极潜能。教您利用 Enhanced Mode（增强模式）接管全系统网络，以及将其作为局域网网关为其他设备加速。',
    keywords: 'Surge Mac, Surge增强模式, Mac软路由, 网关加速, 苹果电脑代理, 机场节点',
    date: '2026-03-14',
    readTime: '8 分钟',
    summary: 'Surge Mac 不仅是优雅的桌面客户端，更是一台功能完善的局部软路由网关，支持为同局域网的 Apple TV 与游戏主机分流。',
    steps: [
      {
        title: '开启 Enhanced Mode（增强模式）',
        content: '安装驱动后开启 Enhanced Mode，它会自动建立虚拟网卡，强制接管所有不遵循常规系统代理设置的命令行与后端服务请求。'
      },
      {
        title: '配置托管订阅规则',
        content: '导入机场生成的 Surge 配置文件，配置好国内直连（DIRECT）与海外代理（PROXY）的智能策略。'
      },
      {
        title: '开启局域网共享与网关模式 (可选)',
        content: '在设置中勾选“Allow Wi-Fi Access”并开启网关功能，将同一局域网下的电视盒子的默认网关指向当前 Mac 的局域网 IP，实现全屋静默翻墙。'
      }
    ],
    faqs: [
      { q: '增强模式与系统代理可以同时开启吗？', a: '建议只开启增强模式即可，它在底层接管更彻底且能规避普通代理带来的浏览器 DNS 泄露风险。' }
    ]
  },
  {
    slug: 'macos-loon',
    category: 'macOS',
    os: 'macOS',
    client: 'Loon for Mac',
    title: 'Loon for Mac 跨平台配置同步与轻量分流指南 | 机场PRO',
    h1: 'Loon Mac 桌面端教程：一次购买双端通用与丝滑规则分流',
    desc: '在 Apple Silicon Mac 上运行原生 Loon 客户端。详解 iCloud 自动同步、节点策略组管理与轻量无感代理体验。',
    keywords: 'Loon Mac, 跨平台翻墙, 苹果电脑代理, 规则分流, 节点推荐, 梯子推荐',
    date: '2026-03-12',
    readTime: '6 分钟',
    summary: 'Loon 实现了 iOS 与 macOS 间的跨设备统一体验，无需重复购买即可在 Mac 电脑上享用相同的精美分流策略。',
    steps: [
      {
        title: 'App Store 下载 Loon',
        content: '在已购买过手机版 Loon 的美区 Apple ID 下，直接在 Mac App Store 下载安装应用。'
      },
      {
        title: '开启 iCloud 同步',
        content: '在设置中开启 iCloud 同步，手机上配置好的机场节点和策略组将自动同步到 Mac 端，省去重复配置烦恼。'
      },
      {
        title: '启动 VPN 权限授权',
        content: '点击启动，系统弹出网络扩展授权提示时点击“允许”，即可快速开启全系统加速。'
      }
    ],
    faqs: [
      { q: 'Loon Mac 版支持 Intel 老款机型吗？', a: '官方主要针对 M 芯片优化，老款 Intel 芯片推荐使用 Clash Verge Rev。' }
    ]
  },
  {
    slug: 'macos-singbox',
    category: 'macOS',
    os: 'macOS',
    client: 'Sing-box for macOS',
    title: 'Sing-box Mac 客户端安装与配置全攻略 - 极简开源通用核心 | 机场PRO',
    h1: 'Sing-box macOS 独立客户端使用教程：无臃肿界面的纯粹翻墙体验',
    desc: '介绍适用于 macOS 的 Sing-box 独立客户端。极低 CPU 与内存占用，原生支持 Hysteria2 及主流新协议。',
    keywords: 'Sing-box Mac, macOS翻墙, 开源代理核心, 苹果电脑梯子, 机场推荐',
    date: '2026-03-10',
    readTime: '5 分钟',
    summary: '摆脱笨重的图形外壳，Sing-box 提供了极为纯粹的高性能网络代理环境，非常适合对后台常驻资源极度敏感的 Mac 用户。',
    steps: [
      {
        title: '安装 Sing-box GUI',
        content: '从官方 Releases 下载安装 macOS 通用包并拖动到应用程序中。'
      },
      {
        title: '远程订阅下载',
        content: '添加 Profile，填入机场专用的远程订阅地址并拉取解析。'
      },
      {
        title: '选用节点并连接',
        content: '在控制面板启动代理服务，测试节点通畅度后即可开始畅快办公。'
      }
    ],
    faqs: [
      { q: '开启后如何验证代理是否生效？', a: '在 Safari 中打开海外 IP 归属地检测网站即可查看出口 IP 是否已变为海外节点。' }
    ]
  },
  {
    slug: 'macos-terminal-proxy',
    category: 'macOS',
    os: 'macOS',
    client: 'Terminal / Git / Brew',
    title: 'Mac 终端命令行代理配置指南 - Homebrew / Git / Curl 极速加速技巧 | 机场PRO',
    h1: 'Mac 程序员必备：终端 Terminal、Git 与 Homebrew 命令行代理终极配置',
    desc: '系统代理对 Mac 终端不生效？教您如何通过几行 alias 脚本一键开启终端代理，让 git clone 与 brew update 跑满千兆带宽。',
    keywords: 'Mac终端代理, 命令行走代理, Git翻墙加速, Homebrew加速, Terminal代理, 机场加速',
    date: '2026-03-08',
    readTime: '6 分钟',
    summary: 'macOS 的系统代理默认不对 BSD 终端程序生效，开发者必须显式配置环境变量或使用 TUN 模式才能让命令行畅通无阻。',
    steps: [
      {
        title: '确认客户端本地监听端口',
        content: '在当前运行的代理客户端（如 Clash Verge）中确认混合代理端口（默认通常为 <code>7890</code>）。'
      },
      {
        title: '在 zshrc 中添加一键开关脚本',
        content: '在终端输入 <code>nano ~/.zshrc</code>，在末尾追加如下内容：<pre><code>alias setproxy="export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890; echo Proxy-on"\nalias unsetproxy="unset http_proxy https_proxy; echo Proxy-off"</code></pre>保存后执行 <code>source ~/.zshrc</code>。'
      },
      {
        title: '在终端随时一键开启',
        content: '每次在终端需要下载海外资源前，输入 <code>setproxy</code> 回车即可立即加速；输入 <code>curl cip.cc</code> 可查看当前终端出口 IP。'
      }
    ],
    faqs: [
      { q: 'Git 经常报错 LibreSSL SSL_connect: Connection reset by peer？', a: '这是典型被墙拦截，输入 <code>git config --global http.proxy http://127.0.0.1:7890</code> 即可让 Git 专走代理。' }
    ]
  },
  {
    slug: 'macos-network-location',
    category: 'macOS',
    os: 'macOS',
    client: '网络位置与重置',
    title: 'Mac 代理异常与网络设置重置教程 - 彻底解决网页打不开问题 | 机场PRO',
    h1: 'Mac 翻墙后无法上网修复：网络位置切换与代理重置全解',
    desc: '关闭代理后 Mac 连不上 Wi-Fi 打不开网页？一招教您通过网络位置刷新与 DNS 缓存清理恢复健康网络。',
    keywords: 'Mac无法上网, Mac代理重置, 苹果电脑连不上网, 代理残留修复, DNS缓存刷新, 梯子故障排查',
    date: '2026-03-05',
    readTime: '6 分钟',
    summary: 'Mac 意外强退或休眠唤醒可能导致系统代理配置卡死，利用 macOS 原生网络重置手段可秒级排障。',
    steps: [
      {
        title: '检查 Wi-Fi 高级代理设置',
        content: '打开系统设置 - 网络 - Wi-Fi - 详细信息 - 代理，检查网页代理 (HTTP) 和安全网页代理 (HTTPS) 是否被勾选，手动取消勾选并应用。'
      },
      {
        title: '刷新本地 DNS 解析缓存',
        content: '在终端执行命令：<code>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code> 清除本地过期的 DNS 解析记录。'
      },
      {
        title: '新建网络位置彻底重置',
        content: '若依然异常，可在网络设置中新建一个“备用位置”，系统将自动重建所有网卡的默认路由表。'
      }
    ],
    faqs: [
      { q: '为什么只有 Chrome 打得开，Safari 打不开？', a: 'Chrome 有独立的网络连接池，而 Safari 严格依赖系统网络配置。检查并取消系统代理勾选即可恢复正常。' }
    ]
  },

  // ==========================================
  // 五、路由器与全屋软路由生态 (4篇)
  // ==========================================
  {
    slug: 'openwrt-passwall',
    category: '软路由与网关',
    os: 'OpenWrt / iStoreOS',
    client: 'PassWall',
    title: 'OpenWrt 软路由 PassWall 插件配置教程 - 全屋设备静默科学上网 | 机场PRO',
    h1: 'OpenWrt 软路由 PassWall 配置全攻略：全屋透明代理与无感分流',
    desc: '详解 OpenWrt / iStoreOS 软路由 PassWall 插件的安装、节点订阅导入、主节点备用节点故障自动转移与智能分流配置。',
    keywords: 'OpenWrt翻墙, PassWall教程, 软路由梯子, 全屋翻墙, iStoreOS, 软路由配置, 机场节点',
    date: '2026-03-15',
    readTime: '9 分钟',
    summary: 'PassWall 以极其稳定的网络重定向与主备自动漂移功能闻名，是家庭全屋多设备静默翻墙的首选插件之一。',
    steps: [
      {
        title: '添加节点订阅并自动更新',
        content: '进入 OpenWrt 后台 PassWall 页面，在“节点订阅”选项卡添加机场提供的订阅 URL，设置每日凌晨自动定时更新。'
      },
      {
        title: '设置主开关与默认节点',
        content: '在“基本设置”中打开主开关，选择一个低延迟的高品质专线节点作为默认主节点（如微风网络或隐形人专线），并配置一个备用节点防止单点失效。'
      },
      {
        title: '配置 DNS 防污染与分流模式',
        content: '选择“中国列表以外 (非大陆IP走代理)”或“GFW 列表”模式，配置远程 DNS 通过节点安全解析，杜绝 DNS 投毒污染。'
      }
    ],
    faqs: [
      { q: '软路由开启后电视上的 Netflix 提示使用代理？', a: '在 PassWall 中为 Netflix 单独分配一个已解锁流媒体非自制剧的原生住宅 IP 节点即可完美解决。' }
    ]
  },
  {
    slug: 'openwrt-openclash',
    category: '软路由与网关',
    os: 'OpenWrt / LEDE',
    client: 'OpenClash (Meta)',
    title: 'OpenClash 软路由配置指南 - Meta 内核与 Fake-IP 模式极致调优 | 机场PRO',
    h1: 'OpenClash 软路由高阶配置：Fake-IP 极速响应与策略组进阶实战',
    desc: '面向软路由高阶玩家的 OpenClash 深度教程。手把手配置 Clash.Meta 内核、Fake-IP 模式优化、自定义规则集与流媒体分流。',
    keywords: 'OpenClash教程, Fake-IP优化, 软路由Clash, Meta内核, 软路由翻墙, 机场订阅',
    date: '2026-03-14',
    readTime: '10 分钟',
    summary: 'OpenClash 移植了完整的桌面级 Clash 分流体验，支持强大的策略组面板与图形化连接监控。',
    steps: [
      {
        title: '模式选择与内核更新',
        content: '在 OpenClash 插件设置中，模式建议选择“Fake-IP (TUN 混合)”，并将内核切换为功能最全的 Meta / Mihomo 内核。'
      },
      {
        title: '订阅配置拉取与定时任务',
        content: '在“配置文件管理”中上传或在线拉取机场配置文件，开启定时自动更新，确保节点存活状态常新。'
      },
      {
        title: '访问 Yacd 控制面板进行策略控制',
        content: '启动 OpenClash 后，点击进入外部控制面板（Yacd / Dashboard），可以针对不同设备或不同服务指定出口节点。'
      }
    ],
    faqs: [
      { q: 'Fake-IP 模式下国内某些智能家居连不上网？', a: '在高级设置的 Fake-IP 黑名单中，将米家、涂鸦等国内智能家居域名加入直连排除名单即可。' }
    ]
  },
  {
    slug: 'router-smart-home',
    category: '软路由与网关',
    os: 'Apple TV / PS5 / Switch',
    client: '全屋智能分流',
    title: '为 Apple TV / PS5 / Switch 配置软路由加速 - 主机联机与海外流媒体全家桶 | 机场PRO',
    h1: '全屋大屏与主机加速指南：Apple TV 4K 与游戏主机软路由分流配置',
    desc: '电视盒子与外服主机无法安装翻墙客户端？教您如何通过软路由网关分流，实现 Apple TV 4K 极速秒开、PS5/Switch 联机零丢包。',
    keywords: 'Apple TV翻墙, PS5联机加速, Switch梯子, 软路由分流, 全屋翻墙, 电视看Netflix, 机场推荐',
    date: '2026-03-12',
    readTime: '7 分钟',
    summary: '通过软路由对局域网内特定终端设备的 IP 实施精准分流，无需每台设备安装任何 App 即可获得完美的网络体验。',
    steps: [
      {
        title: '固定终端设备的局域网内网 IP',
        content: '在路由器 DHCP 设置中，将 Apple TV 或 PS5 的 MAC 地址与固定局域网 IP（例如 <code>192.168.1.100</code>）进行静态绑定。'
      },
      {
        title: '设置访问控制策略 (Access Control)',
        content: '在软路由插件中，针对该 IP 设置专门的代理规则。例如为 Apple TV 绑定专用解锁流媒体的香港/美区 IPLC 专线。'
      },
      {
        title: '开启 UDP 转发加速主机联机',
        content: '确保软路由开启了 UDP 代理与 FullCone NAT 转发，使得游戏主机的 NAT 类型达到最优的 NAT Type A/B，联机秒匹配。'
      }
    ],
    faqs: [
      { q: 'PS5 下载游戏速度慢怎么优化？', a: '游戏下载多走 CDN 直连，可在分流规则中将 Playstation CDN 域名设为直连，跑满家里原始宽带速度。' }
    ]
  },
  {
    slug: 'router-dns-leak',
    category: '软路由与网关',
    os: '软路由 / 网关',
    client: 'DNS 防泄漏与防污染',
    title: '软路由防止 DNS 污染与 DNS 泄漏终极指南 - MosDNS 与安全解析 | 机场PRO',
    h1: '软路由 DNS 防污染防泄漏手册：分流解析、MosDNS 与隐私保护',
    desc: '深入剖析 GFW 的 DNS 投毒机制。详解如何通过国内国外双向 DNS 分流、MosDNS 与 DoH/DoT 确保本地隐私零泄露与网站极速解析。',
    keywords: 'DNS防污染, DNS泄漏测试, MosDNS教程, 软路由DNS, DoH加密, 防投毒, 网络安全',
    date: '2026-03-10',
    readTime: '8 分钟',
    summary: 'DNS 是网络访问的第一步。混乱的 DNS 配置会导致国内网站变慢、海外网站遭投毒打不开，或是真实 IP 被追踪泄露。',
    steps: [
      {
        title: '理解 DNS 污染与泄漏危害',
        content: '国内解析海外域名会遭遇运营商防火墙伪造虚假 IP 响应；若海外解析走了国内 DNS 服务器，则会暴露用户正在访问的目标网站。'
      },
      {
        title: '配置国内外分流解析',
        content: '国内域名强制指向 223.5.5.5 或 119.29.29.29 走直连极速解析；海外域名通过加密协议（DoH/DoT）或节点隧道向 8.8.8.8 发起无污染解析。'
      },
      {
        title: '在线验证泄漏情况',
        content: '访问 <code>dnsleaktest.com</code> 进行标准测试，若返回的 DNS 服务器列表中无任何中国大陆运营商节点，即代表配置成功。'
      }
    ],
    faqs: [
      { q: '开启安全 DNS 会增加网页首字延迟吗？', a: '现代 DNS 分流插件内置强大的本地内存缓存系统，热点域名解析耗时低至 1 毫秒，整体浏览体验反而显著提升。' }
    ]
  },

  // ==========================================
  // 六、跨平台高级网络与开发者工具 (2篇)
  // ==========================================
  {
    slug: 'docker-git-proxy',
    category: '开发工具',
    os: 'Linux / macOS / Windows',
    client: 'Docker & Git',
    title: '开发者翻墙必备：Docker 镜像加速与 Git Clone 命令行代理配置 | 机场PRO',
    h1: '程序员科学上网指南：Docker 镜像拉取与 GitHub 极速加速技巧',
    desc: 'Docker Hub 无法拉取镜像？GitHub clone 速度只有几十 KB？详细总结主流开发工具的代理配置秘籍，瞬间跑满千兆带宽。',
    keywords: 'Docker代理, Git加速, GitHub连不上, 开发者翻墙, Docker镜像加速, 程序员梯子',
    date: '2026-03-15',
    readTime: '6 分钟',
    summary: '开发人员在本地构建开发环境时，频繁遭遇各种海外源被墙与限速问题，掌握开发环境的代理配置是研发提效的刚需。',
    steps: [
      {
        title: '为 Git 命令行配置永久代理',
        content: '针对 github.com 域名单独配置代理（不影响国内 Gitee）：<pre><code>git config --global http.https://github.com.proxy http://127.0.0.1:7890</code></pre>'
      },
      {
        title: '为 Docker 守护进程配置代理',
        content: '在 <code>/etc/docker/daemon.json</code> 中增加 <code>proxies</code> 字段，或在 systemd service 中注入 HTTP_PROXY 环境变量并重启 Docker 服务。'
      },
      {
        title: '测试加速效果',
        content: '执行 <code>docker pull alpine:latest</code>，原本超时的海外公共镜像可在几秒钟内飞速拉取完毕。'
      }
    ],
    faqs: [
      { q: '为什么开了全局代理 Docker 仍然拉取超时？', a: 'Docker 后台 daemon 是由独立系统服务运行的，默认不继承普通终端用户的桌面代理环境变量，必须为 daemon 单独配置。' }
    ]
  },
  {
    slug: 'telegram-proxy-mtproto',
    category: '开发工具',
    os: '全平台 (iOS/Android/Windows/Mac)',
    client: 'Telegram (电报)',
    title: 'Telegram 内置代理设置教程 - MTProto 与独立 Socks5 隧道实战 | 机场PRO',
    h1: 'Telegram 独占代理配置全解：不开启全局软件也能畅聊电报',
    desc: '系统详解 Telegram（纸飞机）官方内置代理设置。无需全系统常驻翻墙软件，利用 MTProto 与本地 Socks5 实现电报独立稳定通信。',
    keywords: 'Telegram代理, MTProto设置, 电报翻墙, 电报连不上, Telegram设置, 翻墙教程, 梯子推荐',
    date: '2026-03-14',
    readTime: '5 分钟',
    summary: '许多用户希望仅让 Telegram 单独走代理，而不干扰整台电脑或手机的其它软件，利用内置代理机制是最高效轻便的方案。',
    steps: [
      {
        title: '打开 Telegram 代理设置',
        content: '进入 Telegram 设置 - 数据和存储 (Data and Storage) - 代理设置 (Proxy Settings)。'
      },
      {
        title: '添加本地 Socks5 代理',
        content: '点击“添加代理”，选择 SOCKS5，服务器填 <code>127.0.0.1</code>，端口填写您代理客户端的本地 Socks 端口（默认如 <code>7890</code>）。'
      },
      {
        title: '开启并保存',
        content: '开启“使用代理”开关，右上角盾牌图标显示为绿色勾选状态即表示已成功接入安全加密隧道。'
      }
    ],
    faqs: [
      { q: '手机端如何使用？', a: '在手机端 Telegram 中，点击他人分享的 <code>tg://proxy?server=...</code> 专属链接即可一键保存并自动连接。' }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GUIDES_DATA;
}
