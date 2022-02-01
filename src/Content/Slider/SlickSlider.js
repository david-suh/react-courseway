import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from "./Slider.module.scss"

function SlickSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  return (
    <Slider {...settings}>
      <div className={styles.slider}>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.cambridge}`} />
            <div className={styles.text}>Cambridge</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.harvard}`} />
            <div className={styles.text}>Harvard</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.mit}`} />
            <div className={styles.text}>MIT</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.ucla}`} />
            <div className={styles.text}>UCLA</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.cambridge}`} />
            <div className={styles.text}>Cambridge</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.harvard}`} />
            <div className={styles.text}>Harvard</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.mit}`} />
            <div className={styles.text}>MIT</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.img} ${styles.ucla}`} />
            <div className={styles.text}>UCLA</div>
          </div>
        </div>
    </Slider>
  );
}

export default SlickSlider;