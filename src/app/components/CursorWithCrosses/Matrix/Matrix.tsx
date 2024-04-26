import Image from "next/image";
import styles from "./Matrix.module.scss";

const NUMBER_OF_CROSSES = 6;

export const Matrix = ({ children }: { children: React.ReactNode }) => {
  const renderMatrix = () => {
    const matrix = [];

    for (let i = 0; i < NUMBER_OF_CROSSES; i++) {
      const row = [];
      for (let j = 0; j < NUMBER_OF_CROSSES; j++) {
        row.push(<Cross key={`${i}-${j}`} />);
      }
      matrix.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }

    return matrix;
  };

  return (
    <div>
      <div className={styles.matrix}>{renderMatrix()}</div>
      {children}
    </div>
  );
};

const Cross = () => {
  return (
    <div>
      <Image
        src="images/cross.svg"
        width={38.78}
        height={38.78}
        alt="cross icon"
      />
    </div>
  );
};
