import style from './styles/list.module.css';
import { BasketData } from './../../context/types/type';
import { useAppDispatch, useAppSelector } from './../../context/redux/hooks';
import {
  modyfyQuantity,
  deleteBasketProduct,
  resetBasket,
} from './../../context/redux/basketSlice';
import { useRouter } from 'next/router';

export function List({ id, quantity, name, price }: BasketData) {
  const router = useRouter();
  const basket = useAppSelector((state) => state.basket.value);
  const dispatch = useAppDispatch();

  const handleModyfyBasket = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.target.value === '0') {
      if (basket.length === 1) {
        dispatch(resetBasket());
        return router.push('/');
      }
      return dispatch(deleteBasketProduct(id));
    }
    return dispatch(modyfyQuantity({ id: id, newQuantity: +e.target.value }));
  };

  return (
    <div className={style.box}>
      <div className={style.image} />
      <div className={style.information}>
        <section className={style.midle}>
          <p> {name} </p>
          <p className={style.del}> Usuń </p>
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
    </div>
  );
}
