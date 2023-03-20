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

  const deliveryPrice = (): number => {
    const allDeliveryPrices = basket.map((product) => product.delivery);
    return Array.from(new Set(allDeliveryPrices)).reduce((a, b) => a + b, 0);
  };

  const totalDeliveryPrice: number = parseFloat(deliveryPrice().toFixed(2));

  return (
    <section className={style.summary}>
      <h2>Podsumowanie zamówienia</h2>
      <div>
        <span>Wartość zamówienia</span>
        {totalProductPrice.toFixed(2)} zł
      </div>
      <div>
        <span>Opłaty za wysyłkę</span>
        {totalDeliveryPrice.toFixed(2)} zł
      </div>
      <strong>
        <span>Do zapłaty</span>
        {(totalProductPrice + totalDeliveryPrice).toFixed(2)} zł
      </strong>
      <Standard name={'Do kasy'} handleClick={() => ''} />
    </section>
  );
}
