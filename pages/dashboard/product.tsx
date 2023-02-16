import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import WindowDashboardBar from '../../components/window/windowDashboardBar';
import { Variant } from '../../components/button/Variant';
import { useState } from 'react';
import WindowDashboardBody from '../../components/window/windowDashboardBody';
import AddNewProduct from '../../components/dashboard/add';
import DashLayout from '../../components/layout/DashLayout';

function ProductList() {
  const [isAddProductClicked, setIsAddProductClicked] = useState(false);
  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar>
          {isAddProductClicked ? (
            <Variant
              name="Wróć do listy"
              handleClick={() => setIsAddProductClicked(false)}
            />
          ) : (
            <Variant
              name={'Dodaj produkt'}
              handleClick={() => setIsAddProductClicked(true)}
            />
          )}
        </WindowDashboardBar>
        <WindowDashboardBody>
          {isAddProductClicked ? <AddNewProduct /> : <h1> Lista Porduktów</h1>}
        </WindowDashboardBody>
      </WindowDashboard>
    </>
  );
}

export default ProductList;

ProductList.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};
