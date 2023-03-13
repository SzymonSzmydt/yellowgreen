import style from './styles/title.module.css';

export function TitleAccent({ name }: string) {
  return (
    <section className={style.title}>
      <p> {name} </p>
    </section>
  );
}
