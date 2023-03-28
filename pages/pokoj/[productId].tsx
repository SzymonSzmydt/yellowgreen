import { CorrectProductType } from './../../context/types/type';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../context/firebase/Firebase';
import { ProductId } from 'components/products/productId/productId';

type ProductProps = {
  product: CorrectProductType;
};

function Room({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <ProductId product={product} />;
}

export default Room;

export const getStaticPaths: GetStaticPaths = async () => {
  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];

  const products = data
    .filter((filtr) => filtr.category === 'Pokój')
    .map((product) => {
      return {
        params: { productId: `${product.id}` },
      };
    });
  return {
    paths: products,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params?.productId;

  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];

  const product = data.find((e) => '' + e.id === productId);
  return {
    props: {
      product: product,
    },
  };
};
