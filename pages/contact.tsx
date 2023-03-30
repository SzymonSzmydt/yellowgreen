import style from '../styles/contact.module.css';
import { Standard } from '../components/button/standard';

function Contact() {
  return (
    <>
      <h1 className={style.h1}>Kontakt</h1>
      <form className={style.form}>
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
          pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          className={style.email}
          placeholder="email*"
        />
        <input
          name="order"
          type="number"
          autoComplete="family-name"
          pattern="/[0-9]/g"
          className={style.email}
          placeholder="Numer zamóienia (opcjonalnie)"
        />
        <textarea name="message" />
        <Standard name={'WYŚLIJ'} handleClick={() => null} />
      </form>
    </>
  );
}

export default Contact;
