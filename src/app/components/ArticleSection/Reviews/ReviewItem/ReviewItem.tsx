import Image from "next/image";
import styles from "./ReviewItem.module.scss";

export const ReviewItem = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        “[The INFIN] immediately identified the healthy and high performing
        teams, comfortable with task conflict, versus the dysfunctional and
        ineffective teams unable to withstand constructive feedback. Healthy and
        high performing teams were able to eliminate ambiguity and subjectivity
        in recognizing and rewarding each other`s contributions. The INFIN
        provided us with a transparent and fair system for acknowledging the
        hard work and dedication of our colleagues and a way to willingly
        discuss weaknesses as individuals and as a team.”
      </p>
      <div className={styles.user}>
        <Image
          src="/images/Articles/userPhoto.png"
          width={52}
          height={52}
          alt="user image"
          className={styles.img}
        />
        <div className={styles.person_info}>
          <p className={styles.name}>name</p>
          <p className={styles.position}>position</p>
        </div>
      </div>
    </div>
  );
};
