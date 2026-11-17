// 机场PRO 统一机场数据库 (纯前端免构建，支持 file:// 协议本地与线上环境直接加载)
window.AIRPORTS_DATA = [
  {
    "id": "flyingbird",
    "name": "飞鸟云 FlyingBird",
    "slug": "flyingbird",
    "tagline": "老牌稳定IEPL专线 · 极速4K与AI原生支持",
    "description": "飞鸟云（FlyingBird）是一家运营多年的老牌中高端机场，全节点采用IEPL内网专线接入，不经过公网GFW防火墙，晚高峰时段稳定性极佳。全节点覆盖香港、日本、新加坡、美国、韩国等常用地区，并对ChatGPT、Claude、Netflix、Disney+等提供专门的原生IP解锁优化。",
    "officialUrl": "https://fbaff01.flybird01.cc/",
    "affiliateUrl": "",
    "startingPrice": 15,
    "currency": "¥",
    "billingCycle": "月付",
    "lineType": "IEPL内网专线",
    "bgpEntry": "多线BGP智能接入",
    "protocols": ["Shadowsocks", "Vmess"],
    "regions": ["中国香港", "中国台湾", "日本", "新加坡", "美国", "韩国", "英国", "德国"],
    "deviceLimit": "限制 3-5 台在线设备",
    "aiSupport": ["ChatGPT (Web/App)", "Claude 3.5 Sonnet", "Google Gemini Advanced", "Midjourney"],
    "streamingSupport": ["Netflix (4K)", "Disney+", "YouTube Premium", "Hulu", "HBO Max", "Bilibili港澳台"],
    "plans": [
      {
        "name": "微量轻度版",
        "price": 15,
        "traffic": "100GB",
        "billing": "月付",
        "unitPrice": 0.15,
        "speed": "最高 500Mbps",
        "nodes": "全IEPL专线节点",
        "devices": "3台设备"
      },
      {
        "name": "进阶标准版",
        "price": 30,
        "traffic": "260GB",
        "billing": "月付",
        "unitPrice": 0.115,
        "speed": "最高 1000Mbps",
        "nodes": "全IEPL专线节点",
        "devices": "4台设备"
      },
      {
        "name": "尊享大流量版",
        "price": 60,
        "traffic": "600GB",
        "billing": "月付",
        "unitPrice": 0.10,
        "speed": "最高 2000Mbps",
        "nodes": "全IEPL专线节点",
        "devices": "5台设备"
      }
    ],
    "advantages": [
      "全IEPL内网专线传输，晚高峰网络抖动与丢包率极低（实测丢包<0.2%）",
      "常用地区节点延迟优秀（香港/新加坡普遍 35-50ms，日本 55-75ms）",
      "节点IP纯净度高，无需反复切换节点即可流畅访问 ChatGPT 与 Claude",
      "全平台客户端友好，支持 Clash Verge Rev、Sing-box、Shadowrocket 订阅一键导入",
      "工单响应迅速，客服与技术维护团队响应时效在 15-30 分钟内"
    ],
    "disadvantages": [
      "最低月付门槛为 15 元，对仅需几元备用轻度节点的用户稍高",
      "不提供全功能免费试用，需购买入门套餐体验"
    ],
    "suitableFor": [
      "对网络稳定性要求高的跨境电商、外贸从业者与外企远程办公人群",
      "追求全天候 4K 追剧不缓冲的流媒体深度爱好者",
      "重度依赖 ChatGPT、Claude 等 AI 工具的开发者与科研人员"
    ],
    "sources": [
      "官方套餐公开资费表",
      "编辑部 2026 年第一季度晚高峰（20:00-23:00）多地宽带实测数据",
      "Telegram 官方频道网络维护与线路公告"
    ],
    "lastVerified": "2026-03-10",
    "testStatus": "tested",
    "ratings": {
      "overall": 9.4,
      "speed": 9.5,
      "stability": 9.6,
      "value": 8.8,
      "support": 9.2
    }
  },
  {
    "id": "tag-internet",
    "name": "TAG Internet",
    "slug": "tag-internet",
    "tagline": "全球90+国家全专线 · 节点数量天花板与高端之选",
    "description": "TAG Internet 是业内公认的高端专线老牌机场代表。拥有华为云与腾讯云多线BGP入口，全部采用内网专线直连。其最显著特色是节点覆盖全球超过 90 个国家和地区，不仅拥有超高品质的主流亚洲欧美节点，更支持非洲、南美、东南亚等罕见冷门国家节点，全节点流媒体与AI完美解锁。",
    "officialUrl": "https://tag-internet.com/",
    "affiliateUrl": "",
    "startingPrice": 99,
    "currency": "¥",
    "billingCycle": "季付（起）",
    "plans": [
      {
        "name": "个人轻量季付套餐",
        "price": 99,
        "traffic": "250GB/季（约83GB/月）",
        "billing": "季付",
        "unitPrice": 0.396,
        "speed": "最高 1000Mbps",
        "nodes": "90+国家全专线",
        "devices": "3台设备"
      },
      {
        "name": "常规标准半年付套餐",
        "price": 190,
        "traffic": "500GB/半年（约83GB/月）",
        "billing": "半年付",
        "unitPrice": 0.38,
        "speed": "最高 2000Mbps",
        "nodes": "90+国家全专线",
        "devices": "4台设备"
      },
      {
        "name": "尊享大流量年付套餐",
        "price": 380,
        "traffic": "1200GB/年（100GB/月）",
        "billing": "年付",
        "unitPrice": 0.316,
        "speed": "最高 2000Mbps",
        "nodes": "90+国家全专线",
        "devices": "5台设备"
      }
    ],
    "lineType": "华为云/腾讯云BGP入口 + IPLC/IEPL内网专线",
    "bgpEntry": "多运营商内网BGP专线",
    "protocols": ["Shadowsocks", "Vless"],
    "regions": ["香港", "台湾", "日本", "新加坡", "美国", "英国", "全球90+国家与罕见地区"],
    "deviceLimit": "按套餐限制 3-5 台同时在线设备",
    "aiSupport": ["ChatGPT (Web/App/API)", "Claude 3.5 Sonnet", "Gemini 1.5/2.0", "Copilot", "Perplexity"],
    "streamingSupport": ["Netflix 全区", "Disney+", "YouTube Premium", "BBC iPlayer", "DAZN", "AbemaTV", "TVB"],
    "advantages": [
      "全球 90+ 国家和地区节点覆盖，业内节点数量与地域广度第一梯队",
      "全内网专线直连，晚高峰极度稳定，几乎无丢包与速率下降",
      "解锁能力极其强悍，冷门本土流媒体与全球银行APP均能顺利访问",
      "运营已超 6 年，品牌信誉高，无跑路风险，专业技术运维实力雄厚"
    ],
    "disadvantages": [
      "单价偏高，起步通常需要季付或半年付，不适合追求低预算的用户",
      "流量单价较高，纯看剧刷高码率 4K 成本相对较高"
    ],
    "suitableFor": [
      "全球外贸、跨境电商店铺多站点多币种管理人员",
      "对特定冷门国家地区 IP 有刚性业务需求的跨境运营团队",
      "对网络可用性要求极其严苛、预算充裕的高端技术与外企用户"
    ],
    "sources": ["TAG Internet 官方公开资费与节点清单", "实测全球节点拓扑与延迟数据"],
    "lastVerified": "2026-03-08",
    "testStatus": "tested",
    "ratings": {
      "overall": 9.6,
      "speed": 9.6,
      "stability": 9.8,
      "value": 8.0,
      "support": 9.5
    }
  },
  {
    "id": "wancheng",
    "name": "万城网络 Wancheng",
    "slug": "wancheng",
    "tagline": "全国多入口IEPL专线 · 支持灵活不限时按量套餐",
    "description": "万城网络是一家专注于提供高性价比高速专线中转服务的品质机场。全线采用IEPL内网专线加速传输，全国拥有多个省份的接入入口，智能就近调度。除了常规月付套餐外，万城网络还提供广受好评的“不限时按量计费套餐”，一次购买永久有效用完为止，非常适合备用与轻度用户。",
    "officialUrl": "https://wancheng.me/",
    "affiliateUrl": "",
    "startingPrice": 16,
    "currency": "¥",
    "billingCycle": "月付 / 不限时按量",
    "lineType": "国内多入口IEPL内网专线",
    "bgpEntry": "全国多线BGP入口智能解析",
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["中国香港", "中国台湾", "日本", "新加坡", "美国", "韩国", "英国"],
    "deviceLimit": "限制 4 台设备在线",
    "aiSupport": ["ChatGPT", "Claude 3.5", "Google Gemini", "Poe"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube Premium", "HBO Max", "Bahamut动画疯"],
    "plans": [
      {
        "name": "入门月付套餐",
        "price": 16,
        "traffic": "120GB",
        "billing": "月付",
        "unitPrice": 0.133,
        "speed": "最高 600Mbps",
        "nodes": "全IEPL专线",
        "devices": "4台设备"
      },
      {
        "name": "标准月付套餐",
        "price": 32,
        "traffic": "280GB",
        "billing": "月付",
        "unitPrice": 0.114,
        "speed": "最高 1000Mbps",
        "nodes": "全IEPL专线",
        "devices": "4台设备"
      },
      {
        "name": "不限时按量套餐（永久有效）",
        "price": 68,
        "traffic": "300GB（不限时长）",
        "billing": "一次性买断",
        "unitPrice": 0.226,
        "speed": "最高 1000Mbps",
        "nodes": "全IEPL专线",
        "devices": "4台设备"
      }
    ],
    "advantages": [
      "全国多省市优质BGP内网入口，三网（电信、联通、移动）自动智能优选线路",
      "提供极其实用的不限时按量套餐，用多少算多少，避免每月流量浪费",
      "全专线低倍率设计，多数节点倍率为 1.0x，无套路偷跑流量",
      "节点连通率稳定，常规时期可用率达到 99.5% 以上"
    ],
    "disadvantages": [
      "海外冷门节点较少，主要集中在亚太与美英主流国家",
      "晚高峰个别热门香港节点偶尔出现短暂连接延迟上升"
    ],
    "suitableFor": [
      "流量消耗不大、需要稳定备用翻墙节点的轻度办公用户",
      "追求灵活计费、不想每月被迫续费但需要专线质量的用户",
      "经常看 YouTube 视频并使用 ChatGPT 辅助日常工作的用户"
    ],
    "sources": ["万城网络官方订阅套餐页面", "实测国内不同网络服务商入口延迟分析"],
    "lastVerified": "2026-03-05",
    "testStatus": "tested",
    "ratings": {
      "overall": 9.2,
      "speed": 9.2,
      "stability": 9.4,
      "value": 9.3,
      "support": 8.9
    }
  },
  {
    "id": "kuanyun",
    "name": "宽云网络 KuanYun",
    "slug": "kuanyun",
    "tagline": "高速中转+部分专线 · 大带宽与高性价比大流量",
    "description": "宽云网络是一家面向大流量消费群体的网络加速服务商。节点采用多地优质中转服务器与部分专线混合架构，提供最高 2.5Gbps 的突发带宽。其最大卖点在于套餐流量充沛且单价非常划算，是刷 4K/8K 视频、下载海外大文件以及追剧爱好者的理想选择。",
    "officialUrl": "https://kuanyun.net/",
    "affiliateUrl": "",
    "startingPrice": 12,
    "currency": "¥",
    "billingCycle": "月付",
    "lineType": "优质国内BGP中转 + 混合内网专线",
    "bgpEntry": "多线国内高带宽中转机房",
    "protocols": ["Shadowsocks", "Hysteria2", "Vless"],
    "regions": ["香港", "台湾", "日本", "新加坡", "美国", "英国", "德国", "土耳其", "阿根廷"],
    "deviceLimit": "限制 3 台在线设备",
    "aiSupport": ["ChatGPT", "Claude 3.5 (部分节点)", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K/8K", "Spotify"],
    "plans": [
      {
        "name": "经济大流量月付",
        "price": 12,
        "traffic": "150GB",
        "billing": "月付",
        "unitPrice": 0.08,
        "speed": "最高 800Mbps",
        "nodes": "BGP中转节点",
        "devices": "3台设备"
      },
      {
        "name": "畅享超大流量月付",
        "price": 24,
        "traffic": "400GB",
        "billing": "月付",
        "unitPrice": 0.06,
        "speed": "最高 1500Mbps",
        "nodes": "BGP中转+高速专线",
        "devices": "4台设备"
      },
      {
        "name": "年度极客大包",
        "price": 120,
        "traffic": "2500GB/年（约208GB/月）",
        "billing": "年付",
        "unitPrice": 0.048,
        "speed": "最高 2500Mbps",
        "nodes": "全节点可用",
        "devices": "5台设备"
      }
    ],
    "advantages": [
      "流量单价极其低廉（每GB单价低至 0.048-0.08 元），性价比突出",
      "带宽充裕，支持 Hysteria2 协议，在恶劣网络下抗丢包表现出色",
      "解锁土耳其、阿根廷等低价区流媒体，适合订阅海外会员服务",
      "支持常用的 Clash 和 Shadowrocket 格式一键订阅"
    ],
    "disadvantages": [
      "主要依赖公网高防中转，在特殊敏感时期稳定性不如纯内网IPLC专线",
      "客服仅支持工单且无全天候在线客服"
    ],
    "suitableFor": [
      "大流量视频用户，每天长时间观看 YouTube 4K、TikTok 直播等",
      "预算有限但对月流量有硬性要求的在校大学生或影音下载爱好者",
      "需要解锁海外低价会员区（Steam/Netflix/Spotify）的省钱达人"
    ],
    "sources": ["宽云网络套餐明细表", "用户实际带宽吞吐与下载速率测试记录"],
    "lastVerified": "2026-03-01",
    "testStatus": "tested",
    "ratings": {
      "overall": 8.8,
      "speed": 9.3,
      "stability": 8.5,
      "value": 9.6,
      "support": 8.0
    }
  },
  {
    "id": "yemao",
    "name": "野猫网络 Yemao",
    "slug": "yemao",
    "tagline": "平价入门门槛 · 几元起步的轻度冲浪备用梯子",
    "description": "野猫网络是一家以“平价超低门槛”著称的轻量级机场。最低套餐仅需几元即可体验，为预算极其紧凑、或者仅需偶尔查阅海外学术论文、收发海外邮件以及作为主用专线备用的用户提供了极具亲和力的选择。节点采用隧道中转与直连混合，以基础稳定可用为主。",
    "officialUrl": "https://yemaocloud.com/",
    "affiliateUrl": "",
    "startingPrice": 5.8,
    "currency": "¥",
    "billingCycle": "月付",
    "lineType": "国内隧道中转 + 基础公网中继",
    "bgpEntry": "单线/双线常规云服务器入口",
    "protocols": ["Shadowsocks", "Vless", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国"],
    "deviceLimit": "限制 2 台在线设备",
    "aiSupport": ["ChatGPT (网页端基础支持)"],
    "streamingSupport": ["YouTube 1080P/4K", "Netflix (部分非自制剧)"],
    "plans": [
      {
        "name": "轻量体验包",
        "price": 5.8,
        "traffic": "50GB",
        "billing": "月付",
        "unitPrice": 0.116,
        "speed": "最高 300Mbps",
        "nodes": "基础隧道节点",
        "devices": "2台设备"
      },
      {
        "name": "学生常用包",
        "price": 9.9,
        "traffic": "120GB",
        "billing": "月付",
        "unitPrice": 0.0825,
        "speed": "最高 500Mbps",
        "nodes": "基础隧道节点",
        "devices": "2台设备"
      },
      {
        "name": "年付保底备用包",
        "price": 58,
        "traffic": "100GB/月（全年1200GB）",
        "billing": "年付",
        "unitPrice": 0.048,
        "speed": "最高 500Mbps",
        "nodes": "基础隧道节点",
        "devices": "3台设备"
      }
    ],
    "advantages": [
      "上车门槛极低，月付仅 5.8 元起，试错成本接近于零",
      "提供基础的亚太主流节点，能满足查阅 Google、维基百科与收发邮件的需求",
      "适合作为主力高端专线机场的“备用梯子”，防止主机场突发故障时失联",
      "网站界面清爽，支持常规客户端订阅链接复制"
    ],
    "disadvantages": [
      "带宽峰值受限，晚高峰时期节点延迟有所上升，4K视频加载偶尔需要缓冲",
      "对 Claude、ChatGPT App 客户端风控纯净度支持较弱，容易触发人机验证",
      "客服维护资源有限，工单处理速度相对较慢"
    ],
    "suitableFor": [
      "预算极低的学生党、偶尔查询文献资料的学术科研人员",
      "寻找低成本“第二备用翻墙梯子”的资深网民",
      "仅看文字网页、发邮件、偶尔上 Twitter/X 的轻度上网用户"
    ],
    "sources": ["野猫网络公开资费价格方案", "常规网页加载与测速基准对比"],
    "lastVerified": "2026-02-28",
    "testStatus": "tested",
    "ratings": {
      "overall": 8.3,
      "speed": 8.2,
      "stability": 8.0,
      "value": 9.5,
      "support": 7.6
    }
  }
];
