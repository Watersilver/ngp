import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

import type { AppProps } from 'next/app'
import LinkExternalResource from '../src/components/public-embeds/LinkExternalResource'
import Head from 'next/head'
import store from '../src/store/store'
import { makeStaticProps } from '../src/lib/getStatic'
import { useEffect, useMemo } from 'react'
import translate from '../src/translation'
import { observer } from 'mobx-react-lite'
import { ThemeProvider, createTheme } from '@mui/material'
import getDesignTokents from '../themes'

const defaultLocale = makeStaticProps()().props.locale;

const App = observer(({ Component, pageProps }: AppProps) => {
  const ppl: unknown = pageProps?.locale;
  const lang = typeof ppl === "string" ? ppl : defaultLocale;

  // Pass initial values for ssr and first client render.
  store.initialize({lang});

  // Load stuff from local storage
  useEffect(() => {
    store.loadFromLocal();
  }, []);

  // React to path change
  useEffect(() => {
    store.lang = lang;
    document.documentElement.lang = lang;
  }, [lang]);

  const theme = useMemo(() => {
    return createTheme(getDesignTokents(store.colorMode));
  }, [store.colorMode]);

  return <ThemeProvider theme={theme} >
    <CssBaseline enableColorScheme />
    <Head>
      <title>{translate("title")}</title>
      <meta name="description" content="[description]" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <LinkExternalResource rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>;
});

export default App