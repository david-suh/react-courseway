import React from 'react';
import main from '../Global.module.scss';
import styles from './Content.module.scss'
import SlickSlider from './Slider/SlickSlider';

function Content(props) {
  return (
    <div className={styles.content}>
      <section className={styles.benefits}>
        <div className={main.container}>
          <div className={`${main.title} ${styles.title}`}>ПЕРЕВАГИ</div>
          <div className={styles.inner}>
            <div className={`${styles.leftSide} ${styles.sides}`}>
              <div className={styles.box}>
                <img src={"/img/Clock.svg"} alt={'Clock'} className={`${styles.img} ${styles.clock}`} />
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
      <section className={styles.courses}>
        <div className={main.container}>
          <div className={styles.inner}>
            <div className={`${main.title} ${styles.title}`}>
              ДОСТУПНІ КУРСИ
            </div>
            <div className={styles.text}>
              Запишіться прямо зараз на безкоштовні курси
            </div>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <div className={styles.leftSide}>
                  <div className={styles.name}>Основи  програмування</div>
                  <div className={styles.desc}>After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href={"#"} className={styles.more}>Read more ...</a>
                  <a href={"#"} className={styles.signUp}>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className={styles.rightSide}><img className={styles.img} src={"/img/algorithms.jpg"} alt={"Algorithms"} /></div>
              </div>
              <div className={styles.box}>
                <div className={styles.leftSide}>
                  <div className={styles.name}>Розробка та  аналіз алгоритмів</div>
                  <div className={styles.desc}>After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href={"#"} className={styles.more}>Read more ...</a>
                  <a href={"#"} className={styles.signUp}>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className={styles.rightSide}><img className={styles.img} src={"/img/books.jpg"} alt={"books"} /></div>
              </div>
              <div className={styles.box}>
                <div className={styles.leftSide}>
                  <div className={styles.name}>Економіка <br />для всіх</div>
                  <div className={styles.desc}>After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href={"#"} className={styles.more}>Read more ...</a>
                  <a href={"#"} className={styles.signUp}>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className={styles.rightSide}><img className={styles.img} src={"/img/code.jpg"} alt={"code"} /></div>
              </div>
              <div className={styles.box}>
                <div className={styles.leftSide}>
                  <div className={styles.name}>Історія <br />України</div>
                  <div className={styles.desc}>After the first 50 completed projects to make a mistake with the deadlines almost unreal.</div>
                  <a href={"#"} className={styles.more}>Read more ...</a>
                  <a href={"#"} className={styles.signUp}>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                </div>
                <div className={styles.rightSide}><img className={styles.img} src={"/img/war.jpg"} alt={"history"} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.partners}>
        <SlickSlider />
      </section>
      <section className={styles.docs}>
        <div className={styles.img} />
        <div className={styles.content}>
          <div className={styles.title}>СЕРТИФІКАТ ВІД ГАРВАРДУ</div>
          <div className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
          </div>
          <div className={styles.button}><a href className={styles.link}>ОТРИМАТИ!</a></div>
        </div>
      </section>
      <section className={styles.devs}>
        <div className={main.container}>
          <div className={`${main.title} ${styles.title}`}>РОЗРОБНИКИ</div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={`${styles.img} ${styles.daniel}`} />
              <div className={styles.name}>Daniel Raynolds</div>
              <div className={styles.text}>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className={styles.social}>
                <a href={"#"} className={`${styles.facebook}${styles.icon}`} />
                <a href={"#"} className={`${styles.twitter}${styles.icon}`} />
                <a href={"#"} className={`${styles.google}${styles.icon}`} />
              </div>
            </div>
            <div className={styles.box}>
              <div className={`${styles.img} ${styles.nick}`} />
              <div className={styles.name}>Nick Parson</div>
              <div className={styles.text}>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className={styles.social}>
                <a href={"#"} className={`${styles.facebook}${styles.icon}`} />
                <a href={"#"} className={`${styles.twitter}${styles.icon}`} />
                <a href={"#"} className={`${styles.google}${styles.icon}`} />
              </div>
            </div>
            <div className={styles.box}>
              <div className={`${styles.img} ${styles.william}`} />
              <div className={styles.name}>William Stanley</div>
              <div className={styles.text}>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className={styles.social}>
                <a href={"#"} className={`${styles.facebook}${styles.icon}`} />
                <a href={"#"} className={`${styles.twitter}${styles.icon}`} />
                <a href={"#"} className={`${styles.google}${styles.icon}`} />
              </div>
            </div>
            <div className={styles.box}>
              <div className={`${styles.img} ${styles.sarah}`} />
              <div className={styles.name}>Sarah Noel</div>
              <div className={styles.text}>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</div>
              <div className={styles.social}>
                <a href={"#"} className={`${styles.facebook}${styles.icon}`} />
                <a href={"#"} className={`${styles.twitter}${styles.icon}`} />
                <a href={"#"} className={`${styles.google}${styles.icon}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.signup}>
        <div className={`${styles.title} ${styles.title}`}>ЗАРЕЄСТРУЙСЯ ЗАРАЗ</div>
        <div className={styles.text}>Та отримай задоволення від навчання</div>
        <div className={`${main.form} ${styles.form}`}>
          <div className={`${main.boxInput} ${styles.input}`}><input type={"text"} className={main.input} name={"name"} placeholder={"Name:"} />
          </div>
          <div className={`${main.boxInput} ${styles.input}`}><input type={"text"} className={main.input} name={"user_email"} placeholder={"Email:"} /></div>
          <button type={"submit"} className={`${main.button} ${styles.button}`}>Submit</button>
        </div>
      </section>

    </div>
  );
}

export default Content;