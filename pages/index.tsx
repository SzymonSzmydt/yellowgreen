import Head from 'next/head';
import style from '../styles/Home.module.css';
import Intro from './../components/body/intro';
import Commercial from '../components/body/commercial';
import { CorrectProductType } from './../components/dashboard/types/type';

type HomeProps = {
  products: CorrectProductType[];
};

export default function Home({ products }: HomeProps) {
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
      {/* <Intro /> */}
      <h1 className={style.center}> Fotele</h1>
      <Commercial products={products} />
      <Commercial products={products} />
      <Commercial products={products} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'http://localhost:3000/api/products/getProducts'
  );
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
