import Head from 'next/head';
import Aside from '../dashboard/aside';
import { Hamburger } from '../button/hamburger';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

function DashLayout({ children }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Panel administracyjny</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main className="general">
        <Hamburger
          handleClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        />
        <Aside isClicked={isClicked} />
        {children}
      </main>
    </>
  );
}

export default DashLayout;
