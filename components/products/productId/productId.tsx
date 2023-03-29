import { CorrectProductType } from 'context/types/type';
import style from './styles/product.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BasketCalc } from '../productBasket/basketCalc';
import Image from 'next/image';
import { PorductDescription } from './productDescription';
import { ProductDetaillist } from './productDetailist';
import Exposition from 'components/body/exposition';
import { Spinner } from 'components/ui/spinner';

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
      <div className={style.product}>
        <section className={style.box}>
          <div className={style.basket}>
            <BasketCalc product={product} />
            <ProductDetaillist />
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
            <section className={style.dots}>
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
        <Exposition
          category={product.category}
          products={selectedExpositionProducts}
        />
      </div>
    </>
  );
}
