import style from './styles/exposition.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CorrectProductType } from './../../context/types/type';

type CommercialProps = {
  products: CorrectProductType[];
};

function Exposition({ products }: CommercialProps) {
  return (
    <section className={style.main}>
      {products
        ? products
            .filter((filtr) => filtr.category === 'Garderoba')
            .map((product) => (
              <Link href={`/garderoba/${product.id}`} key={product.id}>
                <Image
                  src={product.image1}
                  alt={`${product.namePL}`}
                  className={style.img}
                  width="240"
                  height="240"
                />
              </Link>
            ))
        : null}
    </section>
  );
}

export default Exposition;
