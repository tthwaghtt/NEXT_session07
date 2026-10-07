import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나만의QUEEN 👑",
  description: "넌 언제나 옳아. 항상 QUEEN의 마인드를 가지렴",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
