import style from './styles/intro.module.css';

type IntroProps = {
  products: CorrectProductType[];
};

function Intro({ products }: IntroProps) {
  return <section className={style.intro}></section>;
}

export default Intro;
