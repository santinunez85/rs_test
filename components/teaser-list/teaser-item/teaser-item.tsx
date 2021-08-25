import styles from './teaser-item.module.scss';

const TeaserItem = (props: any) => {
  return (
    <div className={styles.box}>
      <div className={styles.tile}>
        <picture>
          <img src={props.image} alt={props.title} />
        </picture>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <a href="#" title={props.title}>Read more</a>
        </div>
      </div> 
    </div>
  )
}

export default TeaserItem