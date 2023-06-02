import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { initializeGoogleAnalytics } from '../components/Utils/googleAnalytics';

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

  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

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
