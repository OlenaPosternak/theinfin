import Image from "next/image";
import { ArticleWrapper } from "../../ArticleSection/ArticleWrapper/ArticleWrapper";
import { CrossIcons3pc } from "../../general/CrossIcons3pc/CrossIcons3pc";
import { Button } from "../../general/Button";
import styles from "./Reviews.module.scss";
import { ReviewItem } from "./ReviewItem/ReviewItem";

export const Reviews = () => {
  return (
    <ArticleWrapper
      bgColor="#121212"
      number="03"
      numberColor="white"
      name="Reviews"
      numberPosition="30px"
    >
      <div className={styles.section_wrapper}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            Fairness and <span>Objective</span>
          </h2>
          <CrossIcons3pc isOneShown={false} />
          <div className={styles.info_wrapper}>
            <p className={styles.info_top}>
              The INFIN’s data is an objective, flexible, dynamic, and real-time
              alternative to the limited and speculative information normally
              available to employers and individuals.
            </p>
            <p className={styles.info_bottom}>
              The old maxim of “knowledge is power” applies here for both
              employers and employees. Don’t let individual performance and
              recognition be lost in the cloud of office politics. The INFIN
              gives a voice to each individual and a fuller picture to the
              employer.
            </p>
          </div>
        </div>
        <div>
          <ReviewItem />
          <ReviewItem />
        </div>
      </div>
    </ArticleWrapper>
  );
};
