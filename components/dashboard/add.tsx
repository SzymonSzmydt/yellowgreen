import add from "./styles/add.module.css";
import { useState } from "react";

type Product = {
  namePL: string;
  nameEN: string;
  colorPL: string;
  colorEN: string;
  pricePL: number;
  priceEN: number;
  descriptionPL: string;
  sescriptionEN: string;
};

function AddNewProduct() {
  const [product, setProduct] = useState<Product>({
    namePL: "",
    nameEN: "",
    colorPL: "",
    colorEN: "",
    pricePL: 0,
    priceEN: 0,
    descriptionPL: "",
    sescriptionEN: "",
  });
  const [error, setError] = useState({
    namePL: false,
    nameEN: false,
    colorPL: false,
    colorEN: false,
    pricePL: false,
    priceEN: false,
    descriptionPL: false,
    sescriptionEN: false,
  });
  return (
    <>
      <h2> Formularz dodania produktu</h2>
      <br />
      <form>
        <input
          type='text'
          value={product.namePL}
          onChange={(e) => setProduct({ ...product, namePL: e.target.value })}
          placeholder='Nazwa produktu - PL'
          className={add.input}
        />
        <div className={add.error}> {error.namePL ?? null} </div>
        <input
          type='text'
          value={product.nameEN}
          onChange={(e) => setProduct({ ...product, nameEN: e.target.value })}
          placeholder='Nazwa produktu - EN'
          className={add.input}
        />
        <div className={add.error}> {error.nameEN ?? null} </div>
        <input
          type='text'
          value={product.colorPL}
          onChange={(e) => setProduct({ ...product, colorPL: e.target.value })}
          placeholder='Kolor - PLN'
          className={add.input}
        />
        <div className={add.error}> {error.colorPL ?? null} </div>
        <input
          type='text'
          value={product.colorEN}
          onChange={(e) => setProduct({ ...product, colorEN: e.target.value })}
          placeholder='Kolor - EN'
          className={add.input}
        />
        <div className={add.error}> {error.colorEN ?? null} </div>
        <label className={add.label}>
          Cena - PLN
          <input
            type='number'
            value={product.pricePL}
            onChange={(e) =>
              setProduct({ ...product, pricePL: e.target.value })
            }
          />
        </label>
        <div className={add.error}> {error.pricePL ?? null} </div>
        <label className={add.label}>
          Cena - EURO
          <input
            type='number'
            value={product.priceEN}
            onChange={(e) =>
              setProduct({ ...product, priceEN: e.target.value })
            }
          />
        </label>
        <div className={add.error}> {error.priceEN ?? null} </div>
        <textarea
          type='text'
          value={product.descriptionPL}
          onChange={(e) =>
            setProduct({ ...product, descriptionPL: e.target.value })
          }
          placeholder='Opis produktu - PL'
          className={add.textarea}
        />
        <div className={add.error}> {error.descriptionPL ?? null} </div>
        <textarea
          type='text'
          value={product.descriptionEN}
          onChange={(e) =>
            setProduct({ ...product, descriptionEN: e.target.value })
          }
          placeholder='Opis produktu -EN'
          className={add.textarea}
        />
        <div className={add.error}> {error.descriptionEN ?? null} </div>
      </form>
    </>
  );
}

export default AddNewProduct;

function validation() {
  if (product.namePL.length < 3) {
    return setError({ ...error, namePL: "Nazwa jest zbyt którka" });
  }
  if (product.nameEN.length < 3) {
    return setError({ ...error, nameEN: "Nazwa jest zbyt którka" });
  }
  if (product.colorPL.length < 3) {
    return setError({ ...error, colorPL: "Za mało liter koloru" });
  }
  if (product.colorEN.length < 3) {
    return setError({ ...error, colorPL: "Za mało liter koloru" });
  }
  if (product.pricePL <= 0) {
    return setError({ ...error, pricePL: "Nieprawidłowe dane" });
  }
  if (product.priceEN <= 0) {
    return setError({ ...error, pricePL: "Nieprawidłowe dane" });
  }
  if (product.descriptionPL.length < 50) {
    return setError({ ...error, descriptionPL: "Opis jest zbyt krótki" });
  }
  if (product.descriptionEN.length < 50) {
    return setError({ ...error, descriptionPL: "Opis jest zbyt krótki" });
  }
}
