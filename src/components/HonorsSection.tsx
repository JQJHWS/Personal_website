import { motion } from 'framer-motion';
import { honors } from '../data/profile';

export function HonorsSection() {
  return (
    <section id="honors" className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">荣誉 · 证书 · 软著</h2>
        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
          竞赛、奖学金、权威认证与软件著作权，是持续投入和长期积累的旁证。
        </p>
      </div>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-2 text-xs"
      >
        {honors.map((item, index) => (
          <li
            key={item}
            className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 dark:border-slate-800/90 dark:bg-slate-950/80"
          >
            <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              {item}
            </span>
            <span className="text-[11px] text-slate-500">#{index + 1}</span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

