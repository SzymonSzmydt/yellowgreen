import aside from "./styles/aside.module.css";
import orders from "../../public/icons/orders.svg";
import handshake from "../../public/icons/handshake.svg";
import home from "../../public/icons/home.svg";
import list from "../../public/icons/list.svg";
import panel from "../../public/icons/panel.svg";
import Image from "next/image";
import Link from "next/link";

function Aside() {
  return (
    <aside className={aside.aside}>
      <section className={aside.box}>
        <div className={aside.title}>
          <Image src={panel} alt='Home' className={aside.panelIcon} />
          Panel
        </div>
        <span className={aside.small}>administracyjny</span>
      </section>
      <p className={aside.category}>ANALITYKA</p>

      <Link href='/dashboard' className={aside.link}>
        <Image src={home} alt='Home' className={aside.icon} />
        Home
      </Link>
      <Link href='dashboard/new' className={aside.link}>
        <Image src={handshake} alt='Handshake' className={aside.icon} />
        Zam. zrealizowane
      </Link>

      <p className={aside.category}>ZARZĄDZANIE</p>

      <Link href='dashboard/list' className={aside.link}>
        <Image src={list} alt='list Product' className={aside.icon} />
        Lista produktów
      </Link>
      <Link href='dashboard/orders' className={aside.link}>
        <Image src={orders} alt='Orders' className={aside.icon} />
        Zam. oczekujące
      </Link>
    </aside>
  );
}

export default Aside;
