import { Standard } from 'components/button/standard';
import style from './styles/login.module.css';
import { useState } from 'react';
import type { ReactElement } from 'react';

export default function Login() {
  const [user, setUser] = useState({ login: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={style.login}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          name="login"
          className={style.input}
          autoComplete="on"
          required
          min={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, login: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          className={style.input}
          autoComplete="on"
          required
          min={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: e.target.value })
          }
        />
        <Standard name="Zaloguj" handleClick={() => null} />
      </form>
    </div>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
