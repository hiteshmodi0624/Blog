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
          <title>Hitesh&apos; Blog</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationComponentProvider>
  )
}
