import type { ReactElement } from 'react';
import { useEffect } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import DashLayout from '../../components/layout/DashLayout';
import { useAppDispatch, useAppSelector } from './../../context/redux/hooks';
import { getCategory } from './../../context/redux/categorySlice';
import WindowDashboardBar from './../../components/window/windowDashboardBar';
import { Stats } from './../../components/dashboard/ui/stats/stats';

function Dashboard() {
  const category = useAppSelector((state) => state.category.value);
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const fetchCategory = async () => {
    const response = await fetch('/api/dashboard/getCategory');
    const data = await response.json();
    dispatch(getCategory(data));
  };

  useEffect(() => {
    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar streach={true}>
          <Stats title={'Produkty'} stats={products.length} />
          <Stats title={'Kategorie'} stats={category.length} />
          <Stats title={'Zam. oczekujące'} stats={0} />
          <Stats title={'Zam. zrealiz.'} stats={0} />
        </WindowDashboardBar>
      </WindowDashboard>
    </>
  );
}
export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};
