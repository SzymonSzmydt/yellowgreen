import style from './styles/product.module.css';
import { useState } from 'react';
import { CorrectProductType } from '../types/type';
import { Search } from '../ui/search';
import { Dropdown } from '../ui/popup/dropdown';

export function ListOfProducts() {
  const [productList, setProductList] = useState<Array<CorrectProductType>>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const fetchProducts = async () => {
    const response = await fetch('/api/dashboard/getProduct');
    const data = await response.json();
    setProductList(Object.values(data));
  };

  return (
    <>
      <button onClick={fetchProducts}> Refresh </button>
      <div className={style.wrapper}>
        <h1> Lista Produktów</h1>
        <Search setSearchValue={setSearchValue} />
      </div>
      <div className={style.table}>
        <section className={style.row}>
          <div className={style.id}>ID</div>
          <div className={style.name}>NAZWA</div>
          <div className={style.price}>CENA</div>
          <div className={style.color}>COLOR</div>
          <div className={style.sales}>SPRZEDANO</div>
          <div className={style.option} />
        </section>
        {productList.length > 0
          ? searchValue.length > 0
            ? productList
                .filter((filtr) =>
                  filtr['namePL']
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((product) => (
                  <div key={product.id} className={style.product}>
                    <div className={style.id}> {product.id} </div>
                    <div className={style.name}> {product?.namePL} </div>
                    <div className={style.price}> {product?.pricePL} zł</div>
                    <div className={style.color}> {product?.colorPL} </div>
                    <div className={style.sales}>
                      {product?.sales ?? 0} szt.
                    </div>
                    <div className={style.option}>
                      <span />
                      <span />
                    </div>
                    <Dropdown {...product} />
                  </div>
                ))
            : productList.map((product) => (
                <div key={product.id} className={style.product}>
                  <div className={style.id}> {product.id} </div>
                  <div className={style.name}> {product?.namePL} </div>
                  <div className={style.price}> {product.pricePL} zł</div>
                  <div className={style.color}> {product?.colorPL} </div>
                  <div className={style.sales}> {product?.sales ?? 0} szt.</div>
                  <div className={style.option}>
                    <span />
                    <span />
                  </div>
                  <Dropdown {...product} />
                </div>
              ))
          : null}
      </div>
    </>
  );
}
