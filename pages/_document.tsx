import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" />
        <meta property="og:title" content="주효정 | 포트폴리오" />
        <meta property="og:image" content="/image/og-image.png" />
        <meta property="og:description" content="프론트엔드 개발자의 포트폴리오입니다." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
