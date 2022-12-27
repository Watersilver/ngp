import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LinkExternalResource from '../src/components/public-embeds/LinkExternalResource'
import Head from 'next/head'
import store from '../src/store/store'
import { makeStaticProps } from '../src/lib/getStatic'
import { useEffect } from 'react'
import translate from '../src/translation'

const defaultLocale = makeStaticProps()().props.locale

export default function App({ Component, pageProps }: AppProps) {
  const ppl: unknown = pageProps?.locale;
  const lang = typeof ppl === "string" ? ppl : defaultLocale;

  // Pass initial values for ssr and first client render.
  store.initialize({lang});

  // React to path change
  useEffect(() => {
    store.lang = lang;
  }, [lang]);

  return <>
    <Head>
      <title>{translate("title")}</title>
      <meta name="description" content="[description]" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <LinkExternalResource rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}
