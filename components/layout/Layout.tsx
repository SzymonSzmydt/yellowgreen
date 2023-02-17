import Header from '../header/header';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>North Shape</title>
        <meta
          name="description"
          content="Meble od projektantów, nietuzinkowe kształty"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Header /> {children}
    </>
  );
}

export default Layout;
