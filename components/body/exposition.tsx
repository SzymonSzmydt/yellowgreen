import style from './styles/exposition.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CorrectProductType } from '../../context/types/type';

type CommercialProps = {
  categoryUrlPathName: string;
  products: CorrectProductType[];
};

function Exposition({ categoryUrlPathName, products }: CommercialProps) {
  return (
    <div className={style.wrapper}>
      <h3>Produkty z tej samej kategorii</h3>
      <section className={style.productBox}>
        {products
          ? products.map((product) => (
              <Link
                href={`/${categoryUrlPathName}/${product.id}`}
                key={product.id}
                className={style.linkBox}
              >
                <Image
                  src={product.image1}
                  alt={`${product.namePL}`}
                  className={style.img}
                  width="200"
                  height="200"
                />
              </Link>
            ))
          : null}
      </section>
    </div>
  );
}

export default Exposition;
