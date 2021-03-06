/** @jsx h */
import { h, ReactNode } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import Footer from "@ð/Basis/Footer.tsx";
import Header from "@ð/Basis/Header.tsx";
import { tw } from "@twind";
interface LayoutProps {
  title: string;
  children: ReactNode;
}
export default function Layout({ title, children }: LayoutProps) {
  return (
    <html lang="ja">
      <Head>
        <title>{title} | musubineru</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* CSSèª­ã¿è¾¼ã¿ */}
        <link rel="stylesheet" href="/m8u.css" />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/img/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon/icon-192x192.png"
        />

        {/* OGPé¢ä¿ */}
        <meta property="og:title" content="ããã³ã­ã" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://musubineru.usuyuki.net/" />
        <meta
          property="og:image"
          content="https://musubineru.usuyuki.net/img/ogp/ogp.jpg"
        />
        <meta property="og:site_name" content="ããã³ã­ã" />
        <meta
          property="og:description"
          content="ããã³ã­ãã¯ããã­ãã¯ãã®ååæ±ºãããæä¼ããããµã¼ãã¹ã§ãã"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </html>
  );
}
