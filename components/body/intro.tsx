import style from "./style.module.css";
import introImg from "../../public/intro.jpg";
import Image from "next/image";

function Intro() {
  return (
    <div className={style.intro}>
      <Image
        src={introImg}
        alt='Odświeżone wnętrze meblami z naszej kolekcji'
        className={style.introImage}
        placeholder='blur'
      />
    </div>
  );
}

export default Intro;
