import { EmailPass } from 'components/login/emailPass';
import style from '../styles/login.module.css';
import AuthProviders from 'components/login/providers';

export default function Login() {
  return (
    <section className={style.login}>
      <h1>Zaloguj się!</h1>
      <AuthProviders />
      <EmailPass />
    </section>
  );
}
