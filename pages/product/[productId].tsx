import Image from "next/image";
import { useRouter } from "next/router";

type Album = {
  params: { productId: string };
  id: number;
  title: string;
};

function Product({ id, title }: Album) {
  const router = useRouter();

  if (router.isFallback) {
    return <div> Loading... </div>;
  }

  return (
    <div>
      <h1> Product List</h1>
      <p> ID: {id} </p>
      <p> Title: {title} </p>
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
