import Image from "next/image";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info_wrapper}>
        <p className={styles.text}>
          Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating.
        </p>
        <FooterLinks />
      </div>
      <div className={styles.img_wrapper}>
        <Image src="/images/logo.svg" width={1380} height={241} alt="logo" />
        <div className={styles.copyright_wrapper}>
          <Image
            src="/images/favicon.svg"
            width={18}
            height={22}
            alt="logo"
            className={styles.img}
          />
          <p className={styles.copyright_text}>
            &#169; {new Date().getFullYear()} • Curated by{" "}
            <span className={styles.company}> ThinkSeb</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
