"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { NavBarLinks } from "./NavBarLinks/NavBarLinks";
import { useParallax } from "react-scroll-parallax";

export const NavBar = () => {
  const parallax = useParallax<HTMLAnchorElement>({
    scale: [1, 0.367],
    translateY: ["0px", "-34px"],
    startScroll: 0,
    endScroll: 600,
  });

  const parallaxButton = useParallax<HTMLButtonElement>({
    scale: [1, 0.5],
    translateY: ["0px", "-34px"],
    startScroll: 0,
    endScroll: 600,
  });

  const parallaxText = useParallax<HTMLParagraphElement>({
    translateY: ["-55%", "-230%"],
    translateX: ["-50%", "-50%"],
    startScroll: 0,
    endScroll: 600,
  });

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo} ref={parallax.ref}>
        <Image
          src="images/logo.svg"
          width={514.84}
          height={90}
          alt="The INFIN logo"
        />
      </Link>

      <NavBarLinks />

      <div style={{ position: "relative" }}>
        <button
          type="button"
          className={styles.button}
          ref={parallaxButton.ref}
        ></button>
        <p
          ref={parallaxText.ref}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,55%)",
            zIndex: 1,
            textTransform: "uppercase",
          }}
        >
          contact
        </p>
      </div>
    </nav>
  );
};
