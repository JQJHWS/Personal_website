import { motion } from 'framer-motion';

interface JourneyStage {
  time: string;
  title: string;
  description: string;
  learnings: string[];
}

const journey: JourneyStage[] = [
  {
    time: '2025 年 9 月 · 开学后不久',
    title: '确定方向：边备考边搭建「技术名片」',
    description:
      '开学后正式进入研究生备考节奏，白天主要在图书馆刷专业课和英语，晚上则想给自己做一份“能持续更新的技术名片”，于是决定动手搭一个真正属于自己的个人博客 / 作品集网站。',
    learnings: [
      '明确网站核心目标：展示项目、证书、成长轨迹，而不是一开始就纠结炫技。',
      '先用文档梳理信息架构（首页、项目、证书、博客、留言等），再决定技术栈。',
    ],
  },
  {
    time: '2025 年 10 月 · 技术选型与第一版搭建',
    title: '从零搭起第一版骨架',
    description:
      '在刷题和背单词的间隙，利用每天晚上 1–2 小时时间，用 React + Vite 快速搭出了第一版单页站点，只包含最基础的个人简介和项目列表。',
    learnings: [
      '重新熟悉 Vite 工程化流程（脚手架、别名配置、环境变量管理等）。',
      '把「能先跑起来」放在第一位，遇到不熟悉的动效和设计暂时用占位代替。',
    ],
  },
  {
    time: '2025 年 11 月 · 遇到瓶颈：设计感与结构',
    title: '意识到“只有内容，没有体验”还不够',
    description:
      '中期回头看第一版页面，发现虽然信息都能看到，但排版比较普通、缺少层次感。于是开始在通勤和休息时间刷优秀个人站案例，拆解哪些细节让页面有“作品气质”。',
    learnings: [
      '总结出适合自己的设计套路：深浅双模式 + 卡片化布局 + 轻微动效 + 清晰层级。',
      '引入 TailwindCSS 和 framer-motion，减少在手写样式和动画上的时间，把精力放在结构和内容表达上。',
    ],
  },
  {
    time: '2025 年 12 月 · 备考冲刺期',
    title: '时间被切碎后的开发方式',
    description:
      '十二月进入冲刺阶段，整块开发时间很少，只能利用背完单词后的 30 分钟或午休的一小段时间迭代网站。这个阶段主要在补齐「荣誉」「证书」「成长时间线」等内容模块。',
    learnings: [
      '把开发任务拆成极小的 ToDo（例如“只改一个区块的文案”“加一个新组件”），保证每次打开编辑器都能在十几分钟内完成一个小目标。',
      '学会使用 Git 分支和提交信息记录每次小迭代，方便之后回顾自己的成长轨迹。',
    ],
  },
  {
    time: '2026 年 1 月 · 考试结束后',
    title: '从单页到多页面的重构',
    description:
      '研究生考试结束后，有了相对完整的时间块，于是把最初的单页结构重构为多路由页面：技能矩阵、项目经历、证书墙、博客方向、留言板各自拥有独立路由和动画。',
    learnings: [
      '通过 react-router-dom + framer-motion 实现页面级过渡动画，同时保持路由结构简洁。',
      '在拆分页面的过程中重新梳理每个模块的文案和信息密度，让每一页都有清晰主题。',
    ],
  },
  {
    time: '2026 年 2 月 – 至今',
    title: '持续打磨与内容填充',
    description:
      '在等待成绩、准备复试的阶段，持续为网站补充博客主题、项目细节和证书图片，同时尝试把本地部署的大模型能力融入到内容创作和代码生成中。',
    learnings: [
      '用这个网站作为「实验田」，实践前端动画、全栈开发和 AI 助手协作的各种想法。',
      '把每一次小优化都记录下来，让这个站点既是作品展示，也是个人学习路径的镜像。',
    ],
  },
];

export function DevJourneyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <section className="space-y-3">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          开发历程 · 边备考边打磨的个人网站
        </h1>
        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          这个网站并不是一次性“闭关写完”的课程作业，而是从 2024 年下半年开始，在准备研究生考试的同时，
          利用被切碎的时间一点点搭建和打磨出来的。下面这条时间线，记录的是真实的开发过程、遇到的问题以及背后的自学路径。
        </p>
      </section>

      <section className="relative mt-4">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/80 via-slate-300/80 to-slate-200/0 dark:from-sky-400/80 dark:via-slate-700/60 dark:to-slate-800/0 md:left-1/2" />
        <div className="space-y-6">
          {journey.map((stage, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.article
                key={stage.time}
                initial={{ opacity: 0, y: 30, x: isLeft ? -24 : 24 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -20, x: isLeft ? -10 : 10 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`relative flex gap-4 md:gap-6 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-none md:w-1/2" />

                <div className="relative flex-1 md:w-1/2">
                  <div
                    className={`absolute -left-7 top-3 flex h-4 w-4 items-center justify-center rounded-full border border-sky-300/70 bg-white shadow-md shadow-sky-300/40 dark:bg-slate-950/80 md:left-[-2.15rem]`}
                  >
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                  </div>
                  <div className="gradient-border relative overflow-hidden rounded-2xl bg-white/95 p-4 border border-slate-200/80 dark:bg-slate-950/80 dark:border-slate-800/90">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {stage.time}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 border border-slate-200 dark:bg-slate-900/80 dark:text-slate-300 dark:border-slate-700/80">
                        {stage.title}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                      {stage.description}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                      {stage.learnings.map((item) => (
                        <li key={item} className="flex gap-1.5">
                          <span className="mt-1 h-1 w-1 flex-none rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

