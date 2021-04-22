import Document, { Head, Html, Main, NextScript } from "next/document";

export default class SoapLinkDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Font Preload Tags */}
          <link
            rel="preload"
            href="/SFRounded-Semibold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/SFRounded-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Favicon Tags */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#8359fe" />
        </Head>

        <body className="flex flex-col min-h-screen">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
