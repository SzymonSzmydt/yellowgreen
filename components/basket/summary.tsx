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
  const totalProductPrice: number = parseFloat(totalProductValue.toFixed(2));

  const deliveryPrice = basket
    .map((product) =>
      product.quantity * product.weight <= 30
        ? 1
        : ((product.quantity * product.weight) / 30) * product.delivery
    )
    .reduce((a, b) => a + b, 0);

  const totalDeliveryPrice: number = parseFloat(deliveryPrice.toFixed(2));

  return (
    <section className={style.summary}>
      <h2>Podsumowanie zamówienia</h2>
      <div>
        <span>Wartość zamówienia</span>
        {totalProductPrice} zł
      </div>
      <div>
        <span>Opłaty za wysyłkę</span>
        {totalDeliveryPrice} zł
      </div>
      <strong>
        <span>Do zapłaty</span>
        {totalProductPrice + totalDeliveryPrice} zł
      </strong>
      <Standard name={'Do kasy'} handleClick={() => ''} />
    </section>
  );
}
