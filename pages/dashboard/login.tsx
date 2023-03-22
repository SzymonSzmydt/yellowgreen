'use client';
import { Standard } from 'components/button/standard';
import style from './styles/login.module.css';
import { useState } from 'react';
import type { ReactElement } from 'react';
import eyeIconOn from '../../public/icons/pass/visibility_on.svg';
import eyeIconOff from '../../public/icons/pass/visibility_off.svg';
import Image from 'next/image';

type LoginProps = {
  login: string;
  password: string;
};

export default function Login() {
  const [user, setUser] = useState<LoginProps>({ login: '', password: '' });
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={style.login}>
      <h2>Wymagana autoryzacja</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Login</label>
        <input
          type="text"
          name="login"
          className={style.input}
          autoComplete="on"
          required
          minLength={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, login: e.target.value })
          }
        />
        <label>Hasło</label>
        <section className={style.pass}>
          <input
            type={isVisible ? 'text' : 'password'}
            name="password"
            className={style.input}
            autoComplete="on"
            required
            minLength={4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, password: e.target.value })
            }
          />
          <Image
            src={isVisible ? eyeIconOn : eyeIconOff}
            onClick={() => setIsVisible((state) => !state)}
            className={style.visibility}
            alt="Password is hidden"
          />
        </section>

        <div className={style.btn}>
          <Standard name="Zaloguj" handleClick={() => null} />
        </div>
      </form>
    </div>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
