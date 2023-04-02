import { useAppSelector } from 'context/redux/hooks';
import style from './styles/nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

interface NavigationProps {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

function Navigation({ isClicked, setIsClicked }: NavigationProps) {
  const router = useRouter();
  const products = useAppSelector((state) => state.products.value);

  const paths: string[] = router?.asPath.split('/').filter((e) => e);
  const productNameAsLink = products.find(
    (product) => product.id === parseFloat(paths[paths.length - 1])
  );

  const navBoxBackMove = isClicked ? style.navBoxOn : style.navBox;
  return (
    <>
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
                {productNameAsLink && index === paths.length - 1
                  ? productNameAsLink.namePL
                  : link}
              </Link>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Navigation;
