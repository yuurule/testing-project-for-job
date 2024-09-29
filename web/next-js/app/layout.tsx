import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Providers from "@/context/Providers";

export const metadata: Metadata = {
  title: "เที่ยวไหนดี Wongnai",
  description: "Test project - trip posts from wongnai",
};

const kanit = Kanit({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['thai'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="th">
        <body className={kanit.className}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
