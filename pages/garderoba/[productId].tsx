import style from './styles/product.module.css';
import { CorrectProductType } from './../../context/types/type';
import { BasketCalc } from './../../components/products/basketCalc';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './../../context/Firebase';
import Image from 'next/image';

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
            <Image src={product.image1} width={520} height={265} />
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
  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];

  const products = data
    .filter((filtr) => filtr.category === 'Garderoba')
    .map((product) => {
      return {
        params: { productId: `${product.id}` },
      };
    });
  return {
    paths: products,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params?.productId;

  const docSnap = await getDoc(doc(db, 'dashboard', 'products'));
  const data = docSnap.exists() ? Object.values(docSnap.data()) : [];

  const product = data.find((e) => '' + e.id === productId);
  return {
    props: {
      product: product,
    },
  };
};
