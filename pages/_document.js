import Document, {
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700;900&family=Saira:wght@200;400;600;700&display=swap" rel="stylesheet" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Primary Meta Tags */}
          <meta name="title" content="Cebrac Unidade de Cuiabá" />
          <meta name="description" content="Cursos Unidade Cuiabá. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cuiabacebrac.com.br/" />
          <meta property="og:title" content="Cebrac Unidade de Cuiabá" />
          <meta property="og:description" content="Cursos Unidade Cuiabá. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />
          <meta property="og:image" content="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/cebrac-img-metatag.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://cuiabacebrac.com.br/" />
          <meta property="twitter:title" content="Cebrac Unidade de Cuiabá" />
          <meta property="twitter:description" content="Cursos Unidade Cuiabá. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />
          <meta property="twitter:image" content="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/cebrac-img-metatag.jpg"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}