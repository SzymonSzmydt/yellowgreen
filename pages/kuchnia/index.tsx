import style from './styles/index.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './../../context/Firebase';
import { TitleAccent } from '../../components/ui/titleAccent';
import { CorrectProductType } from '../../context/types/type';
import { ProductCard } from 'components/products/productCard';

type CategoryProps = {
  products: CorrectProductType[];
};

export default function Kitchen({ products }: CategoryProps) {
  return (
    <>
      <TitleAccent name={'Kuchnia'} />
      <section className={style.box}>
        {products.map((product) => (
          <Link
            href={`/kuchnia/${product.id}`}
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
  const kitchen = data.filter((product) => product.category === 'Kuchnia');
  return {
    props: {
      products: kitchen,
    },
  };
};
