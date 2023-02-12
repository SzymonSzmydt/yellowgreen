import dash from "./dash.module.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Aside from "./Aside";

const inter = Inter({ subsets: ["latin"] });

function Dashboard() {
  return (
    <>
      <Head>
        <title> Panel Administracyjny </title>
      </Head>

      <main className={`${dash.main} ${inter.className}`}>
        <Aside />
      </main>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
