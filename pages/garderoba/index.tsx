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
      {products.map((product) => (
        <article>
          <Image src={product.image1} width={300} height={300} />
          <Link href={`/garderoba/${product.id}`}>
            <p> {product.namePL} </p>
            <p> {product.pricePL} zł</p>
          </Link>
        </article>
      ))}
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
