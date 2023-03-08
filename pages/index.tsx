import Head from 'next/head';
import style from '../styles/Home.module.css';
// import Intro from './../components/body/intro';
import Commercial from '../components/body/commercial';
import { CorrectProductType } from './../context/types/type';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './../context/Firebase';

type HomeProps = {
  products: CorrectProductType[];
};

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>North Shape</title>
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
  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];

  return {
    props: {
      products: data,
    },
  };
}
