import styles from "./WhyChooseTheInfin.module.scss";
import { InfoWrapper } from "../general/InfoWrapper/InfoWrapper";
import { CrossIcons3pc } from "../general/CrossIcons3pc/CrossIcons3pc";

export const WhyChooseTheInfin = () => {
  return (
    <section className={`${styles.section} container`}>
      <div>
        <h2 className={styles.title}>Why choose the INFIN</h2>
        <CrossIcons3pc />
      </div>
      <div>
        <InfoWrapper title="The old way" img="/images/peopleWork.png">
          Workers compete with their peers for recognition from bosses who also
          don’t like this dynamic.
        </InfoWrapper>
        <InfoWrapper title="The INFIN way" img="/images/peopleWeekends.png">
          Colleagues dynamically observe and rank each other’s contributions in
          a confidential, anonymous manner. The INFIN then calculates ownable,
          individual value and automatically distributes peer-reviewed
          recognition and rewards (while giving execs a clear picture of
          individual ROI).
        </InfoWrapper>
      </div>
    </section>
  );
};
