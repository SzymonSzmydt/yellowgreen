import type { ReactElement } from 'react';
import { useEffect } from 'react';
import DashLayout from '../../components/layout/DashLayout';
import WindowDashboard from '../../components/window/windowDashboard';
import WindowDashboardBar from './../../components/window/windowDashboardBar';
import { useAppDispatch, useAppSelector } from './../../context/redux/hooks';
import { getProducts } from './../../context/redux/productsSlice';
import { Stats } from './../../components/dashboard/ui/stats/stats';
import { CorrectProductType } from './../../context/types/type';

function Dashboard() {
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    const response = await fetch('/api/products/getProducts');
    const data = await response.json();
    const result: Array<CorrectProductType> = Object.values(data);
    dispatch(getProducts(result));
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar streach={true}>
          <Stats title={'Produkty'} stats={products.length} />
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
