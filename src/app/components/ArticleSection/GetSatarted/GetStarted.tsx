import Image from "next/image";
import styles from "./GetStarted.module.scss";
import { ArticleWrapper } from "../../ArticleSection/ArticleWrapper/ArticleWrapper";
import { CrossIcons3pc } from "../../general/CrossIcons3pc/CrossIcons3pc";
import { Button } from "../../general/Button";

export const GetStarted = () => {
  return (
    <ArticleWrapper
      bgColor="#FFCD00"
      number="02"
      name="Get started"
      numberPosition="481px"
    >
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <Image
            src="/images/Articles/girl.png"
            width={223}
            height={223}
            alt="girl works"
            className={styles.img}
          />
          <CrossIcons3pc />
        </div>
        <div className={styles.title_wrapper}>
          <p className={styles.small_title}>What can The INFIN do for you?</p>
          <h2 className={styles.title}>Ready to get started</h2>
          <div className={styles.button}>
            <Button>Schedule a live demo</Button>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <div className={styles.roteted_cross}>
            <CrossIcons3pc />
          </div>
          <Image
            src="/images/Articles/boy.png"
            width={223}
            height={223}
            alt="boy works"
            className={styles.img}
          />
        </div>
      </div>
    </ArticleWrapper>
  );
};
