import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({ applyColor, styles }) => {
  const [background, setBackground] = useState(styles.background);
  const handleBoxClick = () => {
    applyColor(setBackground);
  };
  return (
    <>
      <div className="fix-box" style={{ background: background.background }} onClick={handleBoxClick}>
        Selection
      </div>
    </>
  );
};
export default Selection;
