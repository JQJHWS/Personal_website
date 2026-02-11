import { motion } from 'framer-motion';
import { growthTimeline } from '../data/profile';

export function TimelineSection() {
  return (
    <section id="timeline" className="space-y-6">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">大学四年成长轨迹</h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            从基础课到真实项目，从竞赛奖项到软著与训练营，把每一步成长都沉淀为可复用的能力。
          </p>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/80 via-slate-300/70 to-slate-200/0 dark:via-slate-700/60 dark:to-slate-800/0 md:left-1/2" />
        <div className="space-y-6">
          {growthTimeline.map((stage, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={stage.year}
                initial={{ opacity: 0, y: 30, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative flex gap-4 md:gap-6 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-none md:w-1/2" />

                <div className="relative flex-1 md:w-1/2">
                  <div
                    className={`absolute -left-7 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-brand-300/70 bg-white shadow-md shadow-brand-400/40 dark:bg-slate-950/80 md:left-[-2.15rem]`}
                  >
                    <div className="h-2 w-2 rounded-full bg-brand-300" />
                  </div>
                  <div className="gradient-border relative overflow-hidden rounded-2xl bg-white/95 p-4 border border-slate-200/80 dark:bg-slate-950/80 dark:border-slate-800/90">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{stage.year}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 border border-slate-200 dark:bg-slate-900/80 dark:text-slate-300 dark:border-slate-700/80">
                        {stage.title}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {stage.items.map((item) => (
                        <li key={item} className="flex gap-1.5">
                          <span className="mt-1 h-1 w-1 flex-none rounded-full bg-sky-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

