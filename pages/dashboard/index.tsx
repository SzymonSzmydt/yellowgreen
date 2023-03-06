import type { ReactElement } from 'react';
import { useEffect } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import DashLayout from '../../components/layout/DashLayout';
import { useAppDispatch, useAppSelector } from './../../context/redux/hooks';
import { getCategory } from './../../context/redux/categorySlice';
import { getProducts } from './../../context/redux/productsSlice';
import WindowDashboardBar from './../../components/window/windowDashboardBar';
import { Stats } from './../../components/dashboard/ui/stats/stats';
import { CorrectProductType } from './../../context/types/type';

function Dashboard() {
  const category = useAppSelector((state) => state.category.value);
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const fetchCategory = async () => {
    const response = await fetch('/api/dashboard/getCategory');
    const data = await response.json();
    const result: Array<string> = Object.values(data);

    dispatch(getCategory(result));
  };
  const fetchProducts = async () => {
    const response = await fetch('/api/products/getProducts');
    const data = await response.json();
    const result: Array<CorrectProductType> = Object.values(data);
    dispatch(getProducts(result));
  };

  useEffect(() => {
    if (category.length < 1) {
      fetchCategory();
    }
    if (products.length === 0) {
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, products]);

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
