import add from './styles/add.module.css';
import { Variant } from '../button/Variant';
import { useState } from 'react';

type CorrectProductType = {
  id: number;
  priceEN: number;
  pricePL: number;
  colorEN: string;
  colorPL: string;
  descriptionEN: string;
  descriptionPL: string;
  nameEN: string;
  namePL: string;
};

const initialState = {
  id: 0,
  priceEN: 0,
  pricePL: 0,
  colorEN: '',
  colorPL: '',
  descriptionEN: '',
  descriptionPL: '',
  nameEN: '',
  namePL: '',
};

function AddNewProduct() {
  const [productData, setProductData] =
    useState<CorrectProductType>(initialState);

  const handleChangeInputValue = (
    value: React.ChangeEvent<HTMLInputELement>
  ) => {
    value.preventDefault();
    setProductData({ ...productData, [value.target.name]: value.target.value });
  };
  console.log(productData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault();
  console.log('Wysłane');

  return (
    <>
      <h2> Informacje o produkcie</h2>
      <br />
      <form onSubmit={handleSubmit}>
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
            handleChangeInputValue(e)
          }
        />

        <input
          type="number"
          name="priceEN"
          required
          minLength={1}
          step="0.01"
          min="0.01"
          max="10000.00"
          pattern="^\d+(\.\d{1,2})?$"
          placeholder="Cena EURO"
          className={add.priceInput}
          value={productData.priceEN}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        />

        <textarea
          name="descriptionPL"
          required
          minLength={30}
          placeholder="Opis produktu - PL"
          className={add.textarea}
          value={productData.descriptionPL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        />
        <textarea
          name="descriptionEN"
          required
          minLength={30}
          placeholder="Opis produktu -EN"
          className={add.textarea}
          value={productData.descriptionEN}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputValue(e)
          }
        />
        <Variant name={'Zapisz'} />
      </form>
    </>
  );
}

export default AddNewProduct;
