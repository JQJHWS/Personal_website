import { motion } from 'framer-motion';
import { projects } from '../data/profile';

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">项目与实践</h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            从校园真实场景到个人品牌站点，将技术选型、产品思路与工程落地串联起来。
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="gradient-border relative flex flex-col overflow-hidden rounded-2xl bg-white/95 p-4 border border-slate-200/80 cursor-pointer dark:bg-slate-950/80 dark:border-slate-800/90"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-emerald-500/0" />
            <div className="relative mb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{project.role}</span>
              <span>{project.period}</span>
            </div>
            <div className="relative">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{project.name}</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{project.summary}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 border border-slate-200 dark:bg-slate-900/80 dark:text-slate-200 dark:border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-1.5">
                    <span className="mt-1 h-1 w-1 flex-none rounded-full bg-sky-300" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

