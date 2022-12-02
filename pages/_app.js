import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/globals';
import NextNProgress from 'nextjs-progressbar';
import theme from '../styles/theme';
import Router from 'next/router';
import Script from 'next/script';
import React from 'react';

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('557013655243129');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

function MyApp({ Component, pageProps }) {

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <Script
        strategy='lazyOnload'
        id='GA-scriptOne'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        strategy='lazyOnload'
        id='GA-scriptTwo'
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <FacebookPixel />
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" />
        <NextNProgress
          color={theme.secondary }
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
