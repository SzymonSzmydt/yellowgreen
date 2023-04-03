import { CorrectProductType } from 'context/types/type';
import style from './styles/product.module.css';
import { useRouter } from 'next/router';
import React, { Suspense, useState } from 'react';
import { BasketCalc } from '../productBasket/basketCalc';
import Image from 'next/image';
import { PorductDescription } from './productDescription';
import { ProductDetaillist } from './productDetailist';
import { Spinner } from 'components/ui/spinner';
import { YouAreHereLinks } from 'components/ui/youAreHereLinks';

const ExpositionWithProduct = React.lazy(
  () => import('components/body/exposition')
);

type ProductProps = {
  product: CorrectProductType;
  products: CorrectProductType[];
};

export function ProductId({ product, products }: ProductProps) {
  const router = useRouter();
  const [image, setImage] = useState(0);

  const imagesPaths = Object.values(product)
    .filter((f) => /picture/g.test(f))
    .sort((a, b) => a.length - b.length);

  const handleChangeImageFoward = () => {
    if (image < imagesPaths.length - 1) setImage((state) => state + 1);
    else setImage(0);
  };

  const handleChangeImageBackward = () => {
    if (image > 0) setImage((state) => state - 1);
    else setImage(imagesPaths.length - 1);
  };

  const selectedExpositionProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return router.isFallback ? (
    <Spinner />
  ) : (
    <>
      <YouAreHereLinks {...product} />
      <div className={style.product}>
        <section className={style.box}>
          <div className={style.basket}>
            <BasketCalc product={product} />
            <ProductDetaillist shipping={product.shipping} />
          </div>
          <div className={style.imageBox}>
            <figcaption className={style.figcaption}>
              <div
                className={style.arrowL}
                onClick={handleChangeImageBackward}
              />
              <Image
                src={imagesPaths[image]}
                alt={product.namePL}
                height={520}
                width={520}
                className={style.image}
              />
              <div className={style.arrowR} onClick={handleChangeImageFoward} />
            </figcaption>
            <section className={style.iconImage}>
              {imagesPaths.length > 0
                ? imagesPaths.map((img, index) => (
                    <Image
                      key={img}
                      src={img}
                      width={80}
                      height={80}
                      alt={img}
                      className={style.smallImage}
                      onClick={() => setImage(index)}
                    />
                  ))
                : null}
            </section>
          </div>
        </section>
        <PorductDescription product={product} />
        <Suspense fallback={<Spinner />}>
          <ExpositionWithProduct
            categoryUrlPathName={router.asPath.slice(
              1,
              router.asPath.indexOf('/', 2)
            )}
            products={selectedExpositionProducts}
          />
        </Suspense>
      </div>
    </>
  );
}
