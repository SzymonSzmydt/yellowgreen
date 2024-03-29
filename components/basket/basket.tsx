import style from './styles/basket.module.css';
import WindowDashboardBar from './../window/windowDashboardBar';
import { List } from './list';
import { Standard } from '../button/standard';
import { useRouter } from 'next/router';
import type { BasketData } from 'context/types/type';

type BasketProps = {
  basket: BasketData[];
};

export function BasketList({ basket }: BasketProps) {
  const router = useRouter();
  return basket.length > 0 ? (
    <div className={style.basket}>
      <WindowDashboardBar>
        <h1>Koszyk</h1>
        <span className={style.small}>( Razem: {basket.length} )</span>
      </WindowDashboardBar>
      <>
        {basket.map((product) => (
          <List key={product.id} {...product} />
        ))}
      </>
    </div>
  ) : (
    <section className={style.empty}>
      <div className={style.box}>
        <h2> Twój koszyk jest pusty</h2>
        <p>
          Zainspiruj się produktami, które mają ogromny wpływ na Twój komfort.
        </p>
        <Standard
          name={'Kontynuuj  zakupy'}
          handleClick={() => router.push('/')}
        />
      </div>
    </section>
  );
}
