import style from './styles/product.module.css';
import { useState, Dispatch, SetStateAction } from 'react';
import { CorrectProductType } from '../types/type';
import { Search } from '../ui/search';
import { Dropdown } from '../ui/popup/dropdown';
import { ProductInfo } from '../ui/popup/productInfo';
import { useAppSelector } from '../../../context/redux/hooks';

type ListProps = {
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  setProductSelectedToEdit: Dispatch<SetStateAction<CorrectProductType>>;
  productSelectedToEdit: CorrectProductType;
};

export function ListOfProducts({
  setIsAddProductClicked,
  setProductSelectedToEdit,
  productSelectedToEdit,
}: ListProps) {
  const productList = useAppSelector((state) => state.products.value);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [info, setInfo] = useState({ id: 0, active: false });

  const triggerDropdown = (product: CorrectProductType) => {
    setIsDropdown(!isDropdown);
    if (!isDropdown) {
      setProductSelectedToEdit(product);
    } else if (isDropdown) {
      setProductSelectedToEdit({} as CorrectProductType);
    }
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
        {productList?.length > 0
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
                      productSelectedToEdit.id === product.id
                        ? style.position
                        : style.product
                    }
                  >
                    {isDropdown && product.id === productSelectedToEdit.id ? (
                      <Dropdown
                        setIsDropdown={setIsDropdown}
                        setIsAddProductClicked={setIsAddProductClicked}
                        productSelectedToEdit={productSelectedToEdit}
                        setProductSelectedToEdit={setProductSelectedToEdit}
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
                    productSelectedToEdit.id === product.id
                      ? style.position
                      : style.product
                  }
                >
                  {isDropdown && product.id === productSelectedToEdit.id ? (
                    <Dropdown
                      setIsDropdown={setIsDropdown}
                      setIsAddProductClicked={setIsAddProductClicked}
                      productSelectedToEdit={productSelectedToEdit}
                      setProductSelectedToEdit={setProductSelectedToEdit}
                    />
                  ) : null}
                  <div className={style.id}>
                    <strong>#</strong>
                    {product.id}
                  </div>
                  <div className={style.name}> {product?.namePL} </div>
                  <div
                    className={style.price}
                    onMouseEnter={() =>
                      setInfo({ id: product.id, active: true })
                    }
                    onMouseLeave={() => setInfo({ id: 0, active: false })}
                  >
                    {info.active && product.id === info.id ? (
                      <ProductInfo {...product} />
                    ) : null}
                    {product.pricePL} zł
                  </div>
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
