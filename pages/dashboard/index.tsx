import dash from "./styles/dash.module.css";
import Head from "next/head";
import Aside from "./Aside";

function Dashboard() {
  return (
    <div className={dash.general}>
      <Head>
        <title> Panel kontrolny </title>
      </Head>
      <Aside />
      <main className={dash.main}> Home Page</main>
    </div>
  );
}
export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
