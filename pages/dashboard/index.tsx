import dash from "./styles/dash.module.css";
import Head from "next/head";
import WindowDashboard from "../../components/window/windowDashboard";

function Dashboard() {
  return (
    <>
      <Head>
        <title> Panel administracyjny </title>
      </Head>
      <WindowDashboard>
        <section className={dash.top}></section>
        <section className={dash.body}></section>
      </WindowDashboard>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
