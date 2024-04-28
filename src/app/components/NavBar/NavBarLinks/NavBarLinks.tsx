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
      <li ref={parallaxHome.ref}>
        <Link href="/">Home</Link>
      </li>
      <li ref={parallaxBusinesses.ref}>
        <Link href="/" onClick={scrollToBusiness}>
          For Businesses
        </Link>
      </li>
      <li ref={parallaxIndividuals.ref}>
        <Link href="/" onClick={scrollToIndividuals}>
          For Individuals
        </Link>
      </li>
      <li ref={parallaxCapitalism.ref}>
        <Link href="/" onClick={scrollToReviews}>
          Capitalism 2.0
        </Link>
      </li>
      <li ref={parallaxMarketing.ref}>
        <Link href="/" onClick={scrollTosStarted}>
          Marketing Efforts
        </Link>
      </li>
    </ul>
  );
};
