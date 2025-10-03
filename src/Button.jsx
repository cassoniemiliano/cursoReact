import React from "react";

function Button({ labelButton, styles, className }) {
  return (
    <button style={styles} className={className}>
      {labelButton}
    </button>
  );
}

export default Button;
