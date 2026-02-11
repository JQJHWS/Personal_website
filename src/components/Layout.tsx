import { ReactNode, useEffect, useState } from 'react';
import { Github, Mail, MessageCircle, Sparkles, SunMedium, MoonStar } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(true);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBlur(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 overflow-hidden">
      {/* 背景光晕与噪点 */}
      <div className="pointer-events-none fixed inset-0 bg-radial-glow opacity-80 dark:opacity-90" />
      <div className="pointer-events-none fixed inset-0 noise-bg mix-blend-soft-light" />

      {/* 顶部导航 */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          blur
            ? 'backdrop-blur-xl border-b bg-white/80 border-slate-200/80 dark:bg-slate-950/70 dark:border-slate-800/70'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-500 to-sky-400 shadow-glow-brand flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-slate-950" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-slate-100">
                {profile.nickname}
              </div>
              <div className="text-xs text-slate-400">{profile.tagline}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden items-center gap-3 text-slate-500 md:flex">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `hover:text-sky-500 transition-colors ${
                    isActive ? 'text-sky-400 font-medium' : ''
                  }`
                }
              >
                技能
              </NavLink>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `hover:text-sky-500 transition-colors ${
                    isActive ? 'text-sky-400 font-medium' : ''
                  }`
                }
              >
                成长轨迹
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `hover:text-sky-500 transition-colors ${
                    isActive ? 'text-sky-400 font-medium' : ''
                  }`
                }
              >
                项目
              </NavLink>
              <NavLink
                to="/certificates"
                className={({ isActive }) =>
                  `hover:text-sky-500 transition-colors ${
                    isActive ? 'text-sky-400 font-medium' : ''
                  }`
                }
              >
                证书墙
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `hover:text-sky-500 transition-colors ${
                    isActive ? 'text-sky-400 font-medium' : ''
                  }`
                }
              >
                博客
              </NavLink>
              <NavLink
                to="/messages"
                className={({ isActive }) =>
                  `hover:text-sky-500 transition-colors ${
                    isActive ? 'text-sky-400 font-medium' : ''
                  }`
                }
              >
                留言
              </NavLink>
              <NavLink
                to="/journey"
                className={({ isActive }) =>
                  `hover:text-sky-500 transition-colors ${
                    isActive ? 'text-sky-400 font-medium' : ''
                  }`
                }
              >
                开发历程
              </NavLink>
            </div>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100/90 px-3 py-1 text-slate-800 hover:border-brand-400/80 hover:text-slate-900 hover:bg-white transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Github</span>
            </a>
            <button
              onClick={() => setIsDark((v) => !v)}
              className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-300 bg-slate-100/90 text-slate-700 hover:border-brand-400/80 hover:text-brand-600 hover:bg-white transition-colors dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-brand-50 dark:hover:bg-slate-900"
              aria-label="切换主题"
            >
              {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* 页面主体 */}
      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-24 lg:px-6 lg:pt-28">
        {children}
      </main>

      {/* 底部 */}
      <footer className="relative border-t border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 dark:text-slate-400 lg:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>{profile.email}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>微信：{profile.wechat} · QQ：{profile.qq}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} {profile.nickname}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

