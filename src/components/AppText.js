import React from "react";

const AppText = ({ children, numberOfLines, style, className }) => {
  const combinedStyle = {
    ...style,
  };
  return (
    <p
      numberOfLines={numberOfLines}
      style={combinedStyle}
      className={className}
    >
      {children}
    </p>
  );
};

export default AppText;
