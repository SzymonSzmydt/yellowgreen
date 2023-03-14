import style from './styles/index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './../../context/Firebase';
import { TitleAccent } from '../../components/ui/titleAccent';

type CategoryProps = {
  products: CorrectProductType[];
};

export default function Category({ products }: CategoryProps) {
  return (
    <div className={style.category}>
      <TitleAccent name={'Garderoba'} />
      <section className={style.box}>
        {products.map((product) => (
          <article key={product.id} className={style.article}>
            <Link href={`/garderoba/${product.id}`}>
              <figcaption className={style.figcaption}>
                <Image
                  src={product.image1}
                  width={227}
                  height={227}
                  alt={product.namePL}
                />
              </figcaption>
              <section className={style.description}>
                <p> {product.namePL} </p>
                <p className={style.price}>
                  <data value={product.pricePL}>{product.pricePL} zł</data>
                </p>
              </section>
            </Link>
          </article>
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
