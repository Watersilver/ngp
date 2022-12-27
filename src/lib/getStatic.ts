export const getStaticPaths = () => ({
  fallback: false,
  paths: [
    { params: { locale: 'en' } },
    { params: { locale: 'el' } }
  ]
})

export function makeStaticProps() {
  return function getStaticProps(ctx?: any) {
    const l = ctx?.params?.locale;
    return {
      props: {
        locale: typeof l === "string" ? l : "en"
      }
    }
  }
}