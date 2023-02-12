import prod from "./product.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import StandardButton from "../../components/button/Standard";

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
  const [quantity, setQuantity] = useState(1);

  if (router.isFallback) {
    return <div> Loading... </div>;
  }

  return (
    <div className='container'>
      <section className={prod.box}>
        <h1> Product List</h1>
        <p> ID: {album.id} </p>
        <p> Title: {album.title} </p>
        <input type='number' defaultValue={1} />
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
