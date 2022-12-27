import languageDetector from 'next-language-detector'
import { getStaticPaths, makeStaticProps } from './getStatic'

export default languageDetector({
  supportedLngs: getStaticPaths().paths.map(path => path.params.locale),
  fallbackLng: makeStaticProps()().props.locale
})