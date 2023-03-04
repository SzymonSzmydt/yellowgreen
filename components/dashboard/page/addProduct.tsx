import { Variant } from '../../button/Variant';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import type { CorrectProductType } from '../types/type';
import { useAppDispatch, useAppSelector } from '../../../context/redux/hooks';
import {
  deleteProduct,
  addProduct,
} from '../../../context/redux/productsSlice';
import { getCategory } from '../../../context/redux/categorySlice';
import { Category } from './category';
import { CorrectProductType } from './../types/type';
import { ProductForm } from './../ui/productForm';

const initialState: CorrectProductType = {
  id: 0,
  priceEU: '',
  pricePL: '',
  picture: '',
  category: '',
  colorEN: '',
  colorPL: '',
  descriptionEN: '',
  descriptionPL: '',
  nameEN: '',
  namePL: '',
  sales: 0,
};

type AddProps = {
  productSelectedToEdit: CorrectProductType;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
  isCategoryClicked: boolean;
  setIsCategoryClicked: Dispatch<SetStateAction<boolean>>;
};

function AddNewProduct({
  productSelectedToEdit,
  setIsAddProductClicked,
  setProductSelectedToEdit,
  isCategoryClicked,
  setIsCategoryClicked,
}: AddProps) {
  const [productData, setProductData] =
    useState<CorrectProductType>(initialState);
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category.value);

  const fetchCategory = async () => {
    const response = await fetch('/api/dashboard/getCategory');
    const data = await response.json();
    dispatch(getCategory(data));
  };

  useEffect(() => {
    if (productSelectedToEdit.namePL?.length > 2) {
      setProductData(productSelectedToEdit);
      setProductSelectedToEdit({} as CorrectProductType);
    }
    if (category.length === 0) {
      fetchCategory();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSelectedToEdit]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/dashboard/postProduct', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.json();
    console.log(data);

    if (productData.id > 0) {
      dispatch(deleteProduct(productSelectedToEdit.id));
    }
    if (data.id) {
      setProductData({ ...productData, id: data.id });
    }
    dispatch(addProduct(productData));
    setProductData(initialState);
    setIsAddProductClicked(false);
  };

  return isCategoryClicked ? (
    <Category setIsCategoryClicked={setIsCategoryClicked} />
  ) : (
    <>
      <h2> Informacje o produkcie</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <ProductForm
          productData={productData}
          setProductData={setProductData}
          category={category}
        />
        <Variant name={'Zapisz'} />
      </form>
    </>
  );
}

export default AddNewProduct;
