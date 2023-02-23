import style from './styles/productInfo.module.css';

export function ProductInfo({ ...product }: CorrectProductType) {
  return (
    <div className={style.wrapper}>
      <section className={style.box}>
        <p className={style.title}>Informacje</p>
        <ul className={style.text}>
          <li> {product.nameEN} </li>
          <li>&euro; {product.priceEU} </li>
        </ul>
      </section>
    </div>
  );
}
