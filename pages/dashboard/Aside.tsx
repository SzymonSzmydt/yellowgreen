import dash from "./dash.module.css";
import orders from "../../public/icons/orders.svg";
import handshake from "../../public/icons/handshake.svg";
import home from "../../public/icons/home.svg";
import add from "../../public/icons/add.svg";
import Image from "next/image";
import Link from "next/link";

function Aside() {
  return (
    <aside className={dash.aside}>
      <h1 className={dash.h1}>Panel</h1>
      <Link href='dashboard/' className={dash.link}>
        <Image src={home} alt='Home' className={dash.icon} />
        Home
      </Link>
      <Link href='dashboard/new' className={dash.link}>
        <Image src={add} alt='Add Product' className={dash.icon} />
        Dodaj Produkt
      </Link>
      <Link href='dashboard/orders' className={dash.link}>
        <Image src={orders} alt='Orders' className={dash.icon} />
        Zam. oczekujące
      </Link>
      <Link href='dashboard/new' className={dash.link}>
        <Image src={handshake} alt='Handshake' className={dash.icon} />
        Zam. zrealizowane
      </Link>
    </aside>
  );
}

export default Aside;
