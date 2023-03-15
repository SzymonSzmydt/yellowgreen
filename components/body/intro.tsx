import style from './styles/intro.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { TitleAccent } from '../ui/titleAccent';
import { CorrectProductType } from '../../context/types/type';

type IntroProps = {
  products: CorrectProductType[];
};

function Intro({ products }: IntroProps) {
  const product = products.find((product) => product.id === 1678469036739);
  return product ? (
    <section className={style.intro}>
      <TitleAccent name={'Warto zobaczyć'} />
      <div className={style.box}>
        <Link href="/garderoba" className={style.imageBox}>
          <Image
            className={style.image}
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
  ) : null;
}

export default Intro;
