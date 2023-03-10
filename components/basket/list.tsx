import style from './styles/list.module.css';
import { BasketData } from './../../context/types/type';
import { useAppDispatch, useAppSelector } from './../../context/redux/hooks';
import {
  modyfyQuantity,
  deleteBasketProduct,
} from './../../context/redux/basketSlice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function List({ id, quantity, name, price }: BasketData) {
  const router = useRouter();
  const basket = useAppSelector((state) => state.basket.value);
  const dispatch = useAppDispatch();

  const handleModyfyBasket = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.target.value === '0') {
      dispatch(deleteBasketProduct(id));
    }
    dispatch(modyfyQuantity({ id: id, newQuantity: +e.target.value }));
  };

  useEffect(() => {
    if (basket.length === 0) {
      router.push('/');
    }
  }, [basket, router]);

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
