import style from "./style.module.css";
import introImg from "../../public/intro.jpg";

function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.container}>
        <section className={style.box}>
          <h2 className={style.title}> Sklep internetowy dla Ciebie </h2>
          <p className={style.p}>
            Tworzymy sklepy internetowe dla Towjego biznesu.
          </p>
          <p>

          </p>
        </section>
      </div>
    </div>
  );
}

export default Intro;
