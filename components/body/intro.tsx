import style from './styles/intro.module.css';
import Image from 'next/image';
import Link from 'next/link';

type IntroProps = {
  products: CorrectProductType[];
};

function Intro({ products }: IntroProps) {
  const product = products.find((product) => product.id === 1678469036739);
  return (
    <section className={style.intro}>
      <div className={style.title}>
        <p> Subtelność</p>
      </div>
      <div className={style.box}>
        <Link href="/garderoba">
          <Image
            src={product.image2}
            width={600}
            height={600}
            alt={product.namePL}
          />
        </Link>
        <div className={style.text}>
          <h3>Subtelne spojrzenie</h3>
          <p>
            Uporządkowana biżuteria, zegarki czy paski&nbsp;w szufladzie daje
            absolutne poczucie komfortu i estetyki. Z&nbsp;wkładami
            garderobianymi o niezwykle pięknym wykończeniu harmonia wnętrza się
            dopełnia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
