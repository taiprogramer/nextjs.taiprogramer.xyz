import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="dark:bg-gray-800 dark:text-gray-300 font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
