import dash from "./dash.module.css";
import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import home from "../../public/icons/home.svg";
import orders from "../../public/icons/orders.svg";
import handshake from "../../public/icons/handshake.svg";
import add from "../../public/icons/add.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

function Dashboard() {
  return (
    <>
      <Head>
        <title> Panel Administracyjny </title>
      </Head>
      <main className={`${dash.main} ${inter.className}`}>
        <aside className={dash.aside}>
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
      </main>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
