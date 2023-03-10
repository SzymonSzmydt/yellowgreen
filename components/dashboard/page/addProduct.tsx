import { Variant } from '../../button/Variant';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../../context/redux/hooks';
import { modyfyProductState } from '../../../context/redux/productsSlice';
import { ProductForm } from './../ui/productForm';
import { CorrectProductType } from './../../../context/types/type';

const initialState: CorrectProductType = {
  id: 0,
  priceEU: '',
  pricePL: '',
  category: '',
  delivery: '',
  colorEN: '',
  colorPL: '',
  descriptionEN: '',
  descriptionPL: '',
  nameEN: '',
  namePL: '',
  sales: 0,
  shipping: '',
  image1: '',
  image2: '',
  image3: '',
  weight: '',
};

type AddProps = {
  productSelectedToEdit: CorrectProductType;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
};

function AddNewProduct({
  productSelectedToEdit,
  setIsAddProductClicked,
  setProductSelectedToEdit,
}: AddProps) {
  const dispatch = useAppDispatch();

  const [productData, setProductData] =
    useState<CorrectProductType>(initialState);

  useEffect(() => {
    if (productSelectedToEdit.namePL?.length > 2) {
      setProductData(productSelectedToEdit);
      setProductSelectedToEdit({} as CorrectProductType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSelectedToEdit]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/dashboard/postProduct', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (productData.id > 0) {
      dispatch(modyfyProductState(productData));
    }

    setProductData(initialState);
    setIsAddProductClicked(false);
  };

  return (
    <>
      <h2> Informacje o produkcie</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <ProductForm
          productData={productData}
          setProductData={setProductData}
        />
        <Variant name={'Zapisz'} />
      </form>
    </>
  );
}

export default AddNewProduct;
