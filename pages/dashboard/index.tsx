import type { ReactElement } from 'react';
import { useEffect } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import DashLayout from '../../components/layout/DashLayout';
import { useAppDispatch, useAppSelector } from './../../context/redux/hooks';
import { getCategory } from './../../context/redux/categorySlice';

function Dashboard() {
  const category = useAppSelector((state) => state.category.value);
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

  console.log('Category array: ', category);

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
