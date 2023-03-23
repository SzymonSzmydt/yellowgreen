import { EmailPass } from 'components/login/emialPass';
import style from './styles/login.module.css';
import type { ReactElement } from 'react';

export default function Login() {
  return (
    <div className={style.login}>
      <h2>Wymagana autoryzacja</h2>
      <EmailPass path="/dashboard" />
    </div>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
('/dashboard');
