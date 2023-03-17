import { Standard } from 'components/button/standard';
import style from './styles/summary.module.css';
import { BasketData } from '../../context/types/type';

type SummaryProps = {
  basket: BasketData[];
};

export function Summary({ basket }: SummaryProps) {
  const totalProductValue = basket
    .map((product) => product.quantity * product.price)
        .reduce((a, b) => a + b, 0);
    
    const deliveryPrice = basket
      .map((product) => product.quantity * product.price)
      .reduce((a, b) => a + b, 0);

  return (
    <section className={style.summary}>
      <h2>Podsumowanie zamówienia</h2>
      <div>
        <span>Wartość zamówienia</span>{' '}
        {parseFloat(totalProductValue.toFixed(2))} zł
      </div>
      <div>
        <span>Opłaty za wysyłkę</span>
      </div>
      <strong>
        <span>Do zapłaty</span>
      </strong>
      <Standard name={'Do kasy'} handleClick={() => ''} />
    </section>
  );
}
