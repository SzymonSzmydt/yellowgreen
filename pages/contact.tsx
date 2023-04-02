import style from '../styles/contact.module.css';
import { Standard } from '../components/button/standard';
import { FormEvent, useState } from 'react';
import { reg } from 'context/regeExp';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';

function Contact() {
  const [messageNotSend, setMessageNotSend] = useState(true);
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const formData = {
      firstName: data.get(`firstName`) as string,
      lastName: data.get('lastName') as string,
      email: data.get('email') as string,
      order: data.get('order') as string,
      message: data.get('message') as string,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC as string
      )
      .then(() => {
        setMessageNotSend(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return messageNotSend ? (
    <>
      <h1 className={style.h1}>Kontakt</h1>
      <form onSubmit={onSubmit} className={style.form}>
        <section className={style.top}>
          <input
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            pattern="\w{3,13}"
            className={style.name}
            placeholder="Imię*"
          />
          <input
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            pattern="\w{3,16}"
            className={style.name}
            placeholder="Nazwisko*"
          />
        </section>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          pattern={reg}
          className={style.email}
          placeholder="email*"
        />
        <input
          name="order"
          type="number"
          autoComplete="family-name"
          pattern="/[0-9]/g"
          className={style.email}
          placeholder="Numer zamówienia (opcjonalnie)"
        />
        <textarea
          name="message"
          placeholder="Wiadomość*"
          required
          minLength={50}
        />
        <section className={style.btn}>
          <Standard name={'WYŚLIJ'} />
        </section>
      </form>
    </>
  ) : (
    <section className={style.wrapper}>
      <div className={style.box}>
        <h3> Wysłano wiadomość... </h3>
        <p>
          Po zweryfikowaniu zapytania nasz dział obsługi klienta skontaktuje się
          z Państwem niezwłocznie.
        </p>
        <section>
          <Standard
            name={'OK'}
            white={true}
            handleClick={() => router.push('/')}
          />
        </section>
      </div>
    </section>
  );
}

export default Contact;
