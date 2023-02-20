import add from './styles/add.module.css';
import { Variant } from '../button/Variant';

function AddNewProduct() {
  return (
    <>
      <h2> Formularz dodania produktu</h2>
      <br />
      <form action="/api/dashboard/add" method="post">
        <input
          type="text"
          name="namePL"
          required
          minLength={3}
          placeholder="Nazwa produktu - PL"
          className={add.input}
        />

        <input
          type="text"
          name="nameEN"
          required
          minLength={3}
          placeholder="Nazwa produktu - EN"
          className={add.input}
        />

        <input
          type="text"
          name="colorPL"
          required
          minLength={3}
          placeholder="Kolor - PLN"
          className={add.input}
        />

        <input
          type="text"
          name="colorEN"
          required
          minLength={3}
          placeholder="Kolor - EN"
          className={add.input}
        />

        <input
          type="number"
          name="pricePL"
          required
          minLength={1}
          pattern="^\d+(\d{3})*(\.\d{1,2})?$"
          placeholder="Cena PLN"
          className={add.priceInput}
        />

        <input
          type="number"
          name="priceEN"
          required
          minLength={1}
          pattern="^\d+(\d{3})*(\.\d{1,2})?$"
          placeholder="Cena EURO"
          className={add.priceInput}
        />

        <textarea
          name="descriptionPL"
          required
          minLength={30}
          placeholder="Opis produktu - PL"
          className={add.textarea}
        />
        <textarea
          name="descriptionEN"
          required
          minLength={30}
          placeholder="Opis produktu -EN"
          className={add.textarea}
        />
        <Variant name={'Zapisz'} />
      </form>
    </>
  );
}

export default AddNewProduct;
