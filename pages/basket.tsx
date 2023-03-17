import style from '../styles/basket.module.css';
import { Summary } from 'components/basket/summary';
import { BasketList } from './../components/basket/basket';
import { useAppSelector } from 'context/redux/hooks';

function Basket() {
  const basket = useAppSelector((state) => state.basket.value);
  return (
    <main className={style.wrapper}>
      <BasketList basket={basket} />
      {basket.length > 0 ? <Summary basket={basket} /> : null}
    </main>
  );
}

export default Basket;
