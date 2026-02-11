import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircleMore, Send } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  contact?: string;
  content: string;
  createdAt: string;
}

const STORAGE_KEY = 'yizhi-coder-message-board';

export function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Message[];
        setMessages(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = content.trim();
    if (!text) return;
    const now = new Date();
    const msg: Message = {
      id: `${now.getTime()}-${Math.random().toString(16).slice(2)}`,
      name: name.trim() || '一位热心读者',
      contact: contact.trim() || undefined,
      content: text,
      createdAt: now.toISOString(),
    };
    const next = [msg, ...messages];
    setMessages(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    setContent('');
  };

  const formatTime = (iso: string) => {
    const date = new Date(iso);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate()
    ).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes()
    ).padStart(2, '0')}`;
  };

  return (
    <section id="messages" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">留言板</h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            欢迎聊聊你对技术、学习路径或项目的想法，也可以给未来的「一只菜菜的 Coder」留一句话。
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.5fr)]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border relative flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 text-xs dark:border-slate-800/90 dark:bg-slate-950/80"
        >
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
            <MessageCircleMore className="h-4 w-4 text-sky-300" />
            <span className="font-medium">写下你的想法</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-[11px] text-slate-500 dark:text-slate-400">昵称（可选）</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例如：某某学弟 / 前端同路人"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none dark:border-slate-700/90 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-slate-500 dark:text-slate-400">联系方式（可选）</label>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="邮箱 / 微信号 / QQ 等"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none dark:border-slate-700/90 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[11px] text-slate-500 dark:text-slate-400">
              留言内容 <span className="text-red-400">*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="可以是建议、鼓励、问题，或者简单打个招呼：）"
              rows={4}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none dark:border-slate-700/90 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500 dark:text-slate-500">
              提交后会保存在本地浏览器的
              <span className="text-slate-300"> LocalStorage </span>
              中，方便你本机查看和回顾。
            </p>
            <button
              type="submit"
              disabled={!content.trim()}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-1.5 text-xs font-medium text-slate-950 shadow-glow-brand disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-3.5 w-3.5" />
              <span>发送留言</span>
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>最近留言（仅当前浏览器可见）</span>
            <span>{messages.length} 条</span>
          </div>
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {messages.length === 0 && (
              <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-[11px] text-slate-500 dark:border-slate-700/80 dark:bg-slate-950/60">
                还没有留言，可以作为第一个在这里留下脚印的人。
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="rounded-2xl border border-slate-200/80 bg-white/95 px-3 py-2 text-[11px] dark:border-slate-800/90 dark:bg-slate-950/80"
              >
                <div className="mb-1 flex items-center justify之间 gap-2 text-slate-700 dark:text-slate-300">
                  <span className="font-medium">{msg.name}</span>
                  <span className="text-[10px] text-slate-500">{formatTime(msg.createdAt)}</span>
                </div>
                {msg.contact && (
                  <div className="mb-1 text-[10px] text-slate-500">{`联系方式：${msg.contact}`}</div>
                )}
                <p className="whitespace-pre-wrap text-slate-800 dark:text-slate-200">{msg.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

