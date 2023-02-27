import add from './styles/add.module.css';
import { Variant } from '../../button/Variant';
import { useState, useEffect } from 'react';
import { CorrectProductType } from '../types/type';
import { useAppDispatch, useAppSelector } from '../../../context/redux/hooks';
import {
  deleteProduct,
  addProduct,
} from '../../../context/redux/productsSlice';
import { Category } from './category';

const initialState: CorrectProductType = {
  id: 0,
  priceEU: 0,
  pricePL: 0,
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
  product: CorrectProductType;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  setProduct: Dispatch<SetStateAction<CorrectProductType>>;
  isCategoryClicked: boolean;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
};

function AddNewProduct({
  product,
  setIsAddProductClicked,
  setProduct,
  isCategoryClicked,
  setIsCategoryClicked,
}: AddProps) {
  const [productData, setProductData] = useState(initialState);
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category.value);

  useEffect(() => {
    if (product.id > 0) {
      setProductData(product);
    }
  }, [product]);

  const handleChangeInputValue = (
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductData({
      ...productData,
      [value.target.name]: value.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('/api/dashboard/postProduct', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProductData(initialState);
      dispatch(deleteProduct(product.id));
      dispatch(addProduct(productData));

      setProduct({} as CorrectProductType);
      setIsAddProductClicked(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log('productData: ', productData);

  return isCategoryClicked ? (
    <Category setIsCategoryClicked={setIsCategoryClicked} />
  ) : (
    <>
      <h2> Informacje o produkcie</h2>
      <br />
      <form onSubmit={handleSubmit} className={add.form}>
        <label>Nazwa produktu - Polska</label>
        <input
          type="text"
          name="namePL"
          required
          minLength={3}
          placeholder="Nazwa produktu - PL"
          className={add.input}
          value={productData.namePL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        />
        <label>Nazwa produktu - Angielska</label>
        <input
          type="text"
          name="nameEN"
          required
          minLength={3}
          placeholder="Nazwa produktu - EN"
          className={add.input}
          value={productData.nameEN}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        />
        <label>Kolor produktu - Polska</label>
        <input
          type="text"
          name="colorPL"
          required
          minLength={3}
          placeholder="Kolor - PLN"
          className={add.input}
          value={productData.colorPL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        />
        <label>Kolor produktu - Angielski</label>
        <input
          type="text"
          name="colorEN"
          required
          minLength={3}
          placeholder="Kolor - EN"
          className={add.input}
          value={productData.colorEN}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        />
        <label>Kategoria produktu</label>
        <select
          name="category"
          className={add.select}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        >
          <option value="">Wybierz</option>
          {category.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
        <label>Cena - PLN</label>
        <input
          type="number"
          name="pricePL"
          required
          minLength={1}
          step="0.01"
          min="0.01"
          max="10000.00"
          pattern="^\d+(\.\d{1,2})?$"
          placeholder="Cena PLN"
          className={add.priceInput}
          value={productData.pricePL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProductData({
              ...productData,
              pricePL: parseFloat(e.target.value),
            })
          }
        />
        <label>Cena - EURO</label>
        <input
          type="number"
          name="priceEU"
          required
          minLength={1}
          step="0.01"
          min="0.01"
          max="10000.00"
          pattern="^\d+(\.\d{1,2})?$"
          placeholder="Cena EURO"
          className={add.priceInput}
          value={productData.priceEU}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProductData({
              ...productData,
              priceEU: parseFloat(e.target.value),
            })
          }
        />
        <label>Opis produktu - Polski</label>
        <textarea
          name="descriptionPL"
          required
          minLength={30}
          placeholder="Opis produktu - PL"
          className={add.textarea}
          value={productData.descriptionPL}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setProductData({
              ...productData,
              descriptionPL: e.target.value,
            })
          }
        />
        <label>Opis produktu - Angielski</label>
        <textarea
          name="descriptionEN"
          required
          minLength={30}
          placeholder="Opis produktu -EN"
          className={add.textarea}
          value={productData.descriptionEN}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setProductData({
              ...productData,
              descriptionEN: e.target.value,
            })
          }
        />
        <Variant name={'Zapisz'} />
      </form>
    </>
  );
}

export default AddNewProduct;
