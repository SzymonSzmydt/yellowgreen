import style from './styles/list.module.css';
import { BasketData } from './../../context/types/type';
import { useAppDispatch } from './../../context/redux/hooks';
import {
  modyfyQuantity,
  deleteBasketProduct,
} from './../../context/redux/basketSlice';

export function List({ id, quantity, name, price }: BasketData) {
  const dispatch = useAppDispatch();

  const handleModyfyBasket = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.target.value === '0') {
      dispatch(deleteBasketProduct(id));
    }
    dispatch(modyfyQuantity({ id: id, newQuantity: +e.target.value }));
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
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num}> {num} </option>
            ))}
          </select>
          {quantity * price} zł
        </section>
      </div>
    </div>
  );
}
