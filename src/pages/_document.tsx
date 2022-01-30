/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import { Helmet, HelmetData } from 'react-helmet';

// Via https://github.com/vercel/next.js/blob/canary/examples/with-react-helmet/pages/_document.js

interface IDocumentProps extends DocumentInitialProps {
  helmet: HelmetData;
}
export default class MyDocument extends Document<IDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const documentProps = await Document.getInitialProps(ctx);
    return { ...documentProps, helmet: Helmet.renderStatic() };
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>{this.helmetHeadComponents}</Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
