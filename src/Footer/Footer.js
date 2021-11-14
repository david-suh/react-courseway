import React from 'react';
import main from '../Global.module.scss';
import styles from './Footer.module.scss';

function Footer(props) {
  return (
    <footer class="footer">
      <p class="copyrights creator footer__creator">Made with love by <span class="copyrights footer__creator copyrights--red">Alex Kuzmenko</span></p>
      <p class="copyrights origin footer__origin">Inspired by <span class="copyrights footer__origin copyrights--red">PROMETHEUS</span></p>
      <div class="social footer__social">
        <a href="#" class="social__facebook social__icon footer__facebook footer__icon"></a>
        <a href="#" class="social__twitter social__icon footer__twitter footer__icon"></a>
        <a href="#" class="social__google social__icon footer__google footer__icon"></a>
      </div>
      <div class="social footer__social">
        <a href="#" class="social__facebook social__icon footer__facebook footer__icon footer__icon--red"></a>
        <a href="#" class="social__twitter social__icon footer__twitter footer__icon footer__icon--red"></a>
        <a href="#" class="social__google social__icon footer__google footer__icon footer__icon--red"></a>
      </div>
    </footer>
  );
}

export default Footer;