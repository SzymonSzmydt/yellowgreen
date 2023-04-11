import { googleSignIn } from 'context/firebase/UserAuthContext';
import style from './styles/providers.module.css';
import googleButton from '../../public/buttons/google.png';
import Image from 'next/image';

export default function AuthProviders() {
  return (
    <>
      <button onClick={() => googleSignIn()} className={style.btn}>
        <Image
          src={googleButton}
          width={191}
          height={46}
          alt="Login with google"
        />
      </button>
    </>
  );
}
