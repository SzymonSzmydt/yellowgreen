import style from './styles/top.module.css';

export function TopFooterSection() {
  return (
    <section className={style.top}>
      <div className={style.box}>
        <div className={style.truck} />
        <p>Wygodna dostawa</p>
      </div>
      <div className={style.box}>
        <div className={style.happy} />
        <p>Zadowolenie klientów</p>
      </div>
      <div className={style.box}>
        <div className={style.phone} />
        <p>Dział Obsługi Klienta</p>
      </div>
    </section>
  );
}
