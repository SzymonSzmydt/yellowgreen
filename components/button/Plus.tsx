import btn from './style/btn.module.css';

type PlusProps = {
  handleClick: () => void;
};

export function Plus({ handleClick }: PlusProps) {
  return <div className={btn.plus} onClick={handleClick} />;
}
