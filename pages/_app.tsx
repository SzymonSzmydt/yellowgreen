import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components//layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../context/redux/store';
import { UserAuthContextProvider } from 'context/firebase/UserAuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserAuthContextProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UserAuthContextProvider>
  );
}
