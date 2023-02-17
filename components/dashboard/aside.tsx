import aside from './styles/aside.module.css';
import realized from '../../public/icons/orders.svg';
import handshake from '../../public/icons/handshake.svg';
import home from '../../public/icons/home.svg';
import list from '../../public/icons/list.svg';
import panel from '../../public/icons/panel.svg';
import Image from 'next/image';
import { LinkBox } from './LinkBox';
import { useState } from 'react';

function Aside() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const isBurgerClicked = isClicked ? aside.burgerOn : aside.burger;
  return (
    <aside className={aside.aside}>
      <section className={aside.box}>
        <div className={aside.title}>
          <Image
            src={panel}
            alt="Panel administracyjny"
            className={aside.panelIcon}
          />
          Panel
        </div>
        <span className={aside.small}>administracyjny</span>
        <div
          className={isBurgerClicked}
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className={aside.line} />
          <span className={aside.line} />
          <span className={aside.line} />
        </div>
      </section>
      <p className={aside.category}>ANALITYKA</p>
      <LinkBox name="Home" path="/dashboard" image={home} />
      <LinkBox
        name="Zam. zrealizowane"
        path="/dashboard/realized"
        image={realized}
      />
      <p className={aside.category}>ZARZĄDZANIE</p>
      <LinkBox name="Lista produktów" path="/dashboard/product" image={list} />
      <LinkBox
        name="Zam. oczekujące"
        path="/dashboard/orders"
        image={handshake}
      />
    </aside>
  );
}

export default Aside;
