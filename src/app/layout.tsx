import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Practice",
  description: "Reactの練習です",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
