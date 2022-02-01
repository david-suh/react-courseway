import React from 'react';
import main from '../Global.module.scss';
import styles from './Footer.module.scss';

function Footer(props) {
  return (
    <footer className={main.footer}>
      <p className={`${styles.copyrights} ${styles.creator} ${main.creator}`}>Made with love by <span className={`${styles.copyrights} ${main.creator} ${styles.copyrightsBlue}`}>Alex Kuzmenko</span></p>
      <p className={`${styles.copyrights} ${styles.origin} ${main.origin}`}>Inspired by <span className={`${styles.copyrights} ${main.origin} ${styles.copyrightsRed}`}>PROMETHEUS</span></p>
      <div className={`${styles.social} ${main.social}`}>
        <a href="#" className={`${styles.facebook} ${styles.icon} ${main.facebook} ${main.icon}`} />
        <a href="#" className={`${styles.twitter} ${styles.icon} ${main.twitter} ${main.icon}`} />
        <a href="#" className={`${styles.google} ${styles.icon} ${main.google} ${main.icon}`} />
      </div>
      <div className={`${styles.social} ${main.social}`}>
        <a href="#" className={`${styles.facebook} ${styles.icon} ${main.facebook} ${main.icon} ${main.iconRed}` }  />
        <a href="#" className={`${styles.twitter} ${styles.icon} ${main.twitter} ${main.icon} ${main.iconRed}`} />
        <a href="#" className={`${styles.google} ${styles.icon} ${main.google} ${main.icon} ${main.iconRed}`} />
      </div>
    </footer>
  );
}

export default Footer;