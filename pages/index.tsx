import Head from 'next/head';
import style from '../styles/Home.module.css';
import Intro from './../components/body/intro';
import Commercial from '../components/body/commercial';

export default function Home() {
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
      <Intro />
      <h1 className={style.center}> Fotele</h1>
      <Commercial />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();
  return {
    props: {
      data: data.slice(0, 3),
    },
  };
}
