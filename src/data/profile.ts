export const profile = {
  nickname: '一只菜菜的 Coder',
  tagline: 'Coding · Content · Curiosity',
  role: '全栈开发工程师 · 探索 AI 应用',
  location: '中国 · 合肥',
  email: '1294905541@qq.com',
  wechat: 'jqjhws',
  qq: '1294905541',
  github: {
    name: 'JQJHWS',
    url: 'https://github.com/JQJHWS',
  },
  brandSentence: '',
};

export const education = {
  school: '合肥经济学院',
  major: '软件工程',
  period: '2022.09 – 2026.06（本科）',
  gpa: '3.8 / 4.0',
  highlights: [
    '系统学习数据结构、算法、计算机网络、操作系统、数据库原理等核心课程',
    '多次获得校级及国家级奖学金',
  ],
};

export const growthTimeline = [
  {
    year: '大一 · 2022–2023',
    title: '夯实计算机与编程基础',
    items: [
      '系统学习计算机基础课程，打好理论地基',
      '学习 Python 数据可视化，掌握基础数据处理与分析能力',
    ],
  },
  {
    year: '大二 · 2023–2024',
    title: '走向项目与竞赛',
    items: [
      '深入前端开发技术，开始独立完成项目',
      '深入学习算法，参加编程比赛并获得蓝桥杯省级奖项',
      '通过大学英语四级（CET-4）',
      '取得工信部工业互联网平台开发工程师、华为 HarmonyOS 应用开发者高级、腾讯云微服务开发者等多项认证',
    ],
  },
  {
    year: '大三 · 2024–2025',
    title: '奖学金 · 软著 · 青训营',
    items: [
      '获得国家奖学金',
      '通过大学英语六级（CET-6，531 分）',
      '发表 3 项软件著作权（智慧校园与校园二手交易相关系统）',
      '参加字节跳动青训营，参与真实项目实践',
      '开始本地部署 AI 大模型，将 AI 融入项目实践',
    ],
  },
  {
    year: '大四 · 2025–2026',
    title: '毕业设计与深造',
    items: [
      '完成毕业设计与相关研究工作',
      '获得国家励志奖学金',
      '考取研究生，继续计算机与 AI 方向深造',
      '系统策划技术博客与内容输出，打造个人技术品牌',
    ],
  },
];

export const skills = {
  frontend: [
    'React / Vue / Next.js',
    'TypeScript / ES6+',
    '组件化与工程化实践',
    '动画与交互体验设计',
    'ECharts / D3.js 可视化',
  ],
  backend: ['Node.js / Express', 'Python / Go（了解）', '接口设计与鉴权', '基础业务建模与服务拆分'],
  data: ['MySQL / MongoDB / Redis', '数据建模与索引优化', '缓存与一致性意识'],
  devops: ['Docker 容器化', 'CI/CD 流程理解与实践', '云服务部署与环境管理'],
  others: ['Git 分支管理（git flow / feature）', '从产品体验出发审视工程实现', '将 AI 大模型融入实际业务'],
};

export const projects = [
  {
    name: '个人博客 / 个人网站平台',
    role: '全栈独立开发',
    period: '2024 – 2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Docker'],
    summary: '一个集中展示简历、证书、项目案例与技术文章的个人技术品牌网站。',
    highlights: [
      '前端采用多页路由 + 动效设计，支持暗色模式与视觉背景效果',
      '统一沉淀个人简历信息、证书、项目经历与技术文章，形成长期 IP 资产',
      '通过精细的动画与视觉设计平衡展示效果与性能表现',
    ],
  },
  {
    name: '智慧校园人像考勤管理系统',
    role: '全栈开发',
    period: '2024',
    stack: ['Vue.js', 'TypeScript', 'Element Plus'],
    summary: '面向校园场景的人像考勤管理系统，支持学生考勤录入、查询与统计。',
    highlights: [
      '基于 Vue + TypeScript 构建管理端界面，表单与表格组件化复用',
      '设计并实现完整的考勤业务流程，包括注册登录、记录管理与统计展示',
      '项目成果获得“智慧校区人像考勤管理系统”软件著作权证书',
    ],
  },
  {
    name: '校园二手交易市场管理平台',
    role: '独立开发',
    period: '2024',
    stack: ['React', 'ECharts', 'D3.js'],
    summary: '为校园场景设计的二手交易平台，支持商品发布、浏览、购买与数据可视化。',
    highlights: [
      '独立完成前端交互与页面设计，实现列表、详情、搜索与分类体验',
      '使用 ECharts / D3.js 对交易数据进行可视化呈现',
      '项目获得“校园二手交易市场管理平台”软件著作权证书',
    ],
  },
];

export const honors = [
  '国家奖学金',
  '国家励志奖学金',
  '蓝桥杯大赛省级奖项',
  '工信部工业互联网平台开发工程师证书',
  '华为 HarmonyOS 应用开发者高级认证',
  '腾讯云微服务开发者认证',
  '校园二手交易市场管理平台软件著作权',
  '智慧校区人像考勤管理系统软件著作权',
  '智慧校园学生校内考勤管理平台软件著作权',
];

export const certificates = [
  {
    id: 'national-scholarship',
    title: '国家奖学金',
    category: '奖学金与竞赛',
    description: '教育部授予的国家级奖学金，代表在学习成绩、综合素质与创新实践方面的突出表现。',
    imageUrl: '',
  },
  {
    id: 'national-inspirational-scholarship',
    title: '国家励志奖学金',
    category: '奖学金与竞赛',
    description: '面向品学兼优、刻苦自强学生的国家级奖学金，体现持续努力与自我驱动能力。',
    imageUrl: '',
  },
  {
    id: 'cet-6',
    title: '大学英语六级（CET-6，531 分）',
    category: '语言与考试',
    description: '具备阅读英文技术文档与进行基础英文交流的能力。',
    imageUrl: '',
  },
  {
    id: 'cet-4',
    title: '大学英语四级（CET-4）',
    category: '语言与考试',
    description: '扎实的英语基础，为持续阅读英文技术资料打下基础。',
    imageUrl: '',
  },
  {
    id: 'miit-talent',
    title: '工信部工业和信息化人才岗位能力认证证书',
    category: '权威认证',
    description: '工业和信息化部权威认证，证明在软件与互联网相关岗位的综合能力。',
    imageUrl: '',
  },
  {
    id: 'miit-industry-platform',
    title: '工信部工业互联网平台开发工程师证书',
    category: '权威认证',
    description: '面向工业互联网平台开发的系统能力认证，覆盖平台架构与实践。',
    imageUrl: '',
  },
  {
    id: 'huawei-harmonyos',
    title: '华为 HarmonyOS 应用开发者高级认证',
    category: '平台认证',
    description: '具备在 HarmonyOS 生态下进行应用开发与发布的能力。',
    imageUrl: '',
  },
  {
    id: 'tencent-microservice',
    title: '腾讯云微服务开发者认证',
    category: '平台认证',
    description: '理解微服务架构理念，并能在腾讯云相关产品中落地实践。',
    imageUrl: '',
  },
  {
    id: 'soft-copyright-campus-market',
    title: '校园二手交易市场管理平台软件著作权',
    category: '软件著作权',
    description: '面向校园场景的二手交易平台，包含商品发布、浏览与交易管理。',
    imageUrl: '',
  },
  {
    id: 'soft-copyright-face-attendance',
    title: '智慧校区人像考勤管理系统软件著作权',
    category: '软件著作权',
    description: '结合人像识别技术的校园考勤管理系统，支持数据统计与可视化。',
    imageUrl: '',
  },
  {
    id: 'soft-copyright-student-attendance',
    title: '智慧校园学生校内考勤管理平台软件著作权',
    category: '软件著作权',
    description: '围绕学生校内考勤管理场景，提供完整的记录与查询功能。',
    imageUrl: '',
  },
];

export const blogTopics = [
  '从“关机”到“进入视频会议”的全链路计算机与网络分析',
  'React Hooks 与组件设计模式的工程化实践',
  'Next.js 与 SSR：从首屏体验到 SEO 的全局思考',
  'TypeScript 高级类型在实际项目中的使用心得',
  'Docker 化你的全栈项目：从本地开发到线上部署',
  'Node.js 事件循环与性能优化实战',
  '如何把本地部署的 AI 大模型接入到你的业务系统',
];

