import style from './styles/style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CorrectProductType } from './../../context/types/type';

type CommercialProps = {
  products: CorrectProductType[];
};

function Commercial({ products }: CommercialProps) {
  return (
    <main className={style.main}>
      {products
        ? products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <Image
                src={`/1.webp`}
                alt={`${product.namePL}`}
                className={style.img}
                width="240"
                height="320"
              />
            </Link>
          ))
        : null}
    </main>
  );
}

export default Commercial;
