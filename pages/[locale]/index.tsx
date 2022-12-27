import { observer } from 'mobx-react-lite'
import LocaleLink from '../../src/components/LocaleLink'
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'
import store from '../../src/store/store'
import translate from '../../src/translation'
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Typography } from '@mui/material'

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const HomePage = observer(() => {
  return (
    <>
      <main>
        <LocaleLink href="" locale={store.lang === "en"?"el":"en"}>
          <Button color='primary' variant='contained'>
            {store.lang === "en"?"to greek":"Αγγλικά"}
          </Button>
        </LocaleLink>
        <IconButton onClick={() => {store.colorMode === "dark" ? store.colorMode = "light" : store.colorMode = "dark"}}>
          {
            store.colorMode === "dark" ?
            <Brightness7Icon /> :
            <Brightness4Icon />
          }
        </IconButton>
        <h1>{translate("cantHandleTruth")}</h1>
        <Typography paragraph>{translate("erty")}</Typography>
      </main>
    </>
  )
});

export default HomePage