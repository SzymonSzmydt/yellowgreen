import btn from './style/btn.module.css';

type StandardProps = {
  handleClick: () => void;
  name: string;
};

function StandardButton({ handleClick, name }: StandardProps) {
  return (
    <button onClick={handleClick} className={btn.standard}>
      {name}
    </button>
  );
}

export default StandardButton;
