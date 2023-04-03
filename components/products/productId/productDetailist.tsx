import style from './styles/detaillist.module.css';

interface DetaillistProps {
  shipping: string;
}

export function ProductDetaillist({ shipping }: DetaillistProps) {
  return (
    <>
      <details className={style.details}>
        <summary>Sposoby Płatności</summary>
        <br />
        <h4>Obsługujemy wygodne płatności</h4>
        <p>
          Za wszystkie produkty zapłacisz wygodnie, BLIK&apos;iem, Kartą
          płatniczą, Kartą debetową.
        </p>
      </details>
      <details className={style.details}>
        <summary>Wysyłka i Zwrot</summary>
        <p>Czas dostawy: {shipping}</p>
        <h4>Wysyłka</h4>
        <p>
          Wszystkie artykuły zostaną dostarczone&nbsp;do Twojego domu lub
          paczkomatu, który wybierzesz.
        </p>
        <h4>Zwrot</h4>
        <p>
          Jeśli produkt nie spełni Twoich oczekiwań, możesz odesłać nam&nbsp;go
          spowrotem. Przykładamy wielką wagę do jakości obsługi naszych
          klientów&nbsp;i pragniemy, aby doświadczenia zakupowe były na
          najwyższym poziomie!
        </p>
      </details>
    </>
  );
}
