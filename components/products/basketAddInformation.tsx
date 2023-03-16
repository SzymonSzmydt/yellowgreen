import { Variant } from 'components/button/Variant';
import style from './styles/basketAddInfo.module.css';
import { useRouter } from 'next/router';

type InformationProps = {
  name: string;
  quantity: number;
  handleClick: () => void;
};

export function BasketAddInformation({
  name,
  quantity,
  handleClick,
}: InformationProps) {
  const router = useRouter();

  return (
    <section className={style.wrapper}>
      <h4>Dodano produkt: </h4>
      <p>
        {quantity} x {name}
      </p>
      <div className={style.buttons}>
        <Variant name="Kontynuuj zakupy" handleClick={handleClick} />
        <Variant
          name="Przejdź do koszyka"
          handleClick={() => router.push('/basket')}
        />
      </div>
    </section>
  );
}
