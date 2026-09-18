import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Live Copilot',
  description: '面向抖音主播的商业化 AI 直播助手 SaaS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
