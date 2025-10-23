import React from "react";

function Button({ labelButton, styles, className, handleChange }) {
  return (
    <button style={styles} className={className} onClick={handleChange}>
      {labelButton}
    </button>
  );
}

export default Button;
