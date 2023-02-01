import Head from 'next/head';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '@/styles/global.style';
import color from '@/styles/color.style';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>주효정 | 포트폴리오</title>
      </Head>
      <ThemeProvider theme={color}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
