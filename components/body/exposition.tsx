import style from './styles/exposition.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CorrectProductType } from '../../context/types/type';
import { useState } from 'react';

type CommercialProps = {
  categoryUrlPathName: string;
  products: CorrectProductType[];
};

function Exposition({ categoryUrlPathName, products }: CommercialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((state) => (state + 1) % products.length);
  };

  const handleRight = () => {
    setCurrentIndex((state) => (state - 1 + products.length) % products.length);
  };

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
                style={{
                  transform: `translate(-${currentIndex * 120}%)`,
                }}
              >
                <Image
                  src={product.image1}
                  alt={`${product.namePL}`}
                  width="200"
                  height="200"
                />
              </Link>
            ))
          : null}
      </section>
      {products.length > 3 ? (
        <section className={style.arrows}>
          <div className={style.left} onClick={handleLeft} />
          <div className={style.right} onClick={handleRight} />
        </section>
      ) : null}
    </div>
  );
}

export default Exposition;
