import Image from "next/image";
import styles from "./WhyChooseTheInfin.module.scss";

export const WhyChooseTheInfin = () => {
  return (
    <section className={`${styles.section} container`}>
      <h2 className={styles.title}>Why choose the INFIN</h2>
      <div>
        <div className={styles.info}>
          <div className={styles.text_wrapper}>
            <p className={styles.text_title}>The old way</p>
            <p className={styles.text_info}>
              Workers compete with their peers for recognition from bosses who
              also don’t like this dynamic.
            </p>
          </div>
          <Image
            src="/images/webApp.png"
            width={223}
            height={223}
            alt="the old way img"
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.text_wrapper}>
            <p className={styles.text_title}>The INFIN way</p>
            <p className={styles.text_info}>
              Colleagues dynamically observe and rank each other’s contributions
              in a confidential, anonymous manner. The INFIN then calculates
              ownable, individual value and automatically distributes
              peer-reviewed recognition and rewards (while giving execs a clear
              picture of individual ROI).
            </p>
          </div>
          <Image
            src="/images/webApp.png"
            width={223}
            height={223}
            alt="the INFIN way img"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
};
