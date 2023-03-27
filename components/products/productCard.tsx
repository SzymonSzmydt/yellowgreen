import style from './styles/card.module.css';
import Link from 'next/link';
import { TitleAccent } from 'components/ui/titleAccent';
import { CorrectProductType } from '../../context/types/type';
import { Card } from './Card';

interface ProductCardProps {
  category: string;
  products: CorrectProductType[];
}

export function ProductCard({ products, category }: ProductCardProps) {
  return (
    <>
      <TitleAccent name={category} />
      <>
        {products.map((product) => (
          <Link
            href={`/${category}/${product.id}`}
            key={product.id}
            className={style.link}
          >
            <Card product={product} />
          </Link>
        ))}
      </>
    </>
  );
}
