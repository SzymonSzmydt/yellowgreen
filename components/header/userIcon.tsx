import { useState } from 'react';
import style from './styles/user.module.css';
import { useUserAuth } from 'context/firebase/UserAuthContext';
import { UserAccount } from 'components/account/userAccount';
import { useRouter } from 'next/router';

export function UserIcon() {
  const [popup, setPopup] = useState(false);
  const user = useUserAuth();
  const router = useRouter();

  return popup ? (
    <UserAccount />
  ) : (
    <div
      onClick={
        user ? () => setPopup((state) => !state) : () => router.push('login')
      }
      className={style.userWrapper}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill={user ? 'var(--active-user)' : 'var(--accent-color)'}
        className={style.user}
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
    </div>
  );
}
