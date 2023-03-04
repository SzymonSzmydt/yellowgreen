import type { ReactElement } from 'react';
import WindowDashboard from '../../components/window/windowDashboard';
import WindowDashboardBar from '../../components/window/windowDashboardBar';
import { Variant } from '../../components/button/Variant';
import { useState, useEffect } from 'react';
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
  const [productSelectedToEdit, setProductSelectedToEdit] =
    useState<CorrectProductType>({} as CorrectProductType);
  const [isCategoryClicked, setIsCategoryClicked] = useState<boolean>(false);

  const fetchProducts = async () => {
    const response = await fetch('/api/products/getProducts');
    const data = await response.json();

    dispatch(getProducts(data));
  };

  useEffect(() => {
    if (!isAddProductClicked) {
      fetchProducts();
    }
  }, [isAddProductClicked]);

  const backButton = () => {
    if (isAddProductClicked && isCategoryClicked) {
      return setIsCategoryClicked(false);
    }
    return setIsAddProductClicked(false);
  };

  return (
    <>
      <WindowDashboard>
        <WindowDashboardBar>
          {isAddProductClicked ? (
            <>
              <Variant name="Wróć do listy" handleClick={backButton} />
              {!isCategoryClicked ? (
                <Variant
                  name={'Dodaj kategorię'}
                  handleClick={() => setIsCategoryClicked(true)}
                />
              ) : null}
            </>
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
              isCategoryClicked={isCategoryClicked}
              setIsCategoryClicked={setIsCategoryClicked}
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
