import { CorrectProductType } from 'context/types/type';
import style from './styles/product.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BasketCalc } from './basketCalc';
import Image from 'next/image';

type ProductProps = {
  product: CorrectProductType;
};

export function ProductId({ product }: ProductProps) {
  const router = useRouter();
  const [image, setImage] = useState(0);

  const imagesPaths = Object.values(product)
    .filter((f) => /picture/g.test(f))
    .sort((a, b) => a.length - b.length);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleChangeImageFoward = () => {
    if (image < imagesPaths.length - 1) setImage((state) => state + 1);
    else setImage(0);
  };

  const handleChangeImageBackward = () => {
    if (image > 0) setImage((state) => state - 1);
    else setImage(imagesPaths.length - 1);
  };

  return (
    <>
      <div className={style.product}>
        <section className={style.box}>
          <div className={style.basket}>
            <BasketCalc product={product} />
            <details className={style.details}>
              <summary>Sposoby Płatności</summary>
              <br />
              <h4>Obsługujemy wygodne płatności</h4>
              <p>
                Za wszystkie produkty zapłacisz wygodnie, BLIK&apos;iem, Kartą
                płatniczą, Kartą debetową.
              </p>
            </details>
            <details className={style.details}>
              <summary>Wysyłka i Zwrot</summary>
              <p>Czas dostawy: 3 - 5 dni roboczych</p>
              <h4>Wysyłka</h4>
              <p>
                Wszystkie artykuły zostaną dostarczone&nbsp;do Twojego domu lub
                paczkomatu, który wybierzesz.
              </p>
              <h4>Zwrot</h4>
              <p>
                Jeśli produkt nie spełni Twoich oczekiwań, możesz odesłać
                nam&nbsp;go spowrotem. Przykładamy wielką wagę do jakości
                obsługi naszych klientów&nbsp;i pragniemy, aby doświadczenia
                zakupowe były na najwyższym poziomie!
              </p>
            </details>
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
        <article className={style.article}>
          <h2> Informacje o produkcie </h2>
          <h3> Opis produktu </h3>
          <p> {product.descriptionPL} </p>
          <h3> Kolor </h3>
          <p> {product.colorPL} </p>
          <h3> Kategoria </h3>
          <p> {product.category} </p>
          <h3> Numer produktu </h3>
          <p> {product.id} </p>
        </article>
      </div>
    </>
  );
}
