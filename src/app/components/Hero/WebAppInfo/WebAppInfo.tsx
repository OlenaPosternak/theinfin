import Image from "next/image";
import styles from "./WebAppInfo.module.scss";

export const WebAppInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p>Web + </p>
        <p>Mobile app</p>
      </div>
      <Image
        src="/images/webApp.png"
        width={201}
        height={160}
        alt="web app img"
        className={styles.img}
      />
    </div>
  );
};
