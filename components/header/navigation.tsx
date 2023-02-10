import style from "./style.module.css";
import Link from "next/link";

function Navigation() {
  return (
    <nav className={style.nav}>
      <div className={style.navBox}>
        <Link href='/furniture' className={style.link}>
          Meble
        </Link>
        <Link href='/lamps' className={style.link}>
          Lampy
        </Link>
        <Link href='/accesories' className={style.link}>
          Akcesoria
        </Link>
        <Link href='/promotions' className={style.link}>
          Promocje
        </Link>
        <Link href='/contact' className={style.link}>
          Kontakt
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
