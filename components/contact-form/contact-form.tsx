import styles from './contact-form.module.scss';

const ContactForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container__medium">
        <h2 className={styles.headline}>Contact Us</h2>
        <form className="form">
          <input placeholder="Name" type="text" className="form__input" />
          <input placeholder="Email" type="email" className="form__input" />
          <textarea placeholder="Message" className="form__textarea"></textarea>
          <button type="button" className="button button__primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm