import React from "react";

import { ActivityIndicator } from "react-native";

import { AppBoldText } from "components";

import { useStyles } from "./KeeperSelectButtonStyles";

const KeeperSelectButton = ({
  onPress,
  selected,
  key,
  title,
  buttonStyles,
  textStyles,
  buttonColor,
  isBig,
  isLoading,
  disabled,
}) => {
  const styles = useStyles(buttonColor || "", isBig || false);

  return (
    <button
      key={key || 0}
      onPress={() => onPress(key || title)}
      disabled={disabled}
      className={[
        selected ? "benefitsButtonsPressed" : "benefitButtons",
        buttonStyles,
      ]}
    >
      <AppBoldText
        style={[
          "buttonText",
          textStyles,
          title.length > 15 ? "smallButtonText" : "",
        ]}
      >
        {isLoading ? <ActivityIndicator color="black" size="small" /> : title}
      </AppBoldText>
      {/* <AntDesign name='heart' size={20} /> */}
    </button>
  );
};

export default KeeperSelectButton;
