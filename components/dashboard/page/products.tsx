import style from './styles/product.module.css';
import { useState } from 'react';
import { CorrectProductType } from '../types/type';
import { Search } from '../ui/search';
import { Dropdown } from '../ui/popup/dropdown';

type ListProps = {
  productList: CorrectProductType[];
};

export function ListOfProducts({ productList }: ListProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<CorrectProductType>(
    {} as CorrectProductType
  );

  const triggerDropdown = (product: CorrectProductType) => {
    setIsDropdown(!isDropdown);
    setSelectedProduct(product);
  };

  return (
    <>
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
                  <div
                    key={product.id}
                    className={
                      selectedProduct.id === product.id
                        ? style.position
                        : style.product
                    }
                  >
                    {isDropdown && product.id === selectedProduct.id ? (
                      <Dropdown
                        setIsDropdown={setIsDropdown}
                        {...selectedProduct}
                      />
                    ) : null}
                    <div className={style.id}> {product.id} </div>
                    <div className={style.name}> {product?.namePL} </div>
                    <div className={style.price}> {product?.pricePL} zł</div>
                    <div className={style.color}> {product?.colorPL} </div>
                    <div className={style.sales}>
                      {product?.sales ?? 0} szt.
                    </div>
                    <div
                      className={style.option}
                      onClick={() => triggerDropdown({ ...product })}
                    >
                      <span />
                      <span />
                    </div>
                  </div>
                ))
            : productList.map((product) => (
                <div
                  key={product.id}
                  className={
                    selectedProduct.id === product.id
                      ? style.position
                      : style.product
                  }
                >
                  {isDropdown && product.id === selectedProduct.id ? (
                    <Dropdown
                      setIsDropdown={setIsDropdown}
                      {...selectedProduct}
                    />
                  ) : null}
                  <div className={style.id}> {product.id} </div>
                  <div className={style.name}> {product?.namePL} </div>
                  <div className={style.price}> {product.pricePL} zł</div>
                  <div className={style.color}> {product?.colorPL} </div>
                  <div className={style.sales}> {product?.sales ?? 0} szt.</div>
                  <div
                    className={style.option}
                    onClick={() => triggerDropdown({ ...product })}
                  >
                    <span />
                    <span />
                  </div>
                </div>
              ))
          : null}
      </div>
    </>
  );
}
