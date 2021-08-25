import { useState } from 'react';
import styles from './jumbotron.module.scss';
import SubscribeModal from '../subscribe-modal/subscribe-modal';

const Jumbotron = () => {

  const stars = new Array(10).fill(null);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
    <div className={styles.wrapper}>

        <div className={styles.night}>
          {stars.map((_, idx) => <span className={styles.shooting_star} key={idx}></span>)}
        </div>

        <div className={styles.container + ' container__big'}>
          <div>
            <h2 className={styles.headline}>Equal opportunity for space flight, with a spaceship</h2>
            <div className={styles.buttons}>
              <button className="button button__primary" onClick={openModal}>Subscribe for updates</button>
              <a className="button button__grey" href="https://thejetsons.fandom.com/wiki/Spacely_Space_Sprockets,_Inc." target="_blank" title="Find out more">Find out more</a>
            </div>
          </div>
        </div>

    </div>
    {modalOpen && <SubscribeModal closeModal={closeModal}></SubscribeModal>}
    </>
  )
}

export default Jumbotron