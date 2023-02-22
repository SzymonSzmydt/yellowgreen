import style from './styles/confirm.module.css';
import { doc, updateDoc, deleteField } from 'firebase/firestore';
import { Variant } from '../../button/Variant';
import { Dispatch, SetStateAction } from 'react';
import { db } from '../../../context/Firebase';

type ConfirmProps = {
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
  setIsDropdown: Dispatch<SetStateAction<boolean>>;
  id: number;
  namePL: string;
};

export function Confirm({
  setIsDeleting,
  setIsDropdown,
  id,
  namePL,
}: ConfirmProps) {
  const handleDeleteProduct = async () => {
    const productRef = doc(db, 'dashboard', 'products');
    await updateDoc(productRef, {
      [id]: deleteField(),
    });
    setIsDropdown(false);
  };

  const handleCancel = () => {
    setIsDeleting(false);
    setIsDropdown(false);
  };

  return (
    <div className={style.confirm}>
      <p>Czy na pewno usunąć product ?</p>
      <span className={style.id}> {id} </span>
      <span className={style.name}> {namePL} </span>
      <br />
      <section className={style.box}>
        <Variant name="TAK" handleClick={handleDeleteProduct} />
        <Variant name="NIE" handleClick={handleCancel} />
      </section>
    </div>
  );
}
