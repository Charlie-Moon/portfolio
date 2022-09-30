import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="bg-brown text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
