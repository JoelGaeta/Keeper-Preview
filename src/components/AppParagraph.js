import React from "react";

const AppParagraph = (props) => {
  const combinedStyles = {
    fontFamily: "app-default-font",
    fontSize: 15,
    textAlign: "justify",
    ...props.style, // Include any additional styles passed via props
  };
  return (
    <p style={combinedStyles} className={props.className}>
      {props.children}
    </p>
  );
};

export default AppParagraph;
