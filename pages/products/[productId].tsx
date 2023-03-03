import style from './product.module.css';
import type { CorrectProductType } from './../../components/dashboard/types/type';
import { BasketCalc } from './../../components/products/basketCalc';
import { Image } from 'next/image';
// import { Head } from 'next/head';
import { useRouter } from 'next/router';

type ProductProps = {
  product: CorrectProductType;
};

function Product({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* <Head>
        <meta name="description" content={`${product.namePL}`} />
        <meta name="description" content={`${product.descriptionPL}`} />
        <title> `${product.namePL}`</title>
      </Head> */}
      <div className={style.product}>
        <section className={style.box}>
          <div className={style.basket}>
            <BasketCalc product={product} />
            <details className={style.details}>
              <summary>Sposoby Płatności</summary>
              <br />
              <h4>Obsługujemy wygodne płatności</h4>
              <p>
                Za wszystkie produkty zapłacisz wygodnie, BLIK'iem, Kartą
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
            <em>Zdjęcie produktu</em>
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

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `http://localhost:3000/api/products/getProducts/`
  );
  const data = await response.json();
  const products = data.map((product) => {
    return {
      params: { productId: `${product.id}` },
    };
  });
  return {
    paths: products,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { productId } = params;

  const id: number = +productId;

  const response = await fetch(
    `http://localhost:3000/api/products/getProducts/`
  );
  const data = await response.json();
  const product = data.find((e) => e.id === id);

  return {
    props: {
      product: product,
    },
    revalidate: 20,
  };
};
