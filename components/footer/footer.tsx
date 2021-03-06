import styles from './footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <div className={'container__big ' + styles.container}>
        <div className={styles.copy}>
          <i className={styles.icon}></i>
          <span>Spacely Space Corp. - Copyright &copy; {currentYear}</span>
        </div>
        
      </div>  
    </footer>
  )
}
  
export default Footer