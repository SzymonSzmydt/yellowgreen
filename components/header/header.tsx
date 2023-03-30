import style from './styles/header.module.css';
import Head from 'next/head';
import { Orbitron } from '@next/font/google';
import Navigation from './navigation';
import Link from 'next/link';
import { useAppSelector } from './../../context/redux/hooks';
import { Hamburger } from 'components/button/hamburger';
import { useState } from 'react';

const orbitron = Orbitron({ subsets: ['latin'] });

function Header() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const basket = useAppSelector((state) => state.basket.value);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Meble od projektantów, nietuzinkowe kształty"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>North Shape</title>
      </Head>
      <header className={style.header}>
        <div className={style.top}>
          <section className={style.container}>
            <Hamburger
              handleClick={() => setIsClicked(!isClicked)}
              isClicked={isClicked}
            />
            <Link href="/delivery" className={style.delivery}>
              <em>Darmowa dostawa już od 300 zł</em>
            </Link>
            <section className={style.basketBox}>
              <Link href="login">
                <div className={style.user} />
              </Link>
              <Link href="/basket">
                <div className={style.basket} />
                <span
                  className={
                    basket.length > 0
                      ? style.basketQuantityOn
                      : style.basketQuantityOff
                  }
                >
                  {basket.length < 1
                    ? 0
                    : basket.reduce((a, b) => a + b.quantity, 0)}
                </span>
              </Link>
            </section>
          </section>
        </div>
        <div className={style.logo}>
          <Link href="/">
            <h1 className={orbitron.className}> North Shape </h1>
          </Link>
        </div>
        <Navigation isClicked={isClicked} setIsClicked={setIsClicked} />
      </header>
    </>
  );
}

export default Header;
