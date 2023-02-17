import DashLayout from '../../components/layout/DashLayout';
import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';

function Orders() {
  return (
    <WindowDashboard>
      <h1> Orders Page</h1>
    </WindowDashboard>
  );
}

export default Orders;

Orders.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};
