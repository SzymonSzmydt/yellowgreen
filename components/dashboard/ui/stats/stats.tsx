import style from './styles/stats.module.css';

type StatsProps = {
  title: string;
  stats: number;
  foot: string;
};

export function Stats({ title, stats, foot }: StatsProps) {
  return (
    <section className={style.box}>
      <p className={style.title}> {title} </p>
      <h2> {stats} </h2>
      <p className={style.foot}> {foot} </p>
    </section>
  );
}
