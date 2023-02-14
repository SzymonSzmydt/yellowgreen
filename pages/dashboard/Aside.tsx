import aside from "./styles/aside.module.css";
import orders from "../../public/icons/orders.svg";
import handshake from "../../public/icons/handshake.svg";
import home from "../../public/icons/home.svg";
import add from "../../public/icons/add.svg";
import panel from "../../public/icons/panel.svg";
import Image from "next/image";
import Link from "next/link";

function Aside() {
  return (
    <aside className={aside.aside}>
      <section className={aside.box}>
        <div className={aside.title}>
          <Image src={panel} alt='Home' className={aside.icon} />
          Panel
        </div>
        <span className={aside.small}>administracyjny</span>
      </section>
      <Link href='/dashboard' className={aside.link}>
        <Image src={home} alt='Home' className={aside.icon} />
        Home
      </Link>
      <Link href='dashboard/add' className={aside.link}>
        <Image src={add} alt='Add Product' className={aside.icon} />
        Dodaj Produkt
      </Link>
      <Link href='dashboard/orders' className={aside.link}>
        <Image src={orders} alt='Orders' className={aside.icon} />
        Zam. oczekujące
      </Link>
      <Link href='dashboard/new' className={aside.link}>
        <Image src={handshake} alt='Handshake' className={aside.icon} />
        Zam. zrealizowane
      </Link>
    </aside>
  );
}

export default Aside;
