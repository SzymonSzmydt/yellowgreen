import Link from 'next/link';
import { TitleAccent } from 'components/ui/titleAccent';
import { CorrectProductType } from '../../../context/types/type';
import { Card } from './Card';
import { YouAreHereLinks } from 'components/ui/youAreHereLinks';

interface ProductCardProps {
  categoryUrlPathName: string;
  products: CorrectProductType[];
}

export function ProductCard({
  products,
  categoryUrlPathName,
}: ProductCardProps) {
  return (
    <>
      <YouAreHereLinks />
      <TitleAccent name={products[0].category} />
      <>
        {products.map((product) => (
          <Link href={`/${categoryUrlPathName}/${product.id}`} key={product.id}>
            <Card product={product} />
          </Link>
        ))}
      </>
    </>
  );
}
