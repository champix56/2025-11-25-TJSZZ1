import React from "react";
import styles from "./FlexW3rdGrow.module.css";

interface FlexW3rdGrowProps {
  children: Array<string | React.ReactElement> | string | React.ReactElement;
}

const FlexW3rdGrow: React.FC<FlexW3rdGrowProps> = ({ children }) => {
  return (
    <div className={styles.FlexW3rdGrow} data-testid="FlexW3rdGrow">
      {children}
    </div>
  );
};

export default FlexW3rdGrow;
