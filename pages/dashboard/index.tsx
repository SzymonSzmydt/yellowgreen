import WindowDashboard from "../../components/window/windowDashboard";

function Dashboard() {
  return (
    <>
      <WindowDashboard>ddfg</WindowDashboard>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
