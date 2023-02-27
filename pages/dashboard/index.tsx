import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import DashLayout from '../../components/layout/DashLayout';

function Dashboard() {
  const fetchProducts = async () => {
    const response = await fetch('/api/dashboard/getCategory');
    const data = await response.json();

    dispatch(getProducts());
  };

  return (
    <>
      <WindowDashboard>ddfg</WindowDashboard>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};
