import style from './product.module.css';
import type { CorrectProductType } from './../../components/dashboard/types/type';
import { BasketCalc } from './../../components/products/basketCalc';
import { Image } from 'next/image';
import { Head } from 'next/document';

type ProductProps = {
  product: CorrectProductType;
};

function Product({ product }: ProductProps) {
  return (
    <>
      <Head>
        <meta name="description" content={`${product.namePL}`} />
        <meta name="description" content={`${product.descriptionPL}`} />
        <title> {product.namePL}</title>
      </Head>
      <div className={style.product}>
        <section className={style.basket}>
          <BasketCalc product={product} />
          <div className={style.imageBox}>
            <em>Zdjęcie produktu</em>
          </div>
        </section>
        <section>
          <p>Kategoria</p>
          <p>{product.category}</p>
          <p> {product.descriptionPL}</p>
        </section>
      </div>
    </>
  );
}

export default Product;

export const getServerSideProps: GetStaticProps = async (context) => {
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
  };
};
