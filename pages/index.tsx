import Head from 'next/head'

import Link from '../src/components/public-embeds/Link'

export default function Home() {
  return (
    <>
      <Head>
        <title>[Title]</title>
        <meta name="description" content="[description]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/fabicon.ico" />
      </Head>
      <main>
        <h1>You can&apos;t handle the truth</h1>
      </main>
    </>
  )
}
