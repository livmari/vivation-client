import type { AppProps } from 'next/app'

import { Page } from '@components/index'

import '@styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default MyApp
