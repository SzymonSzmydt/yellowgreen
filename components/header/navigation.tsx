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
          <Link href="/garderoba" className={style.link}>
            Meble
          </Link>
          <Link href="/lamps" className={style.link}>
            Lampy
          </Link>
          <Link href="/accesories" className={style.link}>
            Akcesoria
          </Link>
          <Link href="/promotions" className={style.link}>
            Promocje
          </Link>
          <Link href="/contact" className={style.link}>
            Kontakt
          </Link>
        </div>
      </nav>
      {paths.length > 0 && !paths.includes('basket') ? (
        <div className={style.smallNav}>
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
        </div>
      ) : null}
    </>
  );
}

export default Navigation;
