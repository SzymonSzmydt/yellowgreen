import prod from "./product.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import StandardButton from "../../components/button/Standard";
import { Plus } from "./../../components/button/Plus";
import { Minus } from "../../components/button/Minus";

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

  const quantityHandleValidation = (e) => {
    if (e >= 1) {
      setQuantity(+e);
    } else return null;
  };
  return (
    <div className='container'>
      <section className={prod.box}>
        <h1> Product List</h1>
        <p> ID: {album.id} </p>
        <p> Title: {album.title} </p>
        <p> Cena: </p>

        <div className={prod.btn}>
          <input
            type='number'
            value={quantity}
            onChange={(e) => quantityHandleValidation(e.target.value)}
          />
          <Plus handleClick={() => setQuantity(quantity + 1)} />
          <Minus handleClick={quantityMinusValidation} />
        </div>

        <StandardButton
          name='Kup'
          handleClick={() => setQuantity(quantity + 1)}
        />
        <StandardButton
          name='Dodaj do koszyka'
          handleClick={() => setQuantity(quantity + 1)}
        />
      </section>
    </div>
  );
}

export default Product;

export async function getStaticProps(context: Album) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params.productId}`
  );
  const data = await response.json();
  return {
    props: {
      album: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
