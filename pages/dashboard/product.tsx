import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import WindowDashboardBar from '../../components/window/windowDashboardBar';
import { Variant } from '../../components/button/Variant';
import { useState } from 'react';
import WindowDashboardBody from '../../components/window/windowDashboardBody';
import AddNewProduct from '../../components/dashboard/page/addProduct';
import DashLayout from '../../components/layout/DashLayout';
import { ListOfProducts } from './../../components/dashboard/page/products';
import { useAppDispatch } from '../../context/redux/hooks';
import { getProducts } from '../../context/redux/productsSlice';
import { CorrectProductType } from '../../components/dashboard/types/type';

function ProductList() {
  const dispatch = useAppDispatch();
  const [isAddProductClicked, setIsAddProductClicked] =
    useState<boolean>(false);
  const [product, setProduct] = useState<CorrectProductType>(
    {} as CorrectProductType
  );

  const fetchProducts = async () => {
    const response = await fetch('/api/dashboard/getProduct');
    const data = await response.json();

    dispatch(getProducts(Object.values(data)));
  };

  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar>
          <button onClick={fetchProducts}> Refresh </button>
          {isAddProductClicked ? (
            <Variant
              name="Wróć do listy"
              handleClick={() => setIsAddProductClicked(false)}
            />
          ) : (
            <>
              <Variant
                name={'Dodaj produkt'}
                handleClick={() => setIsAddProductClicked(true)}
              />
              <Variant name={'Dodaj kategorię'} />
            </>
          )}
        </WindowDashboardBar>
        <WindowDashboardBody>
          {isAddProductClicked ? (
            <AddNewProduct
              product={product}
              setProduct={setProduct}
              setIsAddProductClicked={setIsAddProductClicked}
            />
          ) : (
            <ListOfProducts
              setProduct={setProduct}
              setIsAddProductClicked={setIsAddProductClicked}
            />
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
