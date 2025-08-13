
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Force your PNG favicon */}
        <link rel="icon" href="/images/final.png?v=4" type="image/png" />
        <link rel="apple-touch-icon" href="/images/final.png?v=4" />
        <link rel="shortcut icon" href="/images/final.png?v=4" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
