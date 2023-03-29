import { CorrectProductType } from './../../context/types/type';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../context/firebase/Firebase';
import { ProductId } from 'components/products/productId/productId';
import { Spinner } from '../../components/ui/spinner';

type ProductProps = {
  product: CorrectProductType;
  products: CorrectProductType[];
};

function Kitchen({ product, products }: ProductProps) {
  const router = useRouter();
  return router.isFallback ? (
    <Spinner />
  ) : (
    <ProductId product={product} products={products} />
  );
}

export default Kitchen;

export const getStaticPaths: GetStaticPaths = async () => {
  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];

  const products = data
    .filter((filtr) => filtr.category === 'Kuchnia')
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
      products: data,
    },
  };
};
