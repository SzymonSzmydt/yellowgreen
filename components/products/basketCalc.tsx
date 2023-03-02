import style from './styles/basket.module.css';
import { useState } from 'react';
import StandardButton from './../button/Standard';
import { Minus } from './../button/Minus';
import { Plus } from './../button/Plus';

type BasketProps = {
  product: CorrectProductType;
};

export function BasketCalc({ product }: BasketProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const quantityMinusValidation = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    else return null;
  };

  const quantityHandleValidation = (e: number) => {
    if (e >= 1) {
      setQuantity(+e);
    } else return;
  };
  return (
    <section className={style.box}>
      <h1> {product.namePL} </h1>
      <p> Id: {product.id} </p>
      <p> Title: {product.namePL} </p>
      <p> Cena: </p>

      <div className={style.btn}>
        <input
          type="number"
          value={quantity}
          onChange={(e) => quantityHandleValidation(+e.target.value)}
        />
        <Plus handleClick={() => setQuantity(quantity + 1)} />
        <Minus handleClick={quantityMinusValidation} />
      </div>

      <StandardButton
        name="KUP"
        handleClick={() => setQuantity(quantity + 1)}
      />
      <StandardButton
        name="DODAJ DO KOSZYKA"
        handleClick={() => setQuantity(quantity + 1)}
      />
    </section>
  );
}