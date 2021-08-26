import styles from './teaser-list.module.scss';
import TeaserItem from './teaser-item/teaser-item';

const dummy_data = [
  {
    id:'001',
    image:'demo_img1.jpg',
    title:'NewsTitle 1',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id:'002',
    image:'demo_img2.jpg',
    title:'NewsTitle 2',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id:'003',
    image:'demo_img3.jpg',
    title:'NewsTitle 3',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
]

const TeaserList = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container + " container__big"}>
            <h3 className={styles.headline}>Our Lastest News</h3>
            <div className={styles.list}>
              {dummy_data.map(item => <TeaserItem key={item.id} image={item.image} title={item.title} text={item.text} />)}
            </div>
        </div>
    </section>
  )
}

export default TeaserList