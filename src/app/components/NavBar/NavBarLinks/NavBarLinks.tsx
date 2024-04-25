"use client";
import Link from "next/link";
import styles from "./NavBarLinks.module.scss";
import { useNavBarParalax } from "./useNavBarParalaxhook";

export const NavBarLinks = () => {
  const {
    parallaxHome,
    parallaxBusinesses,
    parallaxIndividuals,
    parallaxCapitalism,
    parallaxMarketing,
  } = useNavBarParalax();

  return (
    <ul className={styles.list}>
      <li ref={parallaxHome.ref}>
        <Link href="/">Home</Link>
      </li>
      <li ref={parallaxBusinesses.ref}>
        <Link href="/">For Businesses</Link>
      </li>
      <li ref={parallaxIndividuals.ref}>
        <Link href="/">For Individuals</Link>
      </li>
      <li ref={parallaxCapitalism.ref}>
        <Link href="/">Capitalism 2.0</Link>
      </li>
      <li ref={parallaxMarketing.ref}>
        <Link href="/">Marketing Efforts</Link>
      </li>
    </ul>
  );
};
