import React from 'react';
import main from '../Global.module.scss';
import styles from './Content.module.scss'

function Content(props) {
  return (
    <div className={styles.content}>
      <section className={styles.benefits}>
        <div className={main.container}>
          <div className={`${main.title} ${styles.title}`}>ПЕРЕВАГИ</div>
          <div className={styles.inner}>
            <div className={`${styles.leftSide} ${styles.sides}`}>
              <div className={styles.box}>
                <img src={"/img/Clock.svg"} alt={"Clock"} className={`${styles.img} ${styles.clock}`} />
                <div className={styles.name}>Будь-коли</div>
                <div className={styles.text}>Навчайтесь у зручний для Вас час. Відеолекції, тести та форум доступні цілодобово.</div>
              </div>
              <div className={styles.box}>
                <img src={"/img/Globe.svg"} alt={"Globe"} className={`${styles.img} ${styles.globe}`} />
                <div className={styles.name}>Будь-де</div>
                <div className={styles.text}>Проходьте курси, не виходячи з дому чи в дорозі. Все, що Вам знадобиться, – це доступ до інтернету.</div>
              </div>
            </div>
            <div className={styles.icon} />
            <div className={`${styles.rightSide} ${styles.sides}`}>
              <div className={styles.box}>
                <img src={"/img/phone.svg"} alt={"Phone"} className={`${styles.img} ${styles.phone}`} />
                <div className={styles.name}>Будь-який пристрій</div>
                <div className={styles.text}>Навчайтесь на комп’ютері, планшеті чи телефоні: сайт підлаштується під Ваш пристрій.</div>
              </div>
              <div className={styles.box}>
                <img src={"/img/Man.svg"} alt={"Human"} className={`${styles.img} ${styles.human}`}/>
                <div className={styles.name}>Будь-хто</div>
                <div className={styles.text}>Наші курси абсолютно безкоштовні – захмарні ціни більше ніколи не стануть на заваді найкращій освіті.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses">
        <div className="container">
          <div className="courses__inner">
            <div className="title courses__title">
              ДОСТУПНІ КУРСИ
            </div>
            <div className="courses__text">
              Запишіться прямо зараз на безкоштовні курси
            </div>
            <div className="courses__boxes">
              <div className="courses__box">
                <div className="courses__left-side">
                  <div className="courses__name">Основи  програмування</div>
                  <div className="courses__desc">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href="#" className="courses__more">Read more ...</a>
                  <a href="#" className="courses__sign-up">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className="courses__right-side"><img className="courses__img" src="/img/algorithms.jpg" alt /></div>
              </div>
              <div className="courses__box">
                <div className="courses__left-side">
                  <div className="courses__name">Розробка та  аналіз алгоритмів</div>
                  <div className="courses__desc">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href="#" className="courses__more">Read more ...</a>
                  <a href="#" className="courses__sign-up">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className="courses__right-side"><img className="courses__img" src="/img/books.jpg" alt /></div>
              </div>
              <div className="courses__box">
                <div className="courses__left-side">
                  <div className="courses__name">Економіка <br />для всіх</div>
                  <div className="courses__desc">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href="#" className="courses__more">Read more ...</a>
                  <a href="#" className="courses__sign-up">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className="courses__right-side"><img className="courses__img" src="/img/code.jpg" alt /></div>
              </div>
              <div className="courses__box">
                <div className="courses__left-side">
                  <div className="courses__name">Історія <br />України</div>
                  <div className="courses__desc">After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href="#" className="courses__more">Read more ...</a>
                  <a href="#" className="courses__sign-up">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className="courses__right-side"><img className="courses__img" src="/img/war.jpg" alt /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="slider partners__slider">
          <div className="slider__item">
            <div className="slider__img slider__cambridge" />
            <div className="slider__text">Cambridge</div>
          </div>
          <div className="slider__item">
            <div className="slider__img slider__harvard" />
            <div className="slider__text">Harvard</div>
          </div>
          <div className="slider__item">
            <div className="slider__img slider__mit" />
            <div className="slider__text">MIT</div>
          </div>
          <div className="slider__item">
            <div className="slider__img slider__ucla" />
            <div className="slider__text">UCLA</div>
          </div>
          <div className="slider__item">
            <div className="slider__img  slider__cambridge" />
            <div className="slider__text">Cambridge</div>
          </div>
          <div className="slider__item">
            <div className="slider__img slider__harvard" />
            <div className="slider__text">Harvard</div>
          </div>
          <div className="slider__item">
            <div className="slider__img slider__mit" />
            <div className="slider__text">MIT</div>
          </div>
          <div className="slider__item">
            <div className="slider__img slider__ucla" />
            <div className="slider__text">UCLA</div>
          </div>
        </div>
      </section>
      <section className="docs">
        <div className="docs__img" />
        <div className="docs__content">
          <div className="docs__title">СЕРТИФІКАТ ВІД ГАРВАРДУ</div>
          <div className="docs__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
          </div>
          <div className="docs__button"><a href className="docs__link">ОТРИМАТИ!</a></div>
        </div>
      </section>
      <section className="devs">
        <div className="container">
          <div className="title devs__title">РОЗРОБНИКИ</div>
          <div className="devs__boxes">
            <div className="devs__box">
              <div className="devs__img devs__daniel" />
              <div className="devs__name">Daniel Raynolds</div>
              <div className="devs__text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className="social devs__social">
                <div className="social__facebook social__icon devs__facebook devs__icon" />
                <div className="social__twitter social__icon devs__twitter devs__icon" />
                <div className="social__google social__icon devs__google devs__icon" />
              </div>
            </div>
            <div className="devs__box">
              <div className="devs__img devs__nick" />
              <div className="devs__name ">Nick Parson</div>
              <div className="devs__text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className="social devs__social">
                <div className="social__facebook social__icon devs__facebook devs__icon" />
                <div className="social__twitter social__icon devs__twitter devs__icon" />
                <div className="social__google social__icon devs__google devs__icon" />
              </div>
            </div>
            <div className="devs__box">
              <div className="devs__img devs__william" />
              <div className="devs__name">William Stanley</div>
              <div className="devs__text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className="social devs__social">
                <a href="#" className="social__facebook social__icon devs__facebook devs__icon" />
                <a href="#" className="social__twitter social__icon devs__twitter devs__icon" />
                <a href="#" className="social__google social__icon devs__google devs__icon" />
              </div>
            </div>
            <div className="devs__box">
              <div className="devs__img devs__sarah" />
              <div className="devs__name">Sarah Noel</div>
              <div className="devs__text">After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className="social devs__social">
                <a href="#" className="social__facebook social__icon devs__facebook devs__icon" />
                <a href="#" className="social__twitter social__icon devs__twitter devs__icon" />
                <a href="#" className="social__google social__icon devs__google devs__icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signup">
        <div className="title signup__title">ЗАРЕЄСТРУЙСЯ ЗАРАЗ</div>
        <div className="signup__text">Та отримай задоволення від навчання</div>
        <div className="form signup__form">
          <div className="form__box-input signup__input"><input type="text" className="form__input" name="name" placeholder="Name:" />
          </div>
          <div className="form__box-input signup__input"><input type="text" className="form__input" name="user_email" placeholder="Email:" /></div>
          <button type="submit" className="form__button signup__button">Submit</button>
        </div>
      </section>

    </div>
  );
}

export default Content;