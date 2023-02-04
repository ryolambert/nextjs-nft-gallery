/* eslint-disable class-methods-use-this */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang='en-us'
        dir='ltr'
        translate='no'
        className='bg-gradient-to-r from-slate-900 to-slate-700'
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
