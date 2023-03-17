import style from './styles/list.module.css';
import { BasketData } from './../../context/types/type';
import { useAppDispatch, useAppSelector } from './../../context/redux/hooks';
import {
  modyfyQuantity,
  deleteBasketProduct,
  resetBasket,
} from './../../context/redux/basketSlice';
import Image from 'next/image';

export function List({ id, quantity, name, price, image }: BasketData) {
  const basket = useAppSelector((state) => state.basket.value);
  const dispatch = useAppDispatch();

  const deleteProductFromBasket = () => {
    if (basket.length === 1) {
      return dispatch(resetBasket());
    }
    return dispatch(deleteBasketProduct(id));
  };

  const handleModyfyBasket = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.target.value === '0') {
      deleteProductFromBasket();
    }
    return dispatch(modyfyQuantity({ id: id, newQuantity: +e.target.value }));
  };

  return (
    <section className={style.box}>
      <Image src={image} width={96} height={96} alt={name} />
      <div className={style.information}>
        <section className={style.middle}>
          <p> {name} </p>
          <span className={style.del} onClick={deleteProductFromBasket}>
            Usuń
          </span>
        </section>
        <section className={style.total}>
          <select
            className={style.select}
            value={quantity}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleModyfyBasket(e)
            }
          >
            {Array.from({ length: 11 }, (_, i) => i).map((num) => (
              <option key={num}> {num} </option>
            ))}
          </select>
          {quantity * price} zł
        </section>
      </div>
    </section>
  );
}
