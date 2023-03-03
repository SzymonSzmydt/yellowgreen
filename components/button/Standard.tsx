import btn from './style/btn.module.css';

type StandardProps = {
  handleClick: () => void;
  name: string;
  white?: boolean;
};

function StandardButton({ handleClick, name, white }: StandardProps) {
  const styles = white ? btn.standardWhite : btn.standard;
  return (
    <button onClick={handleClick} className={styles}>
      {name}
    </button>
  );
}

export default StandardButton;
