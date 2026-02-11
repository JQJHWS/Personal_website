import { motion } from 'framer-motion';
import { blogTopics } from '../data/profile';

export function BlogSection() {
  return (
    <section id="blog" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">博客主题与内容方向</h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            聚焦“从原理到实践”，面向开发者群体输出可复用的经验与体系化思考。
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-3 md:grid-cols-2"
      >
        {blogTopics.map((topic, index) => (
          <article
            key={topic}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-3 text-xs dark:border-slate-800/90 dark:bg-slate-950/80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/6 to-emerald-400/0 pointer-events-none" />
            <div className="relative flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] text-sky-500 border border-slate-200 dark:bg-slate-900/90 dark:text-sky-300 dark:border-slate-700/90">
                {index + 1}
              </div>
              <p className="text-slate-700 dark:text-slate-200">{topic}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}

