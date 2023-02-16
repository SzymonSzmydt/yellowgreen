import btn from './btn.module.css';

type VariantProps = {
  handleClick?: () => void;
  name: string;
};

export function Variant({ name, handleClick }: VariantProps) {
  return (
    <button className={btn.variantBox} onClick={handleClick}>
      {name}
    </button>
  );
}
