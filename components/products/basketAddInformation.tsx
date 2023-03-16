import { Variant } from 'components/button/Variant';
import style from './styles/basketAddInfo.module.css';

type InformationProps = {
  name: string;
  quantity: number;
};

export function BasketAddInformation({ name, quantity }: InformationProps) {
  return (
    <section className={style.wrapper}>
      <h4>Dodano produkt: </h4>
      <p>
        {quantity} x {name}
      </p>
      <div className={style.buttons}>
        <Variant name="Kontynuuj zakupy" />
        <Variant name="Przejdź do koszyka" />
      </div>
    </section>
  );
}
