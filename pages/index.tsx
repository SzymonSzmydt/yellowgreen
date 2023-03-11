import Head from 'next/head';
import Intro from './../components/body/intro';
import Exposition from '../components/body/exposition';
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
      <Intro products={products} />
      <Exposition products={products} />
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
