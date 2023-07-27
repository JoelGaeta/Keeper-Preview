import React from "react";

const AppBoldText = ({ children, numberOfLines, style, className }) => {
  const combinedStyle = {
    fontfamily: "app-bold-font",
    fontWeight: "bold",
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

export default AppBoldText;
