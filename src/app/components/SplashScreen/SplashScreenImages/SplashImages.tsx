import Image from "next/image";
import styles from "./SplashImages.module.scss";
import { RefObject } from "react";

export const SplashImages = ({
  splashRef,
}: {
  splashRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className={styles.wrapper} ref={splashRef}>
      <div className={styles.images_wrapper}>
        <Image
          src="images/the.svg"
          width={150}
          height={50}
          alt="the"
          className={styles.the}
        />
        <Image
          src="images/letterI.svg"
          width={26}
          height={128}
          alt="I"
          className={styles.letter_i}
        />
        <Image
          src="images/letterN.svg"
          width={211}
          height={128}
          alt="N"
          className={styles.letter_n}
        />

        <Image
          src="images/fin.svg"
          width={331}
          height={128}
          alt="FIN"
          className={styles.letters_fin}
        />
      </div>
    </div>
  );
};
