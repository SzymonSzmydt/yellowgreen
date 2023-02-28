import style from './styles/stats.module.css';

type StatsProps = {
  title: string;
  stats: number;
};

export function Stats({ title, stats }: StatsProps) {
  return (
    <section className={style.box}>
      <p className={style.title}> {title} </p>
      <h2> {stats} </h2>
    </section>
  );
}
