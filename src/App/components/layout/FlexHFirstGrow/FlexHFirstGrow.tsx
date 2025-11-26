import React from "react";
import styles from "./FlexHFirstGrow.module.css";

interface FlexHFirstGrowProps {
  children: Array<string | React.ReactElement> | string | React.ReactElement;
}

const FlexHFirstGrow: React.FC<FlexHFirstGrowProps> = ({ children }) => {
  return (
    <div className={styles.FlexHFirstGrow} data-testid="FlexHFirstGrow">
      {children}
    </div>
  );
};

export default FlexHFirstGrow;
