import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "LUCE — 서로 다른 가능성, 하나의 연결";
const description =
  "LUCE는 FATELL, BUCHU, HWARYEOK, SOROW를 연결하는 브랜드 플랫폼입니다. 네 개의 브랜드를 통해 펼쳐지는 LUCE의 사업과 포트폴리오를 만나보세요.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "LUCE",
  keywords: [
    "LUCE",
    "루체",
    "FATELL",
    "BUCHU",
    "HWARYEOK",
    "화력",
    "SOROW",
    "브랜드 플랫폼",
    "사업 포트폴리오",
  ],
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
  },
  openGraph: {
    title,
    description,
    siteName: "LUCE",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f5f2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
