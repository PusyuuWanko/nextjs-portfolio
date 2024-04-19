import type { Metadata } from "next";
import "./componets/globals.css";
import Show from "./componets/show.tsx";
import Header from "./componets/header.tsx";
import Footer from "./componets/footer.tsx";

/* 現時点で動的なタイトル変更をサーバーサイドで行う方法を見つけられず */
export const metadata: Metadata = {
  title: "プシューポートフォリオ - Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body>
        <Show />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
