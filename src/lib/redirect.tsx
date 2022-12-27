import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'
import store from '../store/store';

export const useRedirect = (to?: string) => {
  const router = useRouter()
  const toPath = to ?? router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (!detectedLng) return;
    store.lang = detectedLng;
    if (toPath.startsWith('/' + detectedLng) && router.route === '/404') { // prevent endless loop
      router.replace('/' + detectedLng + router.route);
      return
    }

    languageDetector.cache && languageDetector.cache(detectedLng)
    router.replace('/' + detectedLng + toPath);
  }, []);
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to?: string) => () => {
  useRedirect(to)
  return <></>
}

export const Redirect = getRedirect()