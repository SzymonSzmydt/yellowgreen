import style from './styles/index.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../context/firebase/Firebase';
import { TitleAccent } from '../../components/ui/titleAccent';
import { CorrectProductType } from '../../context/types/type';
import { ProductCard } from 'components/products/productCard';

type CategoryProps = {
  products: CorrectProductType[];
};

export default function Wardrobe({ products }: CategoryProps) {
  return (
    <>
      <TitleAccent name={'Garderoba'} />
      <section>
        {products.map((product) => (
          <Link
            href={`/garderoba/${product.id}`}
            key={product.id}
            className={style.link}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </section>
    </>
  );
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
