import Image from "next/image";
import { InfoWrapper } from "../../general/InfoWrapper/InfoWrapper";
import { ArticleWrapper } from "../../ArticleSection/ArticleWrapper/ArticleWrapper";
import { Button } from "../../general/Button";
import styles from "./Business.module.scss";

export const Business = () => {
  return (
    <ArticleWrapper bgColor="white" number="01" name="Business">
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.title}>
            The Insufficient Status Quo for Businesses
          </h2>
          <InfoWrapper title="For employers">
            <p className={styles.top_text}>
              It’s hard to evaluate individual contributions in a team
              environment because some employees are more visible. Similarly,
              some employees may take more credit than others. Meanwhile, the
              ones who are actually driving the company’s success may be flying
              completely under the radar. And then, employers have to decide on
              bonuses and promotions based on limited information and often with
              resentment from the employees. It’s frustrating.
            </p>
          </InfoWrapper>

          <InfoWrapper title="Use The INFIN’s insights to">
            <div className={styles.info_wrapper}>
              <div className={styles.text_info}>
                <p>
                  Determine the individual contribution and ROI of every
                  employee
                </p>
                <p>
                  Identify underperformers and better utilize employee strengths
                </p>
              </div>
              <div className={styles.text_info}>
                <p>Improve team dynamics and company culture </p>
                <p>
                  Invest with better alignment of ROI,labor spend, and business
                  objectives
                </p>
              </div>
            </div>
          </InfoWrapper>
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src="/images/Articles/officeWork.png"
            width={421}
            height={636}
            alt="people work"
            className={styles.img}
          />
          <div className={styles.button}>
            <Button bgColor="#FFCD00">THE INFIN FOR BUSINESs</Button>
          </div>
        </div>
      </div>
    </ArticleWrapper>
  );
};
