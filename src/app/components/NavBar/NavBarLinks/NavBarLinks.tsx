"use client";
import Link from "next/link";
import styles from "./NavBarLinks.module.scss";
import { useNavBarParallax } from "./useNavBarParallaxhook";

export const NavBarLinks = () => {
  const {
    parallaxHome,
    parallaxBusinesses,
    parallaxIndividuals,
    parallaxCapitalism,
    parallaxMarketing,
    scrollToBusiness,
    scrollToIndividuals,
    scrollToReviews,
    scrollTosStarted,
  } = useNavBarParallax();

  return (
    <ul className={styles.list}>
      <li ref={parallaxHome.ref} className={styles.link}>
        <Link href="/">Home</Link>
      </li>
      <li ref={parallaxBusinesses.ref} className={styles.link}>
        <p onClick={scrollToBusiness}>For Businesses</p>
      </li>
      <li ref={parallaxIndividuals.ref} className={styles.link}>
        <p onClick={scrollToIndividuals}>For Individuals</p>
      </li>
      <li ref={parallaxCapitalism.ref} className={styles.link}>
        <p onClick={scrollToReviews}>Capitalism 2.0</p>
      </li>
      <li ref={parallaxMarketing.ref} className={styles.link}>
        <p onClick={scrollTosStarted}>Marketing Efforts</p>
      </li>
    </ul>
  );
};
