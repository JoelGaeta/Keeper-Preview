import AppText from "../AppText";
import React, { CSSProperties, useCallback } from "react";
// import { Text, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// import { useStyles } from './ChipStyles';

// type ChipProps = {
//   name: string;
//   onSelectChip?: (selectedChipName: string) => void;
//   containerStyles?: any;
//   textStyles?: any;
// };

const Chip = (props) => {
  const { name, onSelectChip, containerStyles, textStyles } = props;
  //   const styles = useStyles();

  const onPressChip = useCallback(() => {
    onSelectChip(name);
  }, [name, onSelectChip]);

  if (onSelectChip) {
    return (
      <button className="chip" style={containerStyles} onPress={onPressChip}>
        <AppText className="chipText" style={textStyles}>
          {name}
        </AppText>
      </button>
    );
  } else {
    return (
      <div className="chip" style={containerStyles}>
        <AppText className="chipText" style={textStyles}>
          {name}
        </AppText>
      </div>
    );
  }
};

export default Chip;
