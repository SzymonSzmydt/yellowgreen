import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { Inter } from '@next/font/google';
import Layout from '../components//layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../context/redux/store';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Provider store={store}>
        <Layout> {page} </Layout>
      </Provider>
    ));

  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
