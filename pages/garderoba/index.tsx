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

export default function Category({ products }: CategoryProps) {
  return (
    <div className={style.category}>
      <TitleAccent name={'Garderoba'} />
      <section className={style.box}>
        {products.map((product) => (
          <Link href={`/garderoba/${product.id}`} className={style.link}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </section>
    </div>
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
