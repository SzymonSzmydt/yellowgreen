import { GetStaticProps } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../context/firebase/Firebase';
import { CorrectProductType } from '../../context/types/type';
import { ProductCard } from 'components/products/productCard/productCard';

interface KitchenProps {
  products: CorrectProductType[];
}

export default function Kitchen({ products }: KitchenProps) {
  return <ProductCard categoryUrlPathName="kuchnia" products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];
  const kitchen = data.filter((product) => product.category === 'Kuchnia');
  return {
    props: {
      products: kitchen,
    },
  };
};
