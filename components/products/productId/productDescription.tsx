import style from './styles/description.module.css';
import { CorrectProductType } from '../../../context/types/type';

type ProductProps = {
  product: CorrectProductType;
};

export function PorductDescription({ product }: ProductProps) {
  return (
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
  );
}
