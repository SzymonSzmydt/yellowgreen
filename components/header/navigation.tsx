import style from "./style.module.css";
import Link from "next/link";

function Navigation() {
  return (
    <nav className={style.nav}>
      <Link href='/Home' className={style.link}>
        Home
      </Link>
      <Link href='/Product' className={style.link}>
        Product
      </Link>
      <Link href='/About' className={style.link}>
        About
      </Link>
      <Link href='/Contact' className={style.link}>
        Contact
      </Link>
    </nav>
  );
}

export default Navigation;
