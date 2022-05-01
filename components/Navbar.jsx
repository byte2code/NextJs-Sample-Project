import Link from 'next/dist/client/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">AVOCARDO</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products">PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products">ABOUT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
