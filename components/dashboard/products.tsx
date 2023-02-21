import style from './styles/list.module.css';
import { useState } from 'react';
import { Body } from './types/type';

export function ListOfProducts() {
  const [productList, setProductList] = useState<Array<Body>>({});

  const fetchProducts = async () => {
    const response = await fetch('/api/dashboard/getProduct');
    const data = await response.json();
    setProductList(Object.values(data));
  };

  console.log('productList ', productList);
  return (
    <>
      <button onClick={fetchProducts}> Refresh </button>
      <h1> Lista Produktów</h1>
      <table className={style.table}>
        <thead>
          <tr className={style.thead}>
            <td>ID</td>
            <td>NAZWA</td>
            <td>COLOR</td>
            <td>SPRZEDANO</td>
            <td>OPCJE</td>
          </tr>
        </thead>
        <tbody>
          {productList.length > 0
            ? productList.map((product) => (
                <tr key={product.id} className={style.product}>
                  <td> {product?.id} </td>
                  <td> {product?.namePL} </td>
                  <td> {product?.colorPL} </td>
                  <td> {product?.sales} </td>
                  <td> </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
}
