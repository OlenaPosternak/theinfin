import { Cross } from "../../Icons/Cross";
import styles from "./CrossIcons3pc.module.scss";

export const CrossIcons3pc = ({
  isOneShown = true,
}: {
  isOneShown?: boolean;
}) => {
  return (
    <div className={styles.cross_wrapper}>
      {isOneShown && <Cross className={styles.cross} />}
      <div className={styles.cross_row}>
        <Cross className={styles.cross} />
        <Cross className={styles.cross} />
        <Cross className={styles.cross} />
      </div>
    </div>
  );
};
