import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUCE — 작은 즐거움이 오래 빛나도록",
  description:
    "LUCE는 기술에 온기를 더해 일상에 자연스럽게 머무는 디지털 경험을 만드는 프로덕트 스튜디오입니다.",
  applicationName: "LUCE",
  keywords: ["LUCE", "루체", "디지털 프로덕트", "프로덕트 스튜디오", "PuppyRuby", "퍼피루비"],
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#fff9ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
