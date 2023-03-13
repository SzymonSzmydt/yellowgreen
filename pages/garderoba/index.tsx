import style from './styles/index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './../../context/Firebase';

type CategoryProps = {
  products: CorrectProductType[];
};

export default function Category({ products }: CategoryProps) {
  return (
    <div className={style.category}>
      <div className={style.title}>
        <p>Garderoba</p>
      </div>
      <section className={style.box}>
        {products.map((product) => (
          <article className={style.article}>
            <Link href={`/garderoba/${product.id}`}>
              <Image src={product.image1} width={300} height={300} />
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
