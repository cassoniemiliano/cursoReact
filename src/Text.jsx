import React from "react";

function Text({ title, styles }) {
  return (
    <>
      <span style={styles}>{title}</span>
    </>
  );
}

export default Text;
