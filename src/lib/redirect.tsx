import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'

export const useRedirect = (to?: string) => {
  const router = useRouter()
  const toPath = to ?? router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect()
    if (toPath.startsWith('/' + detectedLng) && router.route === '/404') { // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }

    languageDetector.cache && detectedLng && languageDetector.cache(detectedLng)
    router.replace('/' + detectedLng + toPath)
  })

  return <></>
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to?: string) => () => {
  useRedirect(to)
  return <></>
}

export const Redirect = getRedirect()