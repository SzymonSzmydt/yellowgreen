import dash from "./styles/dash.module.css";
import Head from "next/head";
import Aside from "./aside";
import dashNewProduct from "./add";

function Dashboard() {
  return (
    <>
      <Head>
        <title> Panel kontrolny </title>
      </Head>
      <div className={dash.general}>
        <Aside />

        <main className={dash.main}>
          <section className={dash.top}></section>

          <section className={dash.body}>
            <dashNewProduct />
          </section>
        </main>
      </div>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
