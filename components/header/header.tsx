import Link from "next/link";
import style from "./style.module.css";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link href='/Home'> Home </Link>
        <Link href='/Product'> Product </Link>
        <Link href='/About'> About </Link>
        <Link href='/Contact'> Contact </Link>
      </nav>
    </header>
  );
}

export default Header;
