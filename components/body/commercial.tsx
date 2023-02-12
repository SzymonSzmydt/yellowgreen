import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

function Commercial() {
  return (
    <main className={style.main}>
      <Link href='/product/1'>
        <Image
          src={`/1.webp`}
          alt='first'
          className={style.img}
          width='240'
          height='320'
        />
      </Link>
      <Link href='/product/2'>
        <Image
          src={`/2.webp`}
          alt='second'
          className={style.img}
          width='240'
          height='320'
        />
      </Link>
      <Link href='/product/3'>
        <Image
          src={`/3.webp`}
          alt='first'
          className={style.img}
          width='240'
          height='320'
        />
      </Link>
    </main>
  );
}

export default Commercial;
