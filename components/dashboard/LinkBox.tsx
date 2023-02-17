import aside from './styles/aside.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  image: string;
  name: string;
  path: string;
};

export function LinkBox({ name, path, image }: Props) {
  const { pathname } = useRouter();

  return pathname !== path ? (
    <Link href={path} className={aside.link}>
      <Image src={image} alt={name} className={aside.icon} />
      {name}
    </Link>
  ) : (
    <div className={aside.linkBox}>
      <Image src={image} alt={name} className={aside.icon} />
      {name}
    </div>
  );
}
