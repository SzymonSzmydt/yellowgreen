import style from './styles/dropdown.module.css';
import { Confirm } from '../confirm';
import { useState, Dispatch, SetStateAction } from 'react';

type DropProps = {
  id: number;
  namePL: string;
  setIsDropdown: Dispatch<SetStateAction<boolean>>;
};

export function Dropdown({ setIsDropdown, ...product }: DropProps) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

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
            <li> Edytuj </li>
            <li onClick={() => setIsDeleting(true)}> Usuń </li>
          </ul>
        </div>
      )}
    </>
  );
}
