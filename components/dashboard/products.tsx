import style from './styles/list.module.css';
import { useState } from 'react';
import { Body } from './types/type';
import { Search } from './search';

export function ListOfProducts() {
  const [productList, setProductList] = useState<Array<Body>>({});
  const [searchValue, setSearchValue] = useState<string>('');

  const fetchProducts = async () => {
    const response = await fetch('/api/dashboard/getProduct');
    const data = await response.json();
    setProductList(Object.values(data));
  };

  return (
    <>
      <button onClick={fetchProducts}> Refresh </button>
      <h1> Lista Produktów</h1>
      <Search setSearchValue={setSearchValue} />
      <div className={style.table}>
        <div className={style.row}>
          <div className={style.id}>ID</div>
          <div className={style.name}>NAZWA</div>
          <div className={style.color}>COLOR</div>
          <div className={style.sales}>SPRZEDANO</div>
          <div className={style.option}>OPCJE</div>
        </div>
        {productList.length > 0
          ? productList.map((product) => (
              <div key={product.id} className={style.product}>
                <div className={style.id}> {product.id} </div>
                <div className={style.name}> {product?.namePL} </div>
                <div className={style.color}> {product?.colorPL} </div>
                <div className={style.sales}> {product?.sales ?? 0} szt.</div>
                <div className={style.option}> </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
