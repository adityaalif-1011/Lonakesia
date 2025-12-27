import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Lokanesia</div>

      <ul className={styles.menu}>
        <li>Courses</li>
        <li>How It Works</li>
        <li>Community</li>
        <li>About</li>
        <li className={styles.cta}>Start Learning</li>
      </ul>
    </nav>
  );
}
