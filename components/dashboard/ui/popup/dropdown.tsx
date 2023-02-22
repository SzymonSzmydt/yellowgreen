import style from './styles/dropdown.module.css';
import { Confirm } from '../confirm';
import { useState } from 'react';

type DropProps = {
  id: number;
  namePL: string;
};

export function Dropdown({ ...product }: DropProps) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  return (
    <>
      {isDeleting ? (
        <Confirm setIsDeleting={setIsDeleting} {...product} />
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
