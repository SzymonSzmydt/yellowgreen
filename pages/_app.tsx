import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import Header from './../components/header/header';
import Aside from '../components/dashboard/aside';
import Head from 'next/head';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
      <>
        <Head>
          <title> Panel administracyjny </title>
        </Head>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <div className={'general'}>
          <Aside />
          <Component {...pageProps} />
        </div>
      </>
    );

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
