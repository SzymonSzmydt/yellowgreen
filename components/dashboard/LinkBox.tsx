import aside from './styles/aside.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  image: object;
  name: string;
  path: string;
};

export function LinkBox({ name, path, image }: Props) {
  const router = useRouter();
  return router.pathname !== path ? (
    <Link href={path} className={aside.link}>
      <Image src={image} alt={`${name}`} className={aside.icon} />
      {name}
    </Link>
  ) : (
    <div className={aside.linkBox}>
      <Image src={image} alt={`${name}`} className={aside.icon} />
      {name}
    </div>
  );
}
