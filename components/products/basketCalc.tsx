import style from './styles/basket.module.css';
import { useState } from 'react';
import StandardButton from './../button/Standard';
import { Minus } from './../button/Minus';
import { Plus } from './../button/Plus';
import { CorrectProductType } from './../../context/types/type';
import { useAppDispatch } from './../../context/redux/hooks';
import { addProductToBasket } from './../../context/redux/basketSlice';

type BasketProps = {
  product: CorrectProductType;
};

export function BasketCalc({ product }: BasketProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const quantityMinusValidation = () =>
    quantity > 1 ? setQuantity(quantity - 1) : null;

  const quantityHandleValidation = (e: number) =>
    e >= 1 ? setQuantity(+e) : null;

  const addToBasket = () => {
    dispatch(
      addProductToBasket({
        id: product.id,
        quantity: quantity,
        name: product.namePL,
        price: +product.pricePL,
      })
    );
    setQuantity(1);
  };

  return (
    <section className={style.box}>
      <article>
        <h1> {product.namePL} </h1>
        <p>
          <data className={style.price} value={product.pricePL}>
            {product.pricePL} zł
            <span className={style.small}>zawiera VAT</span>
          </data>
        </p>
        <p className={style.id}>Kod: {product.id}</p>
      </article>
      <div className={style.form}>
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
        name="DO KOSZYKA"
        handleClick={addToBasket}
        white={true}
      />
    </section>
  );
}
