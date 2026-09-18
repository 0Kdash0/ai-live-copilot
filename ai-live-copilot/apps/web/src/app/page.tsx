import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          AI Live Copilot
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          面向抖音主播的商业化 AI 直播助手 SaaS
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="#"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            开始使用
          </Link>
          <Link
            href="#"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            查看文档
          </Link>
        </div>
        <p className="mt-12 text-sm text-slate-400">
          Phase 0 — 工程骨架已就绪
        </p>
      </div>
    </main>
  );
}
