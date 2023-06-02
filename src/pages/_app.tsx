import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

type CustomAppProps = AppProps & {
  statusCode?: number;
};

const MyApp: React.FC<CustomAppProps> = ({
  Component,
  pageProps,
  statusCode
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Redirecionar para a página 404 se a rota não existir
  if (statusCode === 404) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <NextNprogress
            color={theme.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow
          />
          <Toaster position="bottom-right" />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `
          }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <NextNprogress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { res, err } = ctx;

  if (res?.statusCode === 404 || err) {
    return {
      props: {
        statusCode: 404
      }
    };
  }

  return {
    props: {}
  };
};

export default MyApp;
