import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PATZ — 내 취향 네일 탐색, 이젠 파츠로 쉽게",
  description:
    "감별된 이미지로 당신에게 꼭 맞는 네일 취향을 찾아드려요. 매주 새로운 큐레이션부터 집 앞 5분 거리 네일샵까지, 파츠 하나로.",
  openGraph: {
    title: "PATZ — 내 취향 네일 탐색, 이젠 파츠로 쉽게",
    description:
      "감별된 이미지로 당신에게 꼭 맞는 네일 취향을 찾아드려요.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-full bg-white text-brand-ink">{children}</body>
    </html>
  );
}
