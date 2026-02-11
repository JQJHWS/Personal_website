import { motion } from 'framer-motion';
import { skills } from '../data/profile';

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">技能矩阵</h2>
        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
          以前端为主导，串联后端、数据库与 DevOps 的全链路能力，偏好工程化与可维护性。
        </p>
      </div>
      <div className="grid gap-3 text-xs md:grid-cols-2">
        {[
          { label: '前端开发', items: skills.frontend },
          { label: '后端与服务端', items: skills.backend },
          { label: '数据库与缓存', items: skills.data },
          { label: 'DevOps 与部署', items: skills.devops },
          { label: '综合能力', items: skills.others },
        ].map((group, index) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="gradient-border relative overflow-hidden rounded-2xl bg-white/95 p-3 border border-slate-200/80 dark:bg-slate-950/80 dark:border-slate-800/90"
          >
            <div className="mb-1 text-slate-900 font-medium dark:text-slate-100">{group.label}</div>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300">
              {group.items.map((item) => (
                <li key={item} className="flex gap-1.5">
                  <span className="mt-1 h-1 w-1 flex-none rounded-full bg-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

