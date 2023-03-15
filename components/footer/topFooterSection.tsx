import style from './styles/top.module.css';

export function TopFooterSection() {
  return (
    <section className={style.top}>
      <div className={style.box}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          className={style.svg}
        >
          <path d="M11.2 39.95q-2.45 0-4.175-1.725Q5.3 36.5 5.3 34.05H2V11q0-1.2.9-2.1Q3.8 8 5 8h28.95v8.35h5.25L46 25.4v8.65h-3.55q0 2.45-1.725 4.175Q39 39.95 36.55 39.95q-2.45 0-4.175-1.725Q30.65 36.5 30.65 34.05H17.1q0 2.45-1.725 4.175Q13.65 39.95 11.2 39.95Zm0-3q1.2 0 2.05-.85.85-.85.85-2.05 0-1.2-.85-2.05-.85-.85-2.05-.85-1.2 0-2.05.85-.85.85-.85 2.05 0 1.2.85 2.05.85.85 2.05.85ZM5 31.05h1.1q.85-1.35 2.15-2.15 1.3-.8 2.9-.8 1.6 0 2.925.825 1.325.825 2.175 2.125h14.7V11H5Zm31.55 5.9q1.2 0 2.05-.85.85-.85.85-2.05 0-1.2-.85-2.05-.85-.85-2.05-.85-1.2 0-2.05.85-.85.85-.85 2.05 0 1.2.85 2.05.85.85 2.05.85Zm-2.6-10.2h9.3l-5.55-7.4h-3.75ZM18 21.55Z" />
        </svg>
        <p>Wygodna dostawa</p>
      </div>
      <div className={style.box}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          className={style.svg}
        >
          <path d="M18.65 42V31.35q-3.2-.25-6.35-.675Q9.15 30.25 6 29.5l.75-3q4.25 1 8.55 1.425 4.3.425 8.7.425 4.4 0 8.7-.425Q37 27.5 41.25 26.5l.75 3q-3.15.75-6.3 1.175-3.15.425-6.35.675V42ZM24 25.3q-1.5 0-2.575-1.075-1.075-1.075-1.075-2.575 0-1.5 1.075-2.575Q22.5 18 24 18q1.5 0 2.575 1.075 1.075 1.075 1.075 2.575 0 1.5-1.075 2.575Q25.5 25.3 24 25.3ZM8.5 19.5q-1.05 0-1.775-.725Q6 18.05 6 17q0-1 .725-1.75T8.5 14.5q1 0 1.75.75T11 17q0 1.05-.75 1.775-.75.725-1.75.725Zm31 0q-1.05 0-1.775-.725Q37 18.05 37 17q0-1 .725-1.75t1.775-.75q1 0 1.75.75T42 17q0 1.05-.75 1.775-.75.725-1.75.725Zm-25-7.5q-1.05 0-1.775-.725Q12 10.55 12 9.5q0-1 .725-1.75T14.5 7q1 0 1.75.75T17 9.5q0 1.05-.75 1.775Q15.5 12 14.5 12Zm19 0q-1.05 0-1.775-.725Q31 10.55 31 9.5q0-1 .725-1.75T33.5 7q1 0 1.75.75T36 9.5q0 1.05-.75 1.775Q34.5 12 33.5 12ZM24 9q-1.05 0-1.775-.725Q21.5 7.55 21.5 6.5q0-1 .725-1.75T24 4q1 0 1.75.75t.75 1.75q0 1.05-.75 1.775Q25 9 24 9Z" />
        </svg>
        <p>Zadowolenie klientów</p>
      </div>
      <div className={style.box}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          className={style.svg}
        >
          <path d="M39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z" />
        </svg>
        <p>Zadowolenie klientów</p>
      </div>
    </section>
  );
}
