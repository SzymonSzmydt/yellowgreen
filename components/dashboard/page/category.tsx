import style from './styles/category.module.css';
import { useState } from 'react';
import { Variant } from './../../button/Variant';
import { useAppDispatch } from './../../../context/redux/hooks';
import { addCategory } from './../../../context/redux/categorySlice';

type CategoryProps = {
  setIsCategoryClicked: Dispatch<SetStateAction<boolean>>;
};

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

export function Category({ setIsCategoryClicked }: CategoryProps) {
  const [newCategory, setNewCategory] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = newCategory.toLowerCase();
    const data = capitalize(validation);
    try {
      await fetch('/api/dashboard/postCategory', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(addCategory(data));
      setIsCategoryClicked(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2>Dodaj kategorię produktu</h2>
      <br />
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Nowa kategoria produktu</label>
        <input
          type="text"
          name="category"
          required
          minLength={3}
          placeholder="np, meble"
          className={style.input}
          value={newCategory}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewCategory(e.target.value)
          }
        />
        {newCategory.length >= 3 ? <Variant name="Zapisz" /> : null}
      </form>
    </>
  );
}
