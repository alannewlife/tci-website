window.TCI_PAGES = {
  capabilities: {
    nav: "capabilities",
    eyebrow: "Capabilities & Services",
    title: "把AI、软件与现场能力组合起来",
    description: "企业真正需要的往往不是一个孤立工具，而是能够进入现有业务和系统的组合方案。我们提供从咨询、建设、集成到持续运营的服务。",
    heroImage: "hero-decision-chamber.png",
    cta: ["查看四大能力", "#capability-map"],
    lead: "从一个业务问题出发，组合<em>恰好需要</em>的技术与工程能力。",
    sections: [
      {
        id: "capability-map",
        type: "cards",
        index: "01 / Four capabilities",
        title: "四大能力，共同进入真实业务",
        intro: "AI贯穿所有能力，但每一次合作都从客户的问题、流程和既有环境开始。",
        columns: 4,
        items: [
          { title: "AI应用与智能体", text: "企业知识、文档理解、智能体工作流、系统内嵌AI、模型平台与安全治理。", href: "capabilities/ai/", tag: "AI" },
          { title: "数字工程与系统开发", text: "定制系统、低代码、SAP/ERP、数据平台、AI增强开发与长期运维。", href: "capabilities/digital-engineering/", tag: "DE" },
          { title: "智能制造与机器人", text: "MES、WMS、IoT、AI视觉、AGV/AMR、机器人连接与现场运营。", href: "capabilities/smart-factory-robotics/", tag: "MX" },
          { title: "云与智能运维", text: "云、网络、服务器、GPU、安全、服务台、AIOps与运维智能体。", href: "capabilities/cloud-operations/", tag: "CO" }
        ]
      },
      {
        type: "timeline",
        index: "02 / Service lifecycle",
        title: "服务贯穿四个阶段",
        intro: "不是交付一个工具，而是让能力在生产环境中稳定运行。",
        items: [
          { year: "01", title: "发现", text: "梳理业务问题、流程、数据、既有系统与预期效果，判断场景优先级。" },
          { year: "02", title: "建设", text: "选择模型、平台和技术，完成应用、系统或基础设施的设计与开发。" },
          { year: "03", title: "连接", text: "对接业务系统、数据、权限、设备和人员流程，让方案进入实际工作。" },
          { year: "04", title: "运营", text: "培训、监控、维护、复盘并持续优化使用效果、成本与风险。" }
        ]
      },
      {
        type: "cards",
        index: "03 / Start from the problem",
        title: "按客户问题进入",
        columns: 3,
        items: [
          { title: "不知道AI从哪里开始", text: "从场景发现、价值判断和轻量PoC开始，形成可验证的第一步。" },
          { title: "系统难以适应新业务", text: "通过业务分析、现代化改造与AI增强工程，让系统持续演进。" },
          { title: "工厂数据与现场割裂", text: "连接ERP、MES、WMS、设备和作业流程，逐步走向智能化。" },
          { title: "IT运维压力持续增加", text: "整合知识、日志、监控和工具，建立稳定、安全、可运营的底座。" },
          { title: "试点做完却无法上线", text: "把权限、数据、人工复核、系统集成和长期运营纳入项目范围。" },
          { title: "需要跨中日团队协作", text: "依托双语沟通、日系客户经验和集团网络推进跨区域项目。" }
        ]
      }
    ],
    related: ["capabilities-ai", "industry-manufacturing", "cases"]
  },

  "capabilities-ai": {
    nav: "capabilities",
    eyebrow: "AI Applications & Agents",
    title: "让AI从回答问题，走向完成任务",
    description: "将模型、企业知识、业务规则和数字工具组合成可用的AI应用与智能体，并嵌入客户现有系统。",
    heroImage: "data-system.jpg",
    cta: ["从一个可验证场景开始", "contact/"],
    lead: "让AI拥有业务所需的<em>上下文、模型与工具</em>，并在可控流程中行动。",
    sections: [
      {
        type: "cards",
        index: "01 / Typical scenarios",
        title: "从高频、可验证的场景开始",
        columns: 3,
        items: [
          { title: "企业知识与智能问答", text: "统一检索制度、SOP、品质与设备知识，提供可溯源回答。" },
          { title: "文档理解与生成", text: "提取、分类、比较、翻译和生成复杂业务文档，并保留人工复核。" },
          { title: "业务流程智能体", text: "把判断拆解为可执行步骤，连接系统、工具、审批与人员协作。" },
          { title: "系统内嵌AI", text: "在MES、CRM、ERP、门户和专业业务系统中加入自然语言与智能辅助。" },
          { title: "AI增强研发与运维", text: "辅助需求、设计、编码、测试、日志分析、知识检索和标准任务。" },
          { title: "培训与采用支援", text: "从认知培训到岗位场景设计，帮助团队形成安全、稳定的使用方式。" }
        ]
      },
      {
        type: "split",
        index: "02 / Agent architecture",
        title: "上下文 + 模型 + 工具",
        text: "上下文让AI知道“我是谁、知道什么、现在发生什么”；模型负责理解、判断和规划；工具把判断变成搜索、读写文件、运行代码和调用系统等行动。三者形成闭环，AI才能从对话进入业务执行。",
        image: "data-lattice.jpg",
        bullets: ["Context：角色、知识、权限、历史与实时状态", "Model：理解、生成、推理与任务规划", "Tools：API、数据库、文件、软件系统与设备", "Human：复核、审批、例外判断与最终责任"]
      },
      {
        type: "timeline",
        index: "03 / Service path",
        title: "从场景发现到持续运营",
        items: [
          { year: "01", title: "场景发现与评估", text: "访谈、流程梳理、价值与风险判断。" },
          { year: "02", title: "模型与部署选择", text: "商业模型、开源模型、本地、云或混合方式。" },
          { year: "03", title: "平台与知识建设", text: "模型网关、知识库、权限、日志和工具连接。" },
          { year: "04", title: "智能体与应用开发", text: "工作流、Skill、MCP、定制界面与业务集成。" },
          { year: "05", title: "培训与运营", text: "效果评估、成本监控、知识维护和持续优化。" }
        ]
      },
      {
        type: "cases",
        index: "04 / Representative cases",
        title: "代表案例",
        items: [
          { title: "制造企业本地知识库", text: "让品质、制造和设备知识可检索、可复用。", image: "data-22.jpg", tags: ["本地部署", "知识库"], href: "cases/manufacturing-knowledge/" },
          { title: "MES辅助查询 Copilot", text: "用自然语言查询与分析MES数据。", image: "data-monitor.jpg", tags: ["制造", "系统内嵌AI"], href: "cases/mes-query-copilot/" },
          { title: "IT运维智能体平台", text: "把知识、工具与任务编排接入运维流程。", image: "cloud.jpg", tags: ["Agent", "AIOps"], href: "cases/it-operations-agent-platform/" }
        ]
      }
    ],
    related: ["case-mes-copilot", "case-pharma-contract", "quality"]
  },

  "capabilities-digital": {
    nav: "capabilities",
    eyebrow: "Digital Engineering",
    title: "以AI增强软件工程，持续现代化业务系统",
    description: "从需求分析、设计、开发和测试，到上线、保守和持续改善，建设能够长期演进的企业系统。",
    heroImage: "office-exact-clean.jpg",
    cta: ["讨论您的系统课题", "contact/"],
    lead: "软件不是一次性交付物，而是企业能力持续演进的<em>工程载体</em>。",
    sections: [
      {
        type: "cards",
        index: "01 / Service scope",
        title: "覆盖业务系统的完整生命周期",
        columns: 3,
        items: [
          { title: "业务系统与定制开发", text: "面向制造、销售、客户服务、财务、人事和专业业务的定制系统。" },
          { title: "低代码与快速开发", text: "使用OutSystems等平台快速验证、建设和持续改进业务应用。" },
          { title: "SAP / ERP与外围联动", text: "SAP运维、数据与接口、外围系统建设和业务流程改善。" },
          { title: "数据、BI与经营分析", text: "数据集成、报表、经营分析、预测与智能辅助。" },
          { title: "系统现代化", text: "旧系统迁移、重构、云化、接口化和技术债治理。" },
          { title: "ODC与长期运维", text: "稳定团队、双语协作、质量管理、维护和持续改善。" }
        ]
      },
      {
        type: "split",
        index: "02 / AI-enhanced engineering",
        title: "AI增强的不只是编码速度",
        text: "AI进入需求、设计、开发、测试和运维，但每一个关键结果仍由专业人员确认。我们把效率提升与工程治理放在同一套流程中。",
        image: "engineer.webp",
        bullets: ["需求：整理访谈、文档与影响范围", "设计：辅助架构、接口与数据模型", "开发：生成、解释、重构、迁移与评审", "测试：用例生成、缺陷分析与自动化", "运维：知识检索、日志分析与变更辅助"]
      },
      {
        type: "cards",
        index: "03 / Why TCI",
        title: "长期工程积累，面向AI时代继续进化",
        columns: 4,
        items: [
          { title: "日系业务理解", text: "中日双语沟通，理解日企管理、品质与长期合作方式。" },
          { title: "自有交付团队", text: "稳定的开发与项目团队，支持从建设到保守的一体化协作。" },
          { title: "跨领域组合", text: "软件、AI、云、基础设施与制造现场能力协同。" },
          { title: "品质与持续运营", text: "CMMI3、PMO、评审、测试与长期运维机制。" }
        ]
      }
    ],
    related: ["case-outsystems", "case-sap-managed", "case-bi-analytics"]
  },

  "capabilities-manufacturing": {
    nav: "capabilities",
    eyebrow: "Smart Factory & Robotics",
    title: "连接生产、物流、设备与智能",
    description: "围绕MES、WMS、生产计划、IoT和现场系统，连接ERP、设备、数据与作业流程，并进一步引入AI与机器人。",
    heroImage: "city-rail.jpg",
    cta: ["讨论工厂或物流场景", "contact/"],
    lead: "让现场先看得见、连得上，再逐步走向<em>自动化与智能化</em>。",
    sections: [
      {
        type: "cards",
        index: "01 / Digital foundation",
        title: "制造现场的数字化基础",
        columns: 3,
        items: [
          { title: "生产执行与计划", text: "MES、生产管理、APS、工程BOM、实绩与进度管理。" },
          { title: "仓储与物流", text: "WMS、ERP联动、PDA、RFID、库存与物流可视化。" },
          { title: "IoT与设备连接", text: "设备数据采集、状态监控、能源、保全与异常通知。" },
          { title: "品质与追溯", text: "检查、履历、批次、异常和质量数据的闭环管理。" },
          { title: "无纸化与现场应用", text: "电子作业、移动终端、看板与实时信息共享。" },
          { title: "系统整合", text: "连接ERP、MES、WMS、调度、设备与机器人执行端。" }
        ]
      },
      {
        type: "split",
        index: "02 / AI on the floor",
        title: "AI进入制造现场",
        text: "AI不替代现场系统，而是在知识、数据与任务之间形成新的交互方式。它可以帮助人员更快理解问题、获得建议，并把标准任务交给系统执行。",
        image: "precise-data.jpg",
        bullets: ["工厂知识库：SOP、设备手册、品质与经验复用", "MES Copilot：自然语言查询生产与设备数据", "AI视觉：外观检测、动作合规与缺陷识别", "预测性维护：结合传感数据识别异常趋势", "现场智能体：连接知识、数据和业务工具"]
      },
      {
        type: "timeline",
        index: "03 / Evolution path",
        title: "现场智能化路线",
        items: [
          { year: "01", title: "可视化", text: "数据采集、看板、追溯、库存与进度。" },
          { year: "02", title: "连接化", text: "ERP、MES、WMS、IoT与设备接口。" },
          { year: "03", title: "智能辅助", text: "知识库、Copilot、AI视觉与异常预测。" },
          { year: "04", title: "自动执行", text: "AGV/AMR、调度、标准任务与系统联动。" },
          { year: "05", title: "Physical AI", text: "机器人在完整业务流程中的感知、协作与执行。" }
        ]
      },
      {
        type: "quote",
        label: "Our role in robotics",
        text: "机器人落地不仅是设备导入。我们的角色，是连接任务来源、业务规则、调度、异常处理、系统接口与人员协作。"
      }
    ],
    related: ["case-smart-warehouse", "case-agv-kitting", "industry-manufacturing"]
  },

  "capabilities-cloud": {
    nav: "capabilities",
    eyebrow: "Cloud & Intelligent Operations",
    title: "为AI和业务系统提供稳定、安全、可运营的底座",
    description: "从云、网络、服务器和安全，到GPU、模型运行环境、监控与服务台，让技术能力在生产环境中稳定运行。",
    heroImage: "cloud.jpg",
    cta: ["讨论您的基础设施", "contact/"],
    lead: "把基础设施、知识、监控与工具连接起来，从被动维护走向<em>智能运维</em>。",
    sections: [
      {
        type: "cards",
        index: "01 / Service scope",
        title: "从建设到长期运营",
        columns: 3,
        items: [
          { title: "云与混合基础设施", text: "AWS、阿里云及混合环境的设计、构建、迁移和运营。" },
          { title: "网络、服务器与数据库", text: "企业网络、服务器、数据库、备份与容灾。" },
          { title: "AI基础设施", text: "GPU、模型运行环境、企业AI平台、容量与成本管理。" },
          { title: "监控与安全运营", text: "告警、日志、门禁、账号、权限、审计和安全支援。" },
          { title: "服务台与现场支援", text: "中日双语服务台、离岸支援、标准作业和升级机制。" },
          { title: "运维智能体", text: "知识检索、日志分析、任务编排和标准操作自动化。" }
        ]
      },
      {
        type: "split",
        index: "02 / AIOps",
        title: "从被动维护到智能运维",
        text: "传统运维关注“发生故障后如何处理”；智能运维进一步整合日志、告警、知识和工具，辅助识别原因、生成建议并执行标准化任务。人工仍负责权限、审批、风险判断和关键操作。",
        image: "data-monitor.jpg",
        bullets: ["减少重复检索与标准操作", "把专家经验沉淀为可复用知识", "统一账号、日志、成本与调用记录", "保留审批、人工介入和关键操作责任"]
      },
      {
        type: "cases",
        index: "03 / Representative cases",
        title: "代表案例",
        items: [
          { title: "IT运维智能体平台", text: "连接知识、监控与标准运维工具。", image: "data-lattice.jpg", tags: ["AIOps", "Agent"], href: "cases/it-operations-agent-platform/" },
          { title: "大型客户长期运维", text: "网络、服务器与数据库的稳定服务体制。", image: "office-entry.jpg", tags: ["Managed Service", "Security"] },
          { title: "GPU与本地AI环境", text: "兼顾数据边界、性能、成本与持续运维。", image: "data-system.jpg", tags: ["Private AI", "GPU"] }
        ]
      }
    ],
    related: ["case-it-operations-agent", "case-sap-managed", "quality"]
  },

  industries: {
    nav: "industries",
    eyebrow: "Industries & Scenarios",
    title: "从业务问题出发，而不是从技术清单出发",
    description: "围绕制造与物流、企业运营、IT与基础设施三类领域，组合行业知识、软件工程、数据、AI和持续运营能力。",
    heroImage: "story-city.jpg",
    cta: ["描述您的问题", "contact/"],
    lead: "不同企业面对的课题并不相同，我们从一个具体流程、系统或现场问题开始。",
    sections: [
      {
        type: "cards",
        index: "01 / Three fields",
        title: "三大应用领域",
        columns: 3,
        items: [
          { title: "制造与物流", text: "生产、仓储、品质、设备、追溯、无纸化、自动化和机器人。", href: "industries/manufacturing-logistics/", tag: "01" },
          { title: "企业运营与专业服务", text: "知识、文档、客户服务、人事、财务和专业工作流程。", href: "industries/enterprise-operations/", tag: "02" },
          { title: "IT与基础设施", text: "云、网络、服务器、安全、服务台、AI环境与智能运维。", href: "industries/it-infrastructure/", tag: "03" }
        ]
      },
      {
        type: "split",
        index: "02 / Cross-domain capabilities",
        title: "跨领域能力",
        text: "行业不同，但把新技术带入业务所需的工程要素高度相通。我们把业务理解、AI与数据、软件系统、基础设施和持续运营组合起来。",
        image: "precise-options.jpg",
        bullets: ["业务流程梳理与场景发现", "AI、知识与数据应用", "软件开发和系统集成", "基础设施、安全与治理", "培训、运维与持续改善"]
      },
      {
        type: "quote",
        label: "Start with one problem",
        text: "没有完全对应的行业，也不意味着无法合作。可以从一个具体流程、系统或现场问题开始。"
      }
    ],
    related: ["capabilities", "cases", "contact"]
  },

  "industry-manufacturing": {
    nav: "industries",
    eyebrow: "Manufacturing & Logistics",
    title: "让现场看得见、连得上、能够持续改善",
    description: "连接生产、仓储、品质、设备与现场运营，让ERP、MES、WMS和IoT数据进入决策与执行，再逐步引入AI、自动化和机器人。",
    heroImage: "city-wide.jpg",
    cta: ["讨论现场课题", "contact/"],
    lead: "让数据真正进入决策与执行，逐步引入AI、自动化和机器人。",
    sections: [
      {
        type: "cards",
        index: "01 / Common challenges",
        title: "客户常见课题",
        columns: 3,
        items: [
          { title: "纸质与手工记录多", text: "容易出错，难以实时共享，信息汇总耗时。" },
          { title: "账实库存不一致", text: "ERP理论库存与实物库存存在偏差，影响计划和交付。" },
          { title: "现场状态不可视", text: "生产、设备与品质状态缺少实时可视化。" },
          { title: "知识依赖少数人员", text: "经验分散在人员、文件和历史项目中。" },
          { title: "重复作业依赖人工", text: "设备停机、搬运、检查与录入占用大量时间。" },
          { title: "系统与流程割裂", text: "多系统并存，数据重复录入，异常处理难以闭环。" }
        ]
      },
      {
        type: "split",
        index: "02 / Scenarios",
        title: "场景与解决方案",
        text: "从生产执行、仓储物流到品质、设备与现场知识，我们按实际场景组合系统、数据、AI和自动化能力。",
        image: "precise-city.jpg",
        bullets: ["生产执行与计划：MES、APS、BOM、WIP与负荷分析", "仓储与物流：WMS、ERP、PDA、RFID、AGV/AMR", "品质与追溯：检查、批次、异常、履历与AI视觉", "设备与保全：IoT、监控、点检与预测性维护", "知识与人员：SOP、手册、培训、知识库与Copilot"]
      },
      {
        type: "timeline",
        index: "03 / Step by step",
        title: "分阶段推进",
        items: [
          { year: "01", title: "数字化基础", text: "消除纸质、统一数据、建立追溯。" },
          { year: "02", title: "可视化与分析", text: "实时掌握进度、库存、品质和设备。" },
          { year: "03", title: "AI辅助", text: "知识检索、自然语言查询、异常预测和决策支持。" },
          { year: "04", title: "自动化与机器人", text: "连接任务、系统、设备与现场执行。" }
        ]
      }
    ],
    related: ["case-smart-warehouse", "case-agv-kitting", "capabilities-manufacturing"]
  },

  "industry-enterprise": {
    nav: "industries",
    eyebrow: "Enterprise Operations",
    title: "把AI带入知识、文档和业务流程",
    description: "将AI、低代码、业务系统和数据分析结合，缩短处理时间、提升一致性，并保留必要的人工复核和责任机制。",
    heroImage: "office-exact-clean.jpg",
    cta: ["讨论一个业务流程", "contact/"],
    lead: "让AI承担准备工作，让专业人员专注于<em>判断与责任</em>。",
    sections: [
      {
        type: "cards",
        index: "01 / Typical scenarios",
        title: "典型场景",
        columns: 3,
        items: [
          { title: "知识管理", text: "制度、产品、项目、客户和专业知识的统一检索与问答。" },
          { title: "复杂文档业务", text: "资料提取、比较、翻译、草稿生成、校验与审批。" },
          { title: "客户服务", text: "CRM、联络中心、FAQ、回复辅助和服务质量分析。" },
          { title: "人事与招聘", text: "履历整理、岗位匹配、面试准备和员工服务。" },
          { title: "财务与经营管理", text: "预算、预实、合同、报表与经营分析。" },
          { title: "业务流程自动化", text: "低代码、RPA、Agent与既有系统协同。" }
        ]
      },
      {
        type: "split",
        index: "02 / Human + AI",
        title: "人与AI如何分工",
        text: "AI适合承担资料检索、信息提取、分类、草稿生成和标准任务；专业人员负责规则设定、复杂判断、例外处理、审批和最终责任。",
        image: "group.png",
        bullets: ["AI：检索、整理、提取、分类与生成", "人员：规则、判断、沟通、审批与责任", "系统：权限、数据、流程、日志与操作界面", "运营：评测、反馈、知识更新与持续改善"]
      },
      {
        type: "cases",
        index: "03 / Representative cases",
        title: "代表案例",
        items: [
          { title: "医药估算合同生成", text: "多智能体与人工复核协作处理复杂文档。", image: "data-18.jpg", tags: ["Document AI", "Human-in-the-loop"], href: "cases/pharma-budget-contract-generation/" },
          { title: "招聘履历整理器", text: "从资料整理到岗位判断的智能辅助。", image: "office-team.jpg", tags: ["HR", "Agent"] },
          { title: "预算与经营分析", text: "连接数据、业务规则与管理判断。", image: "data-monitor.jpg", tags: ["BI", "Workflow"] }
        ]
      }
    ],
    related: ["case-pharma-contract", "case-outsystems", "case-bi-analytics"]
  },

  "industry-it": {
    nav: "industries",
    eyebrow: "IT & Infrastructure",
    title: "从基础设施运营，走向智能运维",
    description: "提供云、网络、服务器、安全、服务台和长期运维，并结合知识库、日志分析、任务编排与运维智能体。",
    heroImage: "data-clean.jpg",
    cta: ["讨论IT运营课题", "contact/"],
    lead: "减少重复工作，提升响应质量和知识复用，同时守住安全与生产责任。",
    sections: [
      {
        type: "cards",
        index: "01 / Common challenges",
        title: "典型课题",
        columns: 3,
        items: [
          { title: "告警与日志数量巨大", text: "排查依赖少数专家，响应速度和质量波动。" },
          { title: "运维知识分散", text: "人员变化带来知识断层与业务风险。" },
          { title: "标准操作重复", text: "大量工作仍需人工检索、判断和执行。" },
          { title: "AI环境难以管理", text: "GPU、模型、权限、账号和成本缺少统一治理。" },
          { title: "跨区域服务复杂", text: "跨语言、跨时区与现场支持需要稳定体制。" },
          { title: "安全要求持续提高", text: "数据、密钥、日志、审批和审计需要形成闭环。" }
        ]
      },
      {
        type: "split",
        index: "02 / Combined solution",
        title: "建设、运营与智能化一体",
        text: "从基础设施建设开始，建立监控、安全、服务台与长期运营体制，再逐步把知识、日志和标准任务接入智能体。",
        image: "data-system.jpg",
        bullets: ["基础设施建设：网络、服务器、数据库、云与混合环境", "运营与服务台：监控、工单、SLA、双语支援", "AI基础设施：GPU、模型平台、账号与成本", "智能运维：知识、日志、工具与任务编排", "安全治理：权限、密钥、审计、复核与责任"]
      },
      {
        type: "cases",
        index: "03 / Representative cases",
        title: "代表案例",
        items: [
          { title: "IT运维智能体平台", text: "把知识和工具接入运维任务。", image: "data-lattice.jpg", tags: ["Agent", "AIOps"], href: "cases/it-operations-agent-platform/" },
          { title: "网络与服务器长期运维", text: "以稳定体制支持大型客户持续运营。", image: "office-entry.jpg", tags: ["Managed Service", "Bilingual"] },
          { title: "AI / GPU服务器建设", text: "为本地AI提供可管理的运行环境。", image: "cloud.jpg", tags: ["Private AI", "Infrastructure"] }
        ]
      }
    ],
    related: ["case-it-operations-agent", "case-sap-managed", "capabilities-cloud"]
  },

  cases: {
    nav: "cases",
    eyebrow: "Case Stories",
    title: "从真实业务问题，到可验证的改善",
    description: "每一个案例都围绕客户问题、解决方式、系统连接、人机协作和实际结果展开。",
    heroImage: "hero-cases-from-film.jpg",
    cta: ["查找相近经验", "#case-list"],
    lead: "先讲清楚客户的问题与改变，再说明技术如何进入流程。",
    sections: [
      {
        id: "case-list",
        type: "cases",
        filter: true,
        index: "01 / Case library",
        title: "首批代表案例",
        items: [
          { title: "制造企业本地知识库", text: "让品质、制造和设备知识可检索、可复用。", image: "data-22.jpg", tags: ["制造与物流", "AI应用"], href: "cases/manufacturing-knowledge/" },
          { title: "MES辅助查询 Copilot", text: "用自然语言查询和分析MES数据。", image: "data-monitor.jpg", tags: ["制造与物流", "AI应用"], href: "cases/mes-query-copilot/" },
          { title: "医药估算合同生成", text: "多智能体与人工复核结合处理复杂文档。", image: "data-18.jpg", tags: ["企业运营", "AI应用"], href: "cases/pharma-budget-contract-generation/" },
          { title: "IT运维智能体平台", text: "把知识、工具和任务编排接入运维流程。", image: "data-lattice.jpg", tags: ["IT与基础设施", "云与运维"], href: "cases/it-operations-agent-platform/" },
          { title: "智能仓储与无纸化", text: "连接WMS、ERP、PDA、RFID与现场作业。", image: "city-rail.jpg", tags: ["制造与物流", "数字工程"], href: "cases/smart-warehouse-paperless/" },
          { title: "AGV与配膳管理", text: "通过系统、校验与调度改善现场搬运。", image: "city-c.jpg", tags: ["制造与物流", "机器人"], href: "cases/agv-kitting-management/" },
          { title: "OutSystems业务平台", text: "以低代码快速建设并持续演进业务系统。", image: "office-team.jpg", tags: ["企业运营", "数字工程"], href: "cases/outsystems-business-platform/" },
          { title: "SAP长期运维", text: "连接中日团队与外围系统，持续支撑核心业务。", image: "office-entry.jpg", tags: ["IT与基础设施", "数字工程"], href: "cases/sap-long-term-managed-services/" },
          { title: "BI经营分析", text: "连接销售、物流与财务数据，辅助经营判断。", image: "data-14.jpg", tags: ["企业运营", "数据分析"], href: "cases/bi-management-analytics/" }
        ]
      },
      {
        type: "quote",
        label: "Demo note",
        text: "演示版中的案例名称与结果口径用于说明信息结构；正式发布前需完成客户授权、数字核实与保密审查。"
      }
    ],
    related: ["case-mes-copilot", "case-smart-warehouse", "case-it-operations-agent"]
  },

  "case-detail": {
    nav: "cases",
    eyebrow: "Case / Manufacturing Knowledge",
    title: "将分散的制造经验，转化为可检索的企业知识",
    description: "本地部署模型与企业知识库结合，在保证数据安全的前提下，为品质、制造与设备咨询提供统一入口。",
    heroImage: "data-22.jpg",
    cta: ["讨论相似场景", "contact/"],
    lead: "知识不再只存在于文件夹和少数专家的记忆中。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "客户场景", text: "制造企业 / 品质、制造与设备知识管理。" },
          { title: "原有问题", text: "文件分散、检索耗时、经验难以传承。" },
          { title: "解决方式", text: "本地模型、企业知识库、权限与来源引用。" },
          { title: "项目阶段", text: "演示版示例；实际状态与结果发布前核实。" }
        ]
      },
      {
        type: "split",
        index: "02 / The challenge",
        title: "从“资料很多”到“知识可用”",
        text: "客户的制度、品质案例、设备资料和制造经验分散在不同文件与人员中。查找耗时，答案口径不一，新人需要较长时间才能熟悉现场知识。",
        image: "data-13.jpg",
        bullets: ["多种文档格式与历史资料", "品质、设备与制造知识相互关联", "数据不能进入外部公共环境", "答案需要来源引用与人工确认"]
      },
      {
        type: "timeline",
        index: "03 / Implementation",
        title: "实施过程",
        items: [
          { year: "01", title: "场景与资料盘点", text: "确认使用者、问题类型、文档范围和安全边界。" },
          { year: "02", title: "知识加工与PoC", text: "清理、切分、标注资料，验证检索与回答质量。" },
          { year: "03", title: "本地环境与权限", text: "建设本地运行环境，接入账号、权限和日志。" },
          { year: "04", title: "界面与流程集成", text: "提供统一入口、来源引用、反馈与知识维护机制。" },
          { year: "05", title: "评测与运营", text: "持续评估准确性、使用情况、成本和知识新鲜度。" }
        ]
      },
      {
        type: "quote",
        label: "Human-in-the-loop",
        text: "AI负责快速检索与组织答案，专业人员负责关键判断、例外处理和最终责任。"
      }
    ],
    related: ["capabilities-ai", "industry-manufacturing", "cases"]
  },

  "case-mes-copilot": {
    nav: "cases",
    eyebrow: "Case / MES Copilot",
    title: "让MES数据查询，进入自然语言工作流",
    description: "围绕MES数据结构、业务规则与授权查询，构建可理解问题、检索依据并返回结果的辅助查询入口。",
    heroImage: "data-monitor.jpg",
    cta: ["讨论相似的制造数据场景", "contact/"],
    lead: "不是绕过MES，而是让人员用更自然的方式进入已有数据与规则。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "制造现场 / MES数据查询与分析辅助。" },
          { title: "原有课题", text: "字段与查询方式专业，业务人员获取信息依赖熟练用户。" },
          { title: "解决方式", text: "数据结构整理、RAG规则检索、MCP编排与授权查询。" },
          { title: "内容状态", text: "案例初稿；项目阶段、用户规模与量化结果发布前确认。" }
        ]
      },
      {
        type: "split",
        index: "02 / The challenge",
        title: "让问题表达与MES数据结构对齐",
        text: "业务人员关心的是进度、异常和设备状态，而MES保存的是表、字段、编码和规则。项目首先需要把自然语言问题转换为可控的数据查询，并保留权限与业务口径。",
        image: "data-system.jpg",
        bullets: ["整理MES对象、字段关系与业务术语", "检索规则、口径和历史问题", "按授权范围编排查询工具", "返回结果、依据与必要的解释", "保留日志、异常与人工确认"]
      },
      {
        type: "timeline",
        index: "03 / Implementation",
        title: "从数据盘点到可验证查询",
        items: [
          { year: "01", title: "问题与数据盘点", text: "确认高频问题、用户角色、数据来源和权限边界。" },
          { year: "02", title: "术语与规则整理", text: "建立业务语言、MES字段和计算口径之间的对应关系。" },
          { year: "03", title: "RAG与工具编排", text: "组合知识检索、参数生成和授权查询能力。" },
          { year: "04", title: "界面与系统连接", text: "把辅助查询入口嵌入可使用的业务界面。" },
          { year: "05", title: "评测与改善", text: "持续检查查询正确性、使用效果和人工介入情况。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "页面只呈现已有资料能够支持的技术构成；效率、用户数与生产运行情况待项目负责人确认。"
      }
    ],
    related: ["capabilities-ai", "capabilities-manufacturing", "industry-manufacturing"]
  },

  "case-pharma-contract": {
    nav: "cases",
    eyebrow: "Case / Document AI",
    title: "让复杂估算与合同草稿，进入可复核流程",
    description: "通过多智能体处理研究资料、预算与合同内容，在关键节点保留专业人员复核与最终责任。",
    heroImage: "data-18.jpg",
    cta: ["讨论复杂文档业务", "contact/"],
    lead: "AI承担资料理解、整理与初稿，专业人员负责规则、判断和批准。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "医药专业服务 / 估算与合同文档生成。" },
          { title: "原有课题", text: "资料复杂、规则多、跨文档核对耗时，且必须保持合规。" },
          { title: "解决方式", text: "多智能体分工、结构化抽取、草稿生成和Human-in-the-Loop。" },
          { title: "内容状态", text: "案例初稿；效率、准确率和合规口径发布前统一确认。" }
        ]
      },
      {
        type: "split",
        index: "02 / Human + AI",
        title: "把复杂任务拆成可检查的步骤",
        text: "项目没有让一个模型一次生成最终合同，而是把资料解析、条件抽取、预算组织、合同草稿和校验拆分为不同任务，在关键节点交由专业人员复核。",
        image: "precise-data.jpg",
        bullets: ["读取并整理研究资料与业务条件", "抽取关键字段、限制与缺失信息", "生成预算和合同结构化草稿", "对照规则进行一致性检查", "专业人员复核、修订与批准"]
      },
      {
        type: "timeline",
        index: "03 / Workflow",
        title: "从资料输入到人工批准",
        items: [
          { year: "01", title: "资料接收与分类", text: "识别文档类型、版本和必要输入。" },
          { year: "02", title: "信息抽取与校验", text: "提取关键条件并标记缺失、冲突和不确定内容。" },
          { year: "03", title: "多智能体协作", text: "分别处理估算、条款、生成和检查任务。" },
          { year: "04", title: "人工复核", text: "专业人员确认业务判断、合规要求和最终文本。" },
          { year: "05", title: "反馈与模板改善", text: "把修订结果反馈到规则、Prompt和知识资产中。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "现有资料中的90%、150%与450小时来自不同口径，未完成核实前不在页面组合为确定性成果。"
      }
    ],
    related: ["capabilities-ai", "industry-enterprise", "quality"]
  },

  "case-it-operations-agent": {
    nav: "cases",
    eyebrow: "Case / AIOps Agent",
    title: "把知识、监控与工具，接入统一运维入口",
    description: "以智能体平台连接运维知识、监控信息和标准工具，辅助人员理解任务、获得建议并执行可控操作。",
    heroImage: "data-lattice.jpg",
    cta: ["讨论智能运维场景", "contact/"],
    lead: "让重复任务更快完成，同时保留权限、审批、回滚和关键操作责任。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "IT基础设施 / 运维知识与标准任务。" },
          { title: "原有课题", text: "入口分散、知识依赖专家、告警与重复操作占用时间。" },
          { title: "解决方式", text: "统一入口、知识检索、任务编排、监控与工具连接。" },
          { title: "内容状态", text: "案例初稿；生产状态、任务量和成功率发布前确认。" }
        ]
      },
      {
        type: "split",
        index: "02 / Platform",
        title: "先理解任务，再调用被授权的工具",
        text: "智能体根据人员请求和监控信息检索知识，生成处理建议，并在权限允许的范围内调用标准工具。高风险操作继续经过人工确认和审批。",
        image: "cloud.jpg",
        bullets: ["统一接收咨询、告警与标准任务", "检索SOP、历史工单和环境知识", "分析日志与运行状态", "编排脚本、API和运维工具", "记录审批、执行、结果与回滚"]
      },
      {
        type: "timeline",
        index: "03 / Operating loop",
        title: "形成可运营的任务闭环",
        items: [
          { year: "01", title: "任务分级", text: "定义可建议、可自动执行和必须人工处理的任务。" },
          { year: "02", title: "知识与工具接入", text: "连接文档、工单、监控、脚本和系统接口。" },
          { year: "03", title: "权限与审批", text: "按用户、环境和操作风险设置执行边界。" },
          { year: "04", title: "执行与回滚", text: "记录参数、过程、结果和异常处理。" },
          { year: "05", title: "评测与运营", text: "持续观察任务成功率、人工介入和知识更新。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "候选效率指标只作为内部评估线索；生产化状态、安全机制和运行数据确认后再对外使用。"
      }
    ],
    related: ["capabilities-cloud", "industry-it", "quality"]
  },

  "case-smart-warehouse": {
    nav: "cases",
    eyebrow: "Case / Smart Warehouse",
    title: "连接WMS、ERP与现场作业，形成可追溯闭环",
    description: "以WMS为业务核心，连接ERP、PDA、条码与现场流程，减少纸质操作并提升库存与作业信息的一致性。",
    heroImage: "city-rail.jpg",
    cta: ["讨论仓储与无纸化场景", "contact/"],
    lead: "让入库、出库、盘点和追溯，不再依赖分散表格与人工传递。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "制造与物流 / 仓储管理与现场无纸化。" },
          { title: "原有课题", text: "纸质作业、重复录入、账实差异与追溯困难。" },
          { title: "解决方式", text: "WMS、ERP联动、PDA、条码与标准现场流程。" },
          { title: "内容状态", text: "A/B级素材；ROI、工时和回收期归属仍需核实。" }
        ]
      },
      {
        type: "split",
        index: "02 / Connected floor",
        title: "让系统数据与仓库动作同步",
        text: "项目把ERP中的业务计划与WMS作业连接起来，再通过PDA和条码把任务送到现场、把执行结果及时带回系统。",
        image: "precise-city.jpg",
        bullets: ["ERP与WMS间的计划、库存和实绩联动", "收货、上架、拣配、出库与盘点流程", "PDA和条码支持现场确认", "批次、库位与操作履历追溯", "异常、差异与补正形成闭环"]
      },
      {
        type: "timeline",
        index: "03 / Implementation",
        title: "从流程标准化到现场闭环",
        items: [
          { year: "01", title: "现状与差异盘点", text: "梳理账、物、单据和人员操作之间的差异。" },
          { year: "02", title: "流程与主数据设计", text: "统一物料、库位、批次和作业规则。" },
          { year: "03", title: "系统与终端建设", text: "连接ERP、WMS、PDA与条码设备。" },
          { year: "04", title: "现场导入", text: "培训人员、验证异常流程并逐步替代纸质作业。" },
          { year: "05", title: "指标与持续改善", text: "观察库存一致性、操作时间和追溯效果。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "现有资料包含ROI、工时和回收期候选数据，正式展示前需确认这些数字属于同一项目并取得客户授权。"
      }
    ],
    related: ["capabilities-manufacturing", "industry-manufacturing", "case-agv-kitting"]
  },

  "case-agv-kitting": {
    nav: "cases",
    eyebrow: "Case / AGV & Kitting",
    title: "让计划、配膳、校验与搬运形成系统闭环",
    description: "通过计划数据、配膳管理、多层校验和AGV调度连接物料准备与现场搬运，降低错配和重复确认。",
    heroImage: "city-c.jpg",
    cta: ["讨论AGV与现场集成", "contact/"],
    lead: "机器人落地不仅是设备导入，更需要业务规则、系统与异常处理共同工作。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "制造现场 / 配膳、校验与夜间搬运。" },
          { title: "原有课题", text: "物料准备依赖人工确认，错配风险与搬运负担并存。" },
          { title: "解决方式", text: "计划联动、配膳管理、四层校验、调度与AGV执行。" },
          { title: "内容状态", text: "案例初稿；公司承担范围、上线状态与运行指标待确认。" }
        ]
      },
      {
        type: "split",
        index: "02 / System + Robot",
        title: "从任务来源一直连接到现场执行",
        text: "上位系统生成物料需求，配膳系统组织任务并进行多层校验，调度系统再把确认后的搬运任务交给AGV执行，同时处理异常和人工介入。",
        image: "city-wide.jpg",
        bullets: ["计划与物料需求形成任务来源", "配膳、容器、工位和时间窗口管理", "多层校验减少错料与错送", "调度系统连接AGV执行端", "异常、暂停、恢复与人工接管"]
      },
      {
        type: "timeline",
        index: "03 / Operation flow",
        title: "让物料流动可计划、可校验、可追踪",
        items: [
          { year: "01", title: "任务生成", text: "从生产计划和物料需求生成配膳任务。" },
          { year: "02", title: "备料与校验", text: "按工位、批次和容器完成准备与多层确认。" },
          { year: "03", title: "调度与搬运", text: "根据优先级、路线和现场状态分配AGV。" },
          { year: "04", title: "到达与交接", text: "确认工位、物料和任务状态。" },
          { year: "05", title: "异常闭环", text: "处理阻塞、缺料、设备异常和人工接管。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "50工位夜间搬运场景与其他室外AGV运行数据属于不同材料，页面不把两组数据合并。"
      }
    ],
    related: ["capabilities-manufacturing", "industry-manufacturing", "case-smart-warehouse"]
  },

  "case-outsystems": {
    nav: "cases",
    eyebrow: "Case / Low-code Platform",
    title: "把分散的Excel预算流程，整合为统一业务平台",
    description: "以OutSystems建设预算与预实管理平台，统一数据、流程和权限，并支持后续业务持续演进。",
    heroImage: "office-team.jpg",
    cta: ["讨论低代码与业务系统", "contact/"],
    lead: "低代码的价值不只是开发更快，而是让分散流程形成可运营的系统。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "企业运营 / 预算与预实管理。" },
          { title: "原有课题", text: "Excel分散、版本不一、汇总复杂，难以及时掌握经营变化。" },
          { title: "解决方式", text: "OutSystems、统一数据、流程权限和管理界面。" },
          { title: "内容状态", text: "B级素材；用户规模、流程范围与量化结果待确认。" }
        ]
      },
      {
        type: "split",
        index: "02 / Business platform",
        title: "统一数据，也统一业务动作",
        text: "项目不仅把Excel搬到网页，而是重新梳理预算编制、调整、审批、实绩导入和差异确认，让每个角色在同一套流程和数据口径中工作。",
        image: "office-exact-clean.jpg",
        bullets: ["预算编制、版本和期间管理", "审批、权限与角色控制", "实绩数据导入与预实比较", "提醒、查询和管理视图", "低代码平台上的持续迭代"]
      },
      {
        type: "timeline",
        index: "03 / Delivery",
        title: "从分散表格到持续演进平台",
        items: [
          { year: "01", title: "流程与表格盘点", text: "识别参与角色、版本、公式和审批路径。" },
          { year: "02", title: "数据与权限设计", text: "统一数据模型、角色和业务规则。" },
          { year: "03", title: "低代码快速建设", text: "分阶段完成核心页面、流程和接口。" },
          { year: "04", title: "导入与验证", text: "迁移必要数据并与业务用户共同验证。" },
          { year: "05", title: "运营与扩展", text: "根据使用反馈持续改进流程和分析能力。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "现有资料可支持技术栈、项目期间和业务变化；用户规模与量化成效需在发布前补充。"
      }
    ],
    related: ["capabilities-digital", "industry-enterprise", "case-bi-analytics"]
  },

  "case-sap-managed": {
    nav: "cases",
    eyebrow: "Case / SAP Managed Service",
    title: "以稳定团队支撑多据点SAP长期运行与改善",
    description: "连接中国、日本及海外据点团队，围绕SAP模块、外围系统和日常运维形成持续服务与改善机制。",
    heroImage: "office-entry.jpg",
    cta: ["讨论核心系统长期运维", "contact/"],
    lead: "长期运维不是保持不变，而是在稳定运行的基础上持续理解并改善业务。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "企业核心系统 / SAP长期运维。" },
          { title: "原有课题", text: "跨区域、跨语言、多模块和外围系统需要稳定协作。" },
          { title: "解决方式", text: "固定团队、双语沟通、工单、变更和持续改善。" },
          { title: "内容状态", text: "A/B级素材；当前合同、公开年限、SLA与工单数据待确认。" }
        ]
      },
      {
        type: "split",
        index: "02 / Managed service",
        title: "把业务理解留在长期服务团队中",
        text: "团队持续处理咨询、故障、变更和外围系统联动，在跨据点沟通中沉淀业务知识，使问题解决不只依赖个别人员。",
        image: "team-exact-clean.jpg",
        bullets: ["中日双语咨询与需求沟通", "SAP模块与外围系统支援", "工单、问题、变更与发布管理", "知识、文档和标准操作沉淀", "跨据点协作与持续改善提案"]
      },
      {
        type: "timeline",
        index: "03 / Service cycle",
        title: "稳定运行与持续改善并行",
        items: [
          { year: "01", title: "受理与分级", text: "确认影响范围、优先级和责任团队。" },
          { year: "02", title: "分析与处理", text: "结合系统、业务和历史知识定位问题。" },
          { year: "03", title: "测试与变更", text: "对修复和改善进行评审、测试与发布控制。" },
          { year: "04", title: "知识沉淀", text: "更新文档、FAQ、操作手册和交接内容。" },
          { year: "05", title: "改善提案", text: "从重复问题和业务变化中识别优化机会。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "资料可支持团队体制、服务模块、据点和长期改善故事；对外年限及当前合同状态需再次核实。"
      }
    ],
    related: ["capabilities-digital", "capabilities-cloud", "industry-it"]
  },

  "case-bi-analytics": {
    nav: "cases",
    eyebrow: "Case / BI Analytics",
    title: "统一经营数据口径，让月度分析更及时可靠",
    description: "连接销售、物流和财务数据，减少人工汇总与重复核对，为经营判断提供一致的分析视图。",
    heroImage: "data-14.jpg",
    cta: ["讨论数据与经营分析", "contact/"],
    lead: "报表自动化只是第一步，更重要的是让不同部门围绕同一套数据理解业务。",
    sections: [
      {
        type: "cards",
        index: "01 / Project snapshot",
        title: "案例概览",
        columns: 4,
        items: [
          { title: "业务场景", text: "企业运营 / 月度经营分析。" },
          { title: "原有课题", text: "数据来源分散、口径不一、人工汇总和核对耗时。" },
          { title: "解决方式", text: "数据整合、口径统一、BI视图与月度报告自动化。" },
          { title: "内容状态", text: "B级素材；制作时间前后对比、用户与报表规模待确认。" }
        ]
      },
      {
        type: "split",
        index: "02 / One view",
        title: "从数据准备走向经营判断",
        text: "项目将销售、物流和财务等数据按统一规则整合，自动形成经营视图和月度报告，让人员把更多时间用于分析差异与讨论行动。",
        image: "data-clean.jpg",
        bullets: ["连接多个业务数据来源", "统一指标定义、期间和组织口径", "自动更新经营分析视图", "支持月度报告和差异分析", "保留数据追溯与异常核对"]
      },
      {
        type: "timeline",
        index: "03 / Data to decision",
        title: "让数据从汇总走向行动",
        items: [
          { year: "01", title: "指标与口径确认", text: "明确经营问题、指标定义和责任部门。" },
          { year: "02", title: "数据连接与清理", text: "整合来源并处理缺失、重复和格式差异。" },
          { year: "03", title: "模型与视图建设", text: "建立可复用的数据模型和分析页面。" },
          { year: "04", title: "报告自动化", text: "按月生成必要视图并保留核对机制。" },
          { year: "05", title: "使用与改善", text: "根据管理讨论持续调整指标和呈现方式。" }
        ]
      },
      {
        type: "quote",
        label: "Evidence boundary",
        text: "现有资料支持月度报告制作缩短和人工错误减少的定性结论；具体时长与使用规模待确认。"
      }
    ],
    related: ["capabilities-digital", "industry-enterprise", "case-outsystems"]
  },

  about: {
    nav: "about",
    eyebrow: "About TCI Suzhou",
    title: "扎根中国，连接日本与全球的数字工程伙伴",
    description: "苏州大宇宙成立于2008年，是transcosmos集团在华东地区的IT服务据点。",
    heroImage: "team-exact-clean.jpg",
    cta: ["了解我们的进化", "#history"],
    lead: "从软件开发和基础设施服务起步，持续深入制造、物流和企业运营，并正把AI融入人员、流程与客户解决方案。",
    sections: [
      {
        type: "cards",
        index: "01 / Company profile",
        title: "公司概况",
        columns: 3,
        items: [
          { title: "苏州大宇宙信息创造有限公司", text: "成立于2008年10月，transcosmos集团在华东地区的重要IT服务据点。" },
          { title: "苏州 · 上海 · 常州", text: "三个协同据点，贴近长三角制造业、日系客户与跨区域项目。" },
          { title: "约265人", text: "演示版沿用2026年6月规划数据，正式发布前需再次核实。" },
          { title: "People & Technology", text: "以人的专业判断、AI能力与工程技术创造持续业务价值。" },
          { title: "ISO27001", text: "以信息安全管理体系支撑客户资料与生产环境的安全要求。" },
          { title: "CMMI3", text: "以成熟的软件工程、项目管理和质量机制支撑长期交付。" }
        ]
      },
      {
        id: "history",
        type: "timeline",
        index: "02 / Our evolution",
        title: "从数字化基础走向AI与Physical AI",
        items: [
          { year: "2008起", title: "软件开发与IT基础服务", text: "建立自有开发、基础设施与日系客户支援能力。" },
          { year: "2009起", title: "工厂与办公室业务系统", text: "深入制造与企业运营的真实工作流程。" },
          { year: "2015起", title: "制造可视化、IoT与设备连接", text: "让现场数据进入系统、管理与持续改善。" },
          { year: "2021起", title: "无纸化、自动化与AGV实践", text: "连接数字系统与现场执行。" },
          { year: "2024起", title: "生成式AI与智能体", text: "推动AI增强开发、业务与运维。" },
          { year: "面向未来", title: "机器人与Physical AI", text: "连接软件系统、现场数据、设备与全球伙伴。" }
        ]
      },
      {
        type: "quote",
        label: "People & Technology, evolved",
        text: "AI不会取代专业责任，而会改变人们理解信息、做出判断和完成工作的方式。"
      }
    ],
    related: ["ai-transformation", "quality", "global"]
  },

  "ai-transformation": {
    nav: "about",
    eyebrow: "AI Transformation",
    title: "我们不仅为客户导入AI，也用AI重新塑造自己",
    description: "通过AI卓越中心统筹工具平台、人才培养、使用治理、场景实践和资产沉淀。",
    heroImage: "precise-team.jpg",
    cta: ["了解客户AI服务", "capabilities/ai/"],
    lead: "每一次内部实践都转化为可复用的方法、模板、案例和服务能力。",
    sections: [
      {
        type: "cards",
        index: "01 / Five pillars",
        title: "五项建设",
        columns: 3,
        items: [
          { title: "工具与平台", text: "企业级AI工具、模型、知识库、智能体平台与运行环境。" },
          { title: "人才与认知", text: "未来塾、培训、开发者能力和AI骨干网络。" },
          { title: "规则与治理", text: "模型使用、客户数据、代码、账号、权限、日志和人工确认。" },
          { title: "场景实践", text: "研发、测试、运维、营业、管理与客户解决方案。" },
          { title: "资产与复用", text: "案例、Prompt、Agent、知识模板、组件与PoC方法。" }
        ]
      },
      {
        type: "split",
        index: "02 / Learning loop",
        title: "从内部实践到客户价值",
        text: "内部实践让团队理解AI在真实流程中的限制、成本和治理要求；客户项目则推动行业知识、系统集成和运营能力沉淀。两者形成持续进化的循环。",
        image: "team-2255.jpg",
        bullets: ["内部效率与AI增强开发", "行业场景与客户PoC", "治理、评测与运营经验", "方法、模板与组件沉淀", "人才成长与跨团队复用"]
      },
      {
        type: "quote",
        label: "AI + Professional",
        text: "让AI承担信息整理、检索、分析与初稿，让专业人员专注判断、复核、沟通与最终责任。"
      }
    ],
    related: ["capabilities-ai", "about", "quality"]
  },

  quality: {
    nav: "about",
    eyebrow: "Quality & Security",
    title: "以工程品质和安全治理，支撑持续创新",
    description: "AI和数字化项目越深入业务，越需要明确的过程、权限、数据边界和责任机制。",
    heroImage: "precise-labyrinth.jpg",
    cta: ["讨论安全与治理要求", "contact/"],
    lead: "创新建立在可控、可审计和可持续的工程基础之上。",
    sections: [
      {
        type: "cards",
        index: "01 / Engineering quality",
        title: "品质管理",
        columns: 4,
        items: [
          { title: "流程与PDCA", text: "流程标准化、质量指标、复盘与持续改善。" },
          { title: "项目评审与PMO", text: "里程碑、风险、缺陷、变更和项目健康度管理。" },
          { title: "测试与自动化", text: "从需求到运维的测试设计、执行与质量责任。" },
          { title: "知识与资产", text: "知识库、模板、组件和生产率评估。" }
        ]
      },
      {
        type: "cards",
        index: "02 / Information security",
        title: "信息安全",
        columns: 3,
        items: [
          { title: "环境与网络隔离", text: "开发与办公网络、客户工位、外网与介质控制。" },
          { title: "权限与审计", text: "账号、密码、访问、出入、打印、监控和日志。" },
          { title: "客户数据保护", text: "保密协议、资料边界、云与基础设施安全支援。" }
        ]
      },
      {
        type: "split",
        index: "03 / AI governance",
        title: "AI治理进入每一个关键环节",
        text: "从模型和工具选择，到数据输入、权限、调用、人工确认与持续评测，我们让AI使用能够被说明、被追踪、被控制。",
        image: "data-system.jpg",
        bullets: ["模型使用：适用范围、企业账号与审批", "数据边界：客户资料、代码、密钥与机密信息", "人工确认：复核、审批、例外与最终责任", "权限审计：API Key、Token、日志、费用和记录", "持续评测：成功率、介入率、时间、成本与风险"]
      }
    ],
    related: ["capabilities-cloud", "ai-transformation", "contact"]
  },

  global: {
    nav: "about",
    eyebrow: "Global Network",
    title: "连接中国创新、日本客户与全球业务",
    description: "依托transcosmos集团和中国服务网络，为跨区域、跨语言与跨系统项目提供协作基础。",
    heroImage: "city-clean.jpg",
    cta: ["探讨伙伴合作", "contact/"],
    lead: "扎根长三角，以集团网络连接客户、技术与伙伴。",
    sections: [
      {
        type: "cards",
        index: "01 / Network layers",
        title: "四个网络层次",
        columns: 4,
        items: [
          { title: "苏州与长三角", text: "苏州总公司、上海与常州分公司，贴近制造与日系客户。" },
          { title: "中国网络", text: "与大宇宙中国及各地服务据点协同。" },
          { title: "日本与集团", text: "连接日本总部、客户和transcosmos全球业务资源。" },
          { title: "技术与伙伴", text: "连接云、模型、低代码、IoT、算法、机器人与设备伙伴。" }
        ]
      },
      {
        type: "split",
        index: "02 / Partner model",
        title: "把不同优势组合成客户价值",
        text: "面向AI与机器人时代，我们持续连接模型、云、算法、设备和机器人伙伴，围绕真实客户场景形成联合能力。",
        image: "city-options.jpg",
        bullets: ["联合发现客户场景并开展PoC", "技术能力与行业、客户渠道组合", "共同开发面向日本或全球客户的方案", "共同承担系统集成、实施与持续运营"]
      },
      {
        type: "quote",
        label: "Expression boundary",
        text: "只公开已经确认的集团据点、合作伙伴和联合项目；正在拓展的合作保持清晰边界。"
      }
    ],
    related: ["about", "capabilities-manufacturing", "contact"]
  },

  insights: {
    nav: "insights",
    eyebrow: "Insights & News",
    title: "来自AI、工程与真实业务现场的实践洞察",
    description: "记录AI、智能制造、机器人、软件工程与运维实践中的方法、限制和案例，帮助客户判断新技术如何进入真实业务。",
    heroImage: "hero-insights-from-film.jpg",
    cta: ["浏览首批选题", "#insight-list"],
    lead: "帮助客户更清晰地判断，新技术如何进入业务。",
    sections: [
      {
        id: "insight-list",
        type: "articles",
        index: "01 / Editorial themes",
        title: "首批洞察选题",
        items: [
          { category: "AI实践", title: "AI导入真正昂贵的是什么：从工具成本到业务转型成本", text: "从流程、知识、数据、治理与组织采用理解AI项目的真实成本。" },
          { category: "AI实践", title: "企业智能体的三个核心：上下文、模型与工具", text: "解释Agent如何从对话进入业务执行。" },
          { category: "AI治理", title: "为什么严肃业务仍然需要人工复核", text: "Human-in-the-loop不是保守，而是生产化设计的一部分。" },
          { category: "智能制造", title: "从MES数据查询到MES Copilot", text: "自然语言如何进入制造数据与业务判断。" },
          { category: "机器人", title: "机器人落地不仅是设备导入", text: "任务、系统、调度、异常与人员协作同样重要。" },
          { category: "云与运维", title: "本地、云和混合AI部署如何选择", text: "从数据敏感性、性能、成本与运维要求出发。" },
          { category: "数字工程", title: "AI增强开发：变化的不只是编码效率", text: "需求、设计、测试、治理和团队方式都在变化。" },
          { category: "未来方向", title: "从数字智能体到Physical AI", text: "智能如何从数字工具进一步延伸到物理作业。" },
          { category: "公司动态", title: "苏州大宇宙AI卓越中心实践", text: "工具、人才、治理、场景与资产如何形成循环。" }
        ]
      }
    ],
    related: ["capabilities-ai", "capabilities-manufacturing", "ai-transformation"]
  },

  careers: {
    nav: "about",
    eyebrow: "Careers",
    title: "加入AI时代的数字工程团队",
    description: "AI正在进入开发、测试、运维、制造系统、业务咨询和项目交付。与跨领域团队共同解决真实客户问题。",
    heroImage: "team-clean.jpg",
    cta: ["查看工作领域", "#career-fields"],
    lead: "在真实业务与工程现场，成长为能够连接业务、AI与技术的复合型人才。",
    sections: [
      {
        id: "career-fields",
        type: "cards",
        index: "01 / Work fields",
        title: "工作领域",
        columns: 3,
        items: [
          { title: "AI应用与智能体", text: "知识库、文档智能、Agent、模型平台与业务集成。" },
          { title: "软件开发与低代码", text: "定制系统、OutSystems、SAP外围与系统现代化。" },
          { title: "制造IT与机器人集成", text: "MES、WMS、IoT、AGV/AMR与现场系统。" },
          { title: "云、基础设施与安全", text: "网络、服务器、云、GPU、服务台和智能运维。" },
          { title: "业务分析与项目管理", text: "场景发现、需求、PMO、交付与持续改善。" },
          { title: "中日跨境协作", text: "面向日系客户和集团项目的双语业务与工程沟通。" }
        ]
      },
      {
        type: "split",
        index: "02 / Growth",
        title: "成长支持",
        text: "通过内部学习、外部认证、跨事业部项目和知识资产复用，帮助人才从单一技术角色走向复合型工程与业务能力。",
        image: "team-2245.jpg",
        bullets: ["未来塾与AI内部分享", "外部培训和技术认证", "跨事业部项目与行业实践", "知识、模板和组件复用", "从开发、业务到交付的复合成长"]
      },
      {
        type: "quote",
        label: "Demo note",
        text: "演示版展示雇主品牌与职位信息结构；正式职位、地点、出差要求和申请入口需由招聘团队统一维护。"
      }
    ],
    related: ["about", "ai-transformation", "contact"]
  },

  contact: {
    nav: "contact",
    eyebrow: "Contact",
    title: "从一个具体问题或场景开始",
    description: "不需要准备完整需求。先告诉我们当前的问题和目标，我们将安排合适的业务与技术人员与您沟通。",
    heroImage: "selected-contact.jpg",
    cta: ["填写演示表单", "#contact-form"],
    lead: "无论是AI应用、业务系统、制造现场、云运维，还是机器人与伙伴合作，都可以先从一次对话开始。",
    sections: [
      {
        id: "contact-form",
        type: "contact"
      }
    ],
    related: ["capabilities-ai", "industry-manufacturing", "cases"]
  },

  privacy: {
    nav: "privacy",
    eyebrow: "Privacy & Legal",
    title: "清晰说明信息如何被收集、使用与保护",
    description: "演示版法律信息页面，用于说明正式网站上线所需的结构与内容范围。",
    heroImage: "office-clean.jpg",
    cta: ["查看页面结构", "#privacy-content"],
    lead: "联系表单只收集完成咨询所需的最少信息。",
    sections: [
      {
        id: "privacy-content",
        type: "legal"
      }
    ],
    related: ["contact", "quality", "about"]
  }
};
