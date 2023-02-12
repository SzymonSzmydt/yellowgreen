import btn from "./btn.module.css";

type MinusProps = {
  handleClick: () => void;
};

export function Minus({ handleClick }: MinusProps) {
  return <div className={btn.minus} onClick={handleClick}/>;
}
