import { motion } from 'framer-motion';
import { certificates } from '../data/profile';
import { Image as ImageIcon, Award } from 'lucide-react';

export function CertificateGallery() {
  return (
    <section id="certificates" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">证书墙</h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            每张卡片都为实际证书截图预留了展示位，你只需要把图片放到指定目录并在数据里填上路径即可。
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {certificates.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-3 text-xs dark:border-slate-800/90 dark:bg-slate-950/80"
          >
            <div className="relative mb-2 overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-100 aspect-[4/3] flex items-center justify-center dark:border-slate-700/90 dark:bg-slate-900/70">
              {item.imageUrl ? (
                // 以后把 imageUrl 填成实际路径即可展示证书截图
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 px-4 text-[11px] text-slate-500 text-center dark:text-slate-400">
                  <ImageIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <p>
                    预留证书图片展示区域
                    <br />
                    （将证书截图放入 `public/certs/`，并在数据中填写 imageUrl 即可）
                  </p>
                </div>
              )}
            </div>
            <div className="mb-1 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <Award className="h-3.5 w-3.5 text-amber-300" />
                <span className="font-medium">{item.title}</span>
              </div>
            </div>
            <div className="mb-1 text-[11px] text-sky-500 dark:text-sky-300">{item.category}</div>
            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

