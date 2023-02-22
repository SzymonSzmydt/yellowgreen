import style from './styles/confirm.module.css';
import { doc, updateDoc, deleteField } from 'firebase/firestore';
import { Variant } from '../../button/Variant';
import { Dispatch, SetStateAction } from 'react';
import { db } from '../../../context/Firebase';

type ConfirmProps = {
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
  id: number;
  namePL: string;
};

export function Confirm({ setIsDeleting, id, namePL }: ConfirmProps) {
  const handleDeleteProduct = async () => {
    const productRef = doc(db, 'dashboard', 'products');
    await updateDoc(productRef, {
      [id]: deleteField(),
    });
  };

  return (
    <div className={style.confirm}>
      <p>Czy na pewno usunąć product ?</p>
      <p className={style.product}> {namePL} </p>
      <div className={style.box}>
        <Variant name="TAK" handleClick={handleDeleteProduct} />
        <Variant name="NIE" handleClick={() => setIsDeleting(false)} />
      </div>
    </div>
  );
}
