import React from 'react';
import main from '../Global.module.scss';
import styles from './Header.module.scss';


function Header(props) {
  return (
      <section className={styles.mainScreen}>
        <header className={styles.header}>
          <div className={styles.logo}>COURSEWAY</div>
          <div className={styles.burger}>
            <span />
          </div>
          <div className={styles.menu}>
            <a href={"#"} className={`${styles.link} ${styles.current}`}>головна</a>
            <a href={"#"} className={styles.link}>курси</a>
            <a href={"#"} className={styles.link}>блог</a>
            <a href={"#"} className={styles.link}>про проект</a>
            <a href={"#"} className={styles.link}>реєстрація</a>
          </div>
        </header>
        <div className={styles.content}>
          <div className={main.container}>
            <div className={styles.contentIn}>
              <div className={styles.title}>
                БЕЗКОШТОВНІ ОНЛАЙН-КУРСИ
                <span className={styles.smaller}>ВІД ВИКЛАДАЧІВ ПРОВІДНИХ УНІВЕРСИТЕТІВ СВІТУ</span>
              </div>
              <form action={"/form"} method={"post"} className={`${styles.form} ${main.form}`}>
                <div className={main.boxInput}><input type={"text"} className={main.input} name={"user_email" }placeholder={"Email:"} /></div>
                <div className={main.boxInput}><input type={"text"} className={main.input} name={"user_password"} placeholder={"Password:"} /></div>
                <button className={main.button}>РОЗПОЧАТИ!</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Header;