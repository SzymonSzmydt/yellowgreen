import style from './styles/dropdown.module.css';

export function Dropdown() {
  return (
    <div className={style.dropdown}>
      <ul>
        <li> Edytuj </li>
        <li> Usuń </li>
      </ul>
    </div>
  );
}
