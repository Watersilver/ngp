import { Html, Head, Main, NextScript } from 'next/document'
import { makeStaticProps } from '../src/lib/getStatic'

const defaultLocale = makeStaticProps()().props.locale

export default function Document(props?: any) {
  const l = props?.__NEXT_DATA__?.props?.pageProps?.locale;
  const currentLocale = typeof l === "string" ? l : defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
