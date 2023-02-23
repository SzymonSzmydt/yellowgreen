import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import WindowDashboardBar from '../../components/window/windowDashboardBar';
import { Variant } from '../../components/button/Variant';
import { useState } from 'react';
import WindowDashboardBody from '../../components/window/windowDashboardBody';
import AddNewProduct from '../../components/dashboard/page/addProduct';
import DashLayout from '../../components/layout/DashLayout';
import { ListOfProducts } from './../../components/dashboard/page/products';

function ProductList() {
  const [productList, setProductList] = useState<Array<CorrectProductType>>([]);
  const [isAddProductClicked, setIsAddProductClicked] =
    useState<boolean>(false);

  const fetchProducts = async () => {
    const response = await fetch('/api/dashboard/getProduct');
    const data = await response.json();
    setProductList(Object.values(data));
  };

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
          <button onClick={fetchProducts}> Refresh </button>
        </WindowDashboardBar>
        <WindowDashboardBody>
          {isAddProductClicked ? (
            <AddNewProduct />
          ) : (
            <ListOfProducts productList={productList} />
          )}
        </WindowDashboardBody>
      </WindowDashboard>
    </>
  );
}

export default ProductList;

ProductList.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};
