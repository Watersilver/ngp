import { observer } from 'mobx-react-lite'
import LocaleLink from '../../src/components/LocaleLink'
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'
import store from '../../src/store/store'
import translate from '../../src/translation'

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const HomePage = observer(() => {
  return (
    <>
      <main>
        <LocaleLink href="" locale={store.lang === "en"?"el":"en"}>
          {
            store.lang === "en"?"to greek":"to eng"
          }
        </LocaleLink>
        <h1>{translate("cantHandleTruth")}</h1>
        <p>{translate("erty")}</p>
      </main>
    </>
  )
});

export default HomePage