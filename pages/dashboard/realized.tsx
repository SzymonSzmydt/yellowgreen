import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import DashLayout from '../../components/layout/DashLayout';

function Realized() {
  return (
    <>
      <WindowDashboard>
        <h1>Realized</h1>
      </WindowDashboard>
    </>
  );
}
export default Realized;

Realized.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};
