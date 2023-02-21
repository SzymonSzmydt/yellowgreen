import style from './styles/search.module.css';

type SearchProps = {
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export function Search({ setSearchValue }: SearchProps) {
  return (
    <div className={style.wrapper}>
      <input
        type="text"
        className={style.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        placeholder="Znajdź produkt"
      />
    </div>
  );
}
