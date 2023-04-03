import style from './styles/nav.module.css';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

interface NavigationProps {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

function Navigation({ isClicked, setIsClicked }: NavigationProps) {
  const navBoxBackMove = isClicked ? style.navBoxOn : style.navBox;
  return (
    <nav className={style.nav}>
      <div className={navBoxBackMove}>
        <span className={style.menuText}>Menu</span>
        <Link
          href="/garderoba"
          className={style.link}
          onClick={() => setIsClicked(false)}
        >
          Garderoba
        </Link>
        <Link
          href="/kuchnia"
          className={style.link}
          onClick={() => setIsClicked(false)}
        >
          Kuchnia
        </Link>
        <Link
          href="/pokoj"
          className={style.link}
          onClick={() => setIsClicked(false)}
        >
          Pokój
        </Link>
        <Link
          href="/promotions"
          className={style.link}
          onClick={() => setIsClicked(false)}
        >
          Promocje
        </Link>
        <Link
          href="/contact"
          className={style.link}
          onClick={() => setIsClicked(false)}
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
