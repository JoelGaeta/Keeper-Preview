import React from "react";
import "./EducationListItem.css";
import AppBoldText from "../AppBoldText";
import { toTitleCase } from "../../utils/toTitleCase";
import AppText from "../AppText";

const EducationListItem = ({ index, educationItem }) => {
  return (
    <div className="container" key={index}>
      <AppText style={{ margin: 2 }} className="numberText">
        {(educationItem?.startDate?.split("-")[0] || "Enter Date!") +
          " - " +
          (educationItem?.endDate?.split("-")[0] || "Enter Date!")}
      </AppText>
      <AppBoldText
        style={{ margin: 2 }}
        className="educationMajorText"
        numberOfLines={1}
      >
        {toTitleCase(educationItem?.major)}
      </AppBoldText>
      <AppText style={{ margin: 2 }} className="educationDegreeAndSchoolText">
        {educationItem?.degree}
        &nbsp; &#9679; &nbsp;
        {educationItem?.school}
      </AppText>
    </div>
  );
};
export default EducationListItem;
