import type { FC, ReactElement } from 'react'
import Head from 'next/head'

import { Footer, Header } from '@components/index'

interface PageProps {
  children: ReactElement
}

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Vivation Skandinavien {/* TODO: get from cms */}</title>
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default Page
