import { useState, useEffect } from 'react';
import styles from './subscribe-modal.module.scss';

const SubscribeModal = (props:any) => {
  const [isvalidEmail, setValidEmail] = useState(true);
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmailValue] = useState('');

  const checkEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    const isValidEmail = regex.test(email);
    setValidEmail(isValidEmail);
  }

  const handleChange = (e:any) => {
    setEmailValue(e.target.value);
    setErrorEmail(false);
  }

  const submitEmail = () => {
    if (isvalidEmail){
      //Sign UP and ...
      props.closeModal();
    } else {
      setErrorEmail(true);
    }
  }

  useEffect(() => {
    checkEmail();
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={props.closeModal}></div>
      <div className={styles.box}>
          <div className={styles.header}>
            <button onClick={props.closeModal}>&#x2715;</button>
          </div>
          <div className={styles.body}>
            <div className={styles.container}>
            
              <div className={styles.form__container}>
                <h3>Sign Up entering you email</h3>
                <div className={styles.form__elements}>
                  <input type="text" placeholder="Email" value={email} onChange={handleChange} />
                  <button className="button button__primary" onClick={submitEmail}>Sign Up</button>
                </div>
                <div className={styles.form__errorMsg}>
                  { errorEmail && "Invalid email, please enter a valid email" }
                </div>
              </div>
            
            </div>
          </div>
      </div>
    </div>
  )
}

export default SubscribeModal