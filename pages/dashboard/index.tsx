import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import DashLayout from '../../components/layout/DashLayout';

function Dashboard() {
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
