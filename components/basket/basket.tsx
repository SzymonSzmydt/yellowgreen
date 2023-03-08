import style from './styles/basket.module.css';
import { useAppSelector } from './../../context/redux/hooks';
import WindowDashboardBar from './../window/windowDashboardBar';
import { List } from './list';

export function BasketList() {
  const basket = useAppSelector((state) => state.basket.value);
  return (
    <div className={style.basket}>
      <WindowDashboardBar>
        <h1>Koszyk</h1>
        <span className={style.small}>( Razem: {basket.length} )</span>
      </WindowDashboardBar>
      <>
        {basket.length > 0
          ? basket.map((product) => <List key={product.id} {...product} />)
          : null}
      </>
    </div>
  );
}
