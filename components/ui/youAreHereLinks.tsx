import style from './styles/youAreHere.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface YouAreProps {
  id?: number;
  namePL?: string;
}

export function YouAreHereLinks({ id, namePL }: YouAreProps) {
  const router = useRouter();
  const paths: string[] = router?.asPath.split('/').filter((e) => e);

  return (
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
              {link === '' + id ? namePL : link}
            </Link>
          ))}
        </>
      ) : null}
    </div>
  );
}
