import Document, {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('Im being called');
    const initialProps = await Document.getInitialProps(ctx);
    const [csp, nonce] = generateCsp();

    const res = ctx?.res;
    if (res != null) {
      console.log("I'm in");
      res.setHeader('Content-Security-Policy', csp);
    }
    return {
      ...initialProps,
      nonce,
    };
  }

  render() {
    // const [csp, nonce] = generateCsp();
    const {nonce} = this.props;
    console.log(nonce);

    return (
      <Html lang="de">
        <Head nonce={nonce}>
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="192x192"
            href="/images/icon-192.png"
          />
          {/* <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}

          <link rel="preconnect" href="https://app.usercentrics.eu" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />

          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index,follow" />
          <meta name="HandheldFriendly" content="true" />
          <meta
            name="google-site-verification"
            content="y0fNm10Zw-mMjHsc7sW-SHicOMEldY3I6d2K4KGUBYY"
          />

          <script
            id="usercentrics-cmp"
            src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
            data-settings-id="oVM0OC3Mr"
            async
          ></script>

          <script
            data-usercentrics="Google Tag Manager"
            type="text/plain"
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-K56QMGF');
              `,
            }}
          />

          {/* <script
            id="usercentrics-cmp"
            src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
            data-settings-id="oVM0OC3Mr"
            async
          ></script>

          <script
            id="GTM"
            data-usercentrics="Google Tag Manager"
            type="text/plain"
            dangerouslySetInnerHTML={{
              __html:
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-K56QMGF');",
            }}
          /> */}
          {/*  <script
            data-usercentrics="Google Analytics"
            type="text/plain"
            src="https://www.googletagmanager.com/gtag/js?id=G-0G43K9BEPW"
          ></script>
          <script
            data-usercentrics="Google Analytics"
            type="text/plain"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0G43K9BEPW');",
            }}
          /> */}
        </Head>

        <body>
          <div>
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
