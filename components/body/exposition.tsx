import style from './styles/exposition.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CorrectProductType } from '../../context/types/type';

type CommercialProps = {
  category: string;
  products: CorrectProductType[];
};

function Exposition({ category, products }: CommercialProps) {
  return (
    <>
      <h3>Producty z tej samej kategorii</h3>
      <section className={style.main}>
        {products
          ? products.map((product) => (
              <Link href={`/${category}/${product.id}`} key={product.id}>
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
    </>
  );
}

export default Exposition;
