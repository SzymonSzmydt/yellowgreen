import dash from "./styles/dash.module.css";
import Head from "next/head";
import Aside from "./aside";
import AddNewProduct from "./add";

function Dashboard() {
  return (
    <>
      <Head>
        <title> Panel administracyjny </title>
      </Head>
      <div className={dash.general}>
        <main className={dash.main}>
          <section className={dash.top}></section>

          <section className={dash.body}>
            <AddNewProduct />
          </section>
        </main>
      </div>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      <Aside />
      {page}
    </>
  );
};
