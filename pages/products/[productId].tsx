import prod from './product.module.css';
import type { CorrectProductType } from './../../components/dashboard/types/type';
import { BasketCalc } from './../../components/products/basketCalc';

type ProductProps = {
  product: CorrectProductType;
};

function Product({ product }: ProductProps) {
  return (
    <div className="container">
      <BasketCalc product={product} />
    </div>
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
