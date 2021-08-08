import type { FC, ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer, Header } from '@components/index'

interface PageProps {
  children: ReactElement
}

const Page: FC<PageProps> = ({ children }) => {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <>
      <Head>
        <title>Vivation Skandinavien {/* TODO: get from cms */}</title>
      </Head>

      {isHome ? null : <Header />}

      {children}

      <Footer />
    </>
  )
}

export default Page
