import Link from "next/link";
import styles from "./NavBarLinks.module.scss";

export const NavBarLinks = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">For Businesses</Link>
      </li>
      <li>
        <Link href="/">For Individuals</Link>
      </li>
      <li>
        <Link href="/">Capitalism 2.0</Link>
      </li>
      <li>
        <Link href="/">Marketing Efforts</Link>
      </li>
    </ul>
  );
};
