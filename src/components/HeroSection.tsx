import { motion } from 'framer-motion';
import { Github, Mail, Sparkles, GraduationCap, Code2, BrainCircuit } from 'lucide-react';
import { education, profile } from '../data/profile';

export function HeroSection() {
  return (
    <section className="relative mt-4 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] lg:items-center">
      {/* 左侧：个人信息 */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-sky-50/80 px-3 py-1 text-xs text-sky-700 shadow-glow-brand dark:bg-slate-900/70 dark:text-brand-100"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-200" />
          <span className="tracking-wide">{profile.brandSentence}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex flex-wrap items-end gap-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-sky-100 via-slate-50 to-emerald-100 bg-clip-text text-transparent">
                一只菜菜的 Coder
              </span>
            </h1>
            <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
              {profile.role}
            </span>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            喜欢从 0 到 1 推进产品，习惯从用户体验和工程质量双视角思考问题。
            在全栈开发与 AI 应用落地的交叉地带持续探索，追求“能上线、可维护、够优雅”的解决方案。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
          className="grid gap-4 text-xs sm:grid-cols-2"
        >
          <div className="gradient-border relative overflow-hidden rounded-2xl bg-white/90 p-4 shadow-lg shadow-slate-200/80 dark:bg-slate-950/60 dark:shadow-slate-950/70">
            <div className="mb-2 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <GraduationCap className="h-4 w-4 text-sky-300" />
              <span className="font-medium">教育背景</span>
            </div>
            <div className="space-y-1 text-slate-600 dark:text-slate-300">
              <div>{education.school} · {education.major}</div>
              <div className="text-slate-500 dark:text-slate-400">{education.period}</div>
              <div>GPA：{education.gpa}</div>
            </div>
          </div>

          <div className="gradient-border relative overflow-hidden rounded-2xl bg-white/90 p-4 shadow-lg shadow-slate-200/80 dark:bg-slate-950/60 dark:shadow-slate-950/70">
            <div className="mb-2 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Code2 className="h-4 w-4 text-emerald-300" />
              <span className="font-medium">方向标签</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['全栈开发', '前端工程化', 'AI 应用', '内容创作'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 text-xs"
        >
          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-slate-950 shadow-glow-brand hover:brightness-110 transition"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Github · {profile.github.name}</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-slate-700 hover:border-sky-400/80 hover:text-sky-600 transition-colors dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-sky-50"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>联系我</span>
          </a>

          <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400">
            <span>微信：{profile.wechat}</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>QQ：{profile.qq}</span>
          </div>
        </motion.div>
      </div>

      {/* 右侧：动效卡片 */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-4 bottom-4 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative gradient-border overflow-hidden rounded-3xl bg-white/95 p-5 shadow-2xl shadow-slate-200/90 dark:bg-slate-950/70 dark:shadow-slate-950/80">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <BrainCircuit className="h-3.5 w-3.5 text-cyan-300" />
              <span>全栈 × AI 应用</span>
            </span>
            <span>持续学习 · 自我迭代</span>
          </div>

          <div className="grid gap-3 text-xs">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-r from-slate-100 via-slate-50 to-slate-50 p-3 border border-slate-200/80 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30 dark:border-slate-800/90"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="font-medium text-slate-900 dark:text-slate-100">全链路能力</span>
                <span className="text-[11px] text-emerald-300">Front · Back · DevOps</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                覆盖从前端交互、后端架构、数据库设计到 Docker 部署的完整工程链路，对可维护性与用户体验保持敏感。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-slate-50 p-3 border border-slate-200/80 dark:bg-slate-950/80 dark:border-slate-800/90"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="font-medium text-slate-900 dark:text-slate-100">技术栈方向</span>
                <span className="text-[11px] text-sky-300">React · Vue · Node.js · TS</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                偏好以 TypeScript + React / Vue 为主的工程化栈，结合 Node.js 打造快速迭代又不失质量的全栈项目。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              viewport={{ once: true }}
              className="grid gap-2 rounded-2xl bg-slate-50 p-3 border border-slate-200/80 dark:bg-slate-950/80 dark:border-slate-800/90"
            >
              <div className="flex flex-wrap gap-1.5">
                {['国家奖学金', '国家励志奖学金', '蓝桥杯省奖', '多项软著与权威认证'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 border border-slate-200 dark:bg-slate-900/80 dark:text-slate-200 dark:border-slate-700/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

