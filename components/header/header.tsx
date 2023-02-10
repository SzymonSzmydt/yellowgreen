import style from "./style.module.css";
import { Orbitron } from "@next/font/google";
import Navigation from "./navigation";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });

function Header() {
  return (
    <header className={style.header}>
      <section className={style.container}>
        <div className={style.top}>
          <Link href='/delivery' className={style.delivery}>
            <em>Darmowa dostawa już od 300 zł</em>
          </Link>
          <Link href='/basket'>
            <section className={style.basketBox}>
              <div className={style.basket} />
              <span className={style.basketQuantity}>0</span>
            </section>
          </Link>
        </div>
        <div className={style.logo}>
          <Link href='/'>
            <h1 className={orbitron.className}>North Shape</h1>
          </Link>
        </div>
        <Navigation />
      </section>
    </header>
  );
}

export default Header;
