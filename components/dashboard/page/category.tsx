import style from './styles/category.module.css';
import { useState } from 'react';
import { Variant } from './../../button/Variant';

export function Category() {
  const [newCategory, setNewCategory] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('/api/dashboard/postCategory', {
        method: 'POST',
        body: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
