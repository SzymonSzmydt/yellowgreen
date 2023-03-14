import style from './styles/title.module.css';

type TitleProps = {
  name: string;
};

export function TitleAccent({ name }: TitleProps) {
  return (
    <section className={style.title}>
      <p> {name} </p>
    </section>
  );
}
