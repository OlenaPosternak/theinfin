import Image from "next/image";
import styles from "./InfoWrapper.module.scss";

export const InfoWrapper = ({ children, title, img }: any) => {
  return (
    <div className={styles.info}>
      <div className={styles.text_wrapper}>
        <p className={styles.text_title}>{title}</p>
        <p className={styles.text_info}>{children}</p>
      </div>
      {img && (
        <Image
          src={img}
          width={223}
          height={223}
          alt="people work"
          className={styles.img}
        />
      )}
    </div>
  );
};
