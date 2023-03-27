import { GetStaticProps } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../context/firebase/Firebase';
import { CorrectProductType } from '../../context/types/type';
import { ProductCard } from 'components/products/productCard';

type WardrobeProps = {
  products: CorrectProductType[];
};

export default function Wardrobe({ products }: WardrobeProps) {
  return <ProductCard category="garderoba" products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];
  const wardrobe = data.filter((product) => product.category === 'Garderoba');

  return {
    props: {
      products: wardrobe,
    },
  };
};
