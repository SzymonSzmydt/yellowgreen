import style from './styles/nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hamburger } from './../button/hamburger';
import { useState } from 'react';

function Navigation() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();

  const paths: string[] = router?.asPath.split('/').filter((e) => e);
  const navBoxBackMove = isClicked ? style.navBoxOn : style.navBox;
  return (
    <>
      <nav className={style.nav}>
        <Hamburger
          handleClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        />
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
      <div className={style.smallNav}>
        {paths.length > 0 && !paths.includes('basket') ? (
          <>
            <Link href="/" className={style.smallLink}>
              Home
            </Link>
            {paths.map((link, index) => (
              <Link
                key={link}
                href={index === 0 ? `/${link}` : `${link}`}
                className={style.smallLink}
              >
                {link}
              </Link>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Navigation;
