import prod from './product.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Plus } from './../../components/button/Plus';
import { Minus } from '../../components/button/Minus';
import StandardButton from '../../components/button/Standard';

type Album = {
  id: number;
  title: string;
};

type ProductProps = {
  params: { productId: string };
  album: Album;
};

function Product({ album }: ProductProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);

  if (router.isFallback) {
    return <div> Loading... </div>;
  }

  const quantityMinusValidation = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    else return null;
  };

  const quantityHandleValidation = (e: number) => {
    if (e >= 1) {
      setQuantity(+e);
    } else return null;
  };
  return (
    <div className="container">
      <section className={prod.box}>
        <h1> Product List</h1>
        <p> ID: {album.id} </p>
        <p> Title: {album.title} </p>
        <p> Cena: </p>

        <div className={prod.btn}>
          <input
            type="number"
            value={quantity}
            onChange={(e) => quantityHandleValidation(+e.target.value)}
          />
          <Plus handleClick={() => setQuantity(quantity + 1)} />
          <Minus handleClick={quantityMinusValidation} />
        </div>

        <StandardButton
          name="Kup"
          handleClick={() => setQuantity(quantity + 1)}
        />
        <StandardButton
          name="Dodaj do koszyka"
          handleClick={() => setQuantity(quantity + 1)}
        />
      </section>
    </div>
  );
}

export default Product;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params?.productId}`
  );
  const data = await response.json();
  return {
    props: {
      album: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  };
};
