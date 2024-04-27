import { Button } from "../../general/Button";
import styles from "./HeroInfo.module.scss";

export const HeroInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <p className={styles.info}>
          A market-based assessment of your contribution.
        </p>
        <h1 className={styles.title}>
          To know your true value, Help others understand theirs.
        </h1>
      </div>
      <div className={styles.button}>
        <Button bgColor="#121212" textColor="#fff">
          Schedule a demo
        </Button>
      </div>
    </div>
  );
};
