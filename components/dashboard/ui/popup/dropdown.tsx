import style from './styles/dropdown.module.css';
import { Confirm } from '../confirm';
import { useState, Dispatch, SetStateAction } from 'react';
import { CorrectProductType } from '../../types/type';

type DropProps = {
  id: number;
  namePL: string;
  setIsDropdown: Dispatch<SetStateAction<boolean>>;
  setIsAddProductClicked: Dispatch<SetStateAction<boolean>>;
  setProduct: Dispatch<SetStateAction<CorrectProductType>>;
};

export function Dropdown({
  setIsDropdown,
  setIsAddProductClicked,
  setProduct,
  ...product
}: DropProps) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const editHandleClick = () => {
    setProduct(product);
    setIsAddProductClicked(true);
  };

  return (
    <>
      {isDeleting ? (
        <Confirm
          setIsDeleting={setIsDeleting}
          setIsDropdown={setIsDropdown}
          {...product}
        />
      ) : (
        <div className={style.dropdown}>
          <ul>
            <li onClick={editHandleClick}> Edytuj </li>
            <li onClick={() => setIsDeleting(true)}> Usuń </li>
          </ul>
        </div>
      )}
    </>
  );
}
