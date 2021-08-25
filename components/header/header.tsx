import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.wrapper}>
        <div className={styles.container + ' container__big'}>
            <Link href="/">
              <button className={styles.logo}>
                <i className={styles.icon}></i>
                <span>Spacely Space Corp.</span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="button button__primary">CONTACT</button>
            </Link>
        </div>
    </header>
  )
}

export default Header
