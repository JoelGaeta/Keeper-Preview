// import { FontAwesome } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppBoldText from "../AppBoldText";
import AppParagraph from "../AppParagraph";
import AppText from "../AppText";
import React, { useCallback, useState } from "react";
import "./PastJobItem.css";
import useFormCounter from "../../hooks/useFormCounter";
import { transformDateToText } from "../../utils/transformDateToText";
import { ChevronDown, ChevronUp } from "react-feather";
const PastJobItem = ({ onClick, job, index }) => {
  const [activeAccordions, setActiveAccordions] = useState([]);

  const { isObjectFieldCompleted } = useFormCounter();

  const onAccordionClick = useCallback(
    (i) => {
      // if already been clicked, remove from array else, add it in
      if (activeAccordions.includes(i)) {
        const index = activeAccordions.indexOf(i);
        if (index > -1) {
          const activeAccordionsCopy = activeAccordions;
          activeAccordionsCopy.splice(index, 1);
          setActiveAccordions([...activeAccordionsCopy]);
        }
      } else {
        setActiveAccordions([...activeAccordions, i]);
      }
    },
    [activeAccordions]
  );

  const returnIcon = () => {
    // isObjectFieldCompleted

    return activeAccordions?.includes(index) ? <ChevronUp /> : <ChevronDown />;
  };
  return (
    <button
      className="container"
      key={index}
      onClick={() => (onClick ? onClick(index) : onAccordionClick(index))}
    >
      {/* <button
            className="angleDownIcon"
            color="black"
            name={returnIcon()}
            size={30}
          /> */}
      {/* <AppBoldText style={styles.numberText}>{`0${index + 1}`}</AppBoldText> */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <AppBoldText
          numberOfLines={1}
          style={{ fontSize: 20, fontWeight: "bold", marginBottom: 0 }}
          className="jobTitleText"
        >
          {job?.jobTitle}
        </AppBoldText>
        {returnIcon()}
      </div>

      <AppBoldText
        style={{ fontWeight: "bold", marginBottom: 0 }}
        className="companyText"
      >
        at {job?.company}
      </AppBoldText>

      <AppText className="jobMonthsText">
        {transformDateToText(job?.startDate || "") +
          " - " +
          transformDateToText(job?.endDate || "")}
      </AppText>
      {/* <div style={styles.jobSkillsContainer}>{returnJobSkillsChips(job?.jobSkills || [])}</div> */}
      <AppParagraph
        className={
          activeAccordions.includes(index) ? "jobDetailsOpened" : "hidden"
        }
      >
        {job?.jobDescription}
      </AppParagraph>
    </button>
  );
};
export default PastJobItem;
