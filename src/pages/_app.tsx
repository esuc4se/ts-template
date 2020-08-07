import { NextPage } from 'next'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import GlobalStyle from '../styles/global-styles'

const App: NextPage<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{'template-ts'}</title>
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default dynamic(async () => App, { ssr: false })
