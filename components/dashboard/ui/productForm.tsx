import add from './styles/form.module.css';
import { CorrectProductType } from './../types/type';
import { Dispatch, SetStateAction } from 'react';

type FormProps = {
  productData: CorrectProductType;
  setPorductData: Dispatch<SetStateAction<CorrectProductType>>;
  category: string[];
};

export function ProductForm({ productData, setProductData, category }: FormProps) {
  const handleChangeInputValue = (
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductData({
      ...productData,
      [value.target.name]: value.target.value,
    });
  };

  const convertToStringToNumberWithDecimals = (
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fieldValue: string = value.targed.value.toFixed(2);
    const convertedPrice: number = parseFloat(fieldValue);
    setProductData({
      ...productData,
      [value.target.name]: convertedPrice,
    });
  };

  return (
    <>
      <label className={add.label}>Nazwa produktu - Polska</label>
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
      <label className={add.label}>Nazwa produktu - Angielska</label>
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
      <label className={add.label}>Kolor produktu - Polska</label>
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
      <label className={add.label}>Kolor produktu - Angielski</label>
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
      <label className={add.label}>Kategoria produktu</label>
      <select
        name="category"
        className={add.select}
        required
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setProductData({
            ...productData,
            category: e.target.value,
          })
        }
      >
        <option value="">Wybierz</option>
        {category.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <label className={add.picture}>
        Zdjęcie produktu
        <input type="file" name="picture" required />
      </label>

      <label className={add.label}>Cena - PLN</label>
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
          convertToStringToNumberWithDecimals(e)
        }
      />
      <label className={add.label}>Cena - EURO</label>
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
          convertToStringToNumberWithDecimals(e)
        }
      />
      <label className={add.label}>Opis produktu - Polski</label>
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
      <label className={add.label}>Opis produktu - Angielski</label>
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
    </>
  );
}
