import style from './style.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navigation() {
  const router = useRouter();
  const paths: string[] = router?.asPath.split('/').filter((e) => e);
  return (
    <>
      <nav className={style.nav}>
        <div className={style.navBox}>
          <Link href="/furniture" className={style.link}>
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
      <div className={style.smallNav}>
        <Link key="home" href="/" className={style.smallLink}>
          Home
        </Link>
        {paths
          ? paths.map((link, index) => (
              <Link
                key={link}
                href={index === 0 ? `/${link}` : link}
                className={style.smallLink}
              >
                {link}
              </Link>
            ))
          : null}
      </div>
    </>
  );
}

export default Navigation;
