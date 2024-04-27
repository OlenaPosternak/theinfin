import Image from "next/image";
import styles from "./VideoSection.module.scss";

export const VideoSection = () => {
  return (
    <Image
      src="/images/videoImg.png"
      width={1417}
      height={720}
      alt="girl works"
      className={styles.img}
    />
  );
};
