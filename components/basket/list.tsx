import style from './styles/list.module.css';
import { BasketData } from './../../context/types/type';

export function List({ name }: BasketData) {
  return (
    <div className={style.box}>
      <div className={style.image} />
      <div className={style.information}>
        <p> {name} </p>
        <select>
          <option>1</option>
        </select>
      </div>
    </div>
  );
}
