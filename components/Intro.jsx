import styles from '../styles/Intro.module.css';
import Image from 'next/image';
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>CoEarners</span> for your Business
        </h1>
        <p className={styles.desc}>
          We are cross-functional team delivering mission critical apps and
          metaverse experience.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.card}>
        <Image src="" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Intro;
