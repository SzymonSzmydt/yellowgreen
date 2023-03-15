import style from './styles/foot.module.css';
import { TopFooterSection } from './topFooterSection';

export function Footer() {
  return (
    <footer className={style.footer}>
      <TopFooterSection />
      <section className={style.bottom}></section>
    </footer>
  );
}
