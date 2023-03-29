import Head from 'next/head';
import Intro from './../components/body/intro';
import { CorrectProductType } from './../context/types/type';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../context/firebase/Firebase';
import { Spinner } from 'components/ui/spinner';
import { useAppDispatch } from '../context/redux/hooks';
import { getProducts } from 'context/redux/productsSlice';

type HomeProps = {
  products: CorrectProductType[];
};

export default function Home({ products }: HomeProps) {
  const dispatch = useAppDispatch();
  dispatch(getProducts(products));
  return (
    <>
      <Head>
        <title>North Shape</title>
      </Head>
      {products ? (
        <>
          <Intro products={products} />
        </>
      ) : (
        <Spinner />
      )}
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
