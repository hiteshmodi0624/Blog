import Layout from '@/components/layouts/layout'
import { NotificationComponentProvider } from '@/store/notification-ctx'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationComponentProvider>
      <Layout>
        <Head>
          <meta name="viewport" content='width=device-width, initial-scale=1'/>
          <title>Hitesh&apos; Blog</title>
          <meta name="description" content='I code about programming and web development'/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationComponentProvider>
  )
}
