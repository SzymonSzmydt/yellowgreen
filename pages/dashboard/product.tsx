import type { ReactElement } from 'react';
import DashLayout from '../../components/layout/DashLayout';
import WindowDashboard from '../../components/window/windowDashboard';
import WindowDashboardBar from '../../components/window/windowDashboardBar';
import WindowDashboardBody from '../../components/window/windowDashboardBody';
import AddNewProduct from '../../components/dashboard/page/addProduct';
import { Variant } from '../../components/button/Variant';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../context/redux/hooks';
import { getProducts } from '../../context/redux/productsSlice';
import { ListOfProducts } from './../../components/dashboard/page/listOfProducts';
import { CorrectProductType } from '../../context/types/type';

function ProductList() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.value);
  const [isAddProductClicked, setIsAddProductClicked] = useState(false);
  const [productSelectedToEdit, setProductSelectedToEdit] =
    useState<CorrectProductType>({} as CorrectProductType);

  const fetchProducts = async () => {
    const response = await fetch('/api/products/getProducts');
    const data = await response.json();
    dispatch(getProducts(data));
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
          {isAddProductClicked ? (
            <AddNewProduct
              productSelectedToEdit={productSelectedToEdit}
              setProductSelectedToEdit={setProductSelectedToEdit}
              setIsAddProductClicked={setIsAddProductClicked}
            />
          ) : (
            <ListOfProducts
              setProductSelectedToEdit={setProductSelectedToEdit}
              setIsAddProductClicked={setIsAddProductClicked}
              productSelectedToEdit={productSelectedToEdit}
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
