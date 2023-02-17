import Head from 'next/head';
import Aside from '../dashboard/aside';

type Props = {
  children: React.ReactNode;
};

function DashLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Panel administracyjny</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main className="general">
        <Aside />
        {children}
      </main>
    </>
  );
}

export default DashLayout;
