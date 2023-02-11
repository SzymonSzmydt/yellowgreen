import style from "./style.module.css";
import introImg from "../../public/intro.jpg";

function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.container}>
        <section className={style.box}>
          <h1 className={style.title}> eCommerce </h1>
          <p className={style.p}>
            Tworzymy sklepy internetowe dla Towjego biznesu.
          </p>
          <p className={style.p}> Podpinamy szybkie płatności takie jak BLIK</p>
        </section>
      </div>
    </div>
  );
}

export default Intro;
