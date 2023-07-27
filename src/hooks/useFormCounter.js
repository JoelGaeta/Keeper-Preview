import { useEffect, useState } from "react";

// this holds the logic for counting how much of the form the user has left to complete
// that shows in the right side of the header, like on the editEmployee screen
const useFormCounter = (formState) => {
  const [totalCompletedFields, setTotalCompletedFields] = useState(0);

  useEffect(() => {
    updateTotalCompletedFields();
  }, [formState]);

  const isObjectFieldCompleted = (object) => {
    const totalFieldsLength = Object.keys(object).length;
    let totalCompletedFields = 0;
    Object.values(object).forEach((item) => {
      if (item) {
        totalCompletedFields++;
      }
    });
    if (totalCompletedFields === totalFieldsLength) {
      return "completed";
    } else if (totalCompletedFields > 0) {
      return "partially completed";
    } else {
      return "not completed";
    }
  };

  // could be educationHistory or jobHistory
  const isArrayOfObjectsFieldCompleted = (jobHistory) => {
    if (!jobHistory) {
      return jobHistory;
    }

    const totalJobsLength = Object.keys(jobHistory).length;
    let totalCompletedJobs = 0;
    let totalPartialJobs = 0;

    jobHistory.forEach((pastJob) => {
      const isObjectFinishedString = isObjectFieldCompleted(pastJob);

      if (isObjectFinishedString == "completed") {
        totalCompletedJobs++;
      } else if (isObjectFinishedString == "partially completed") {
        totalPartialJobs++;
      }
    });

    // any truthy value other than 'exclamation' returned would make it a checkmark,
    // any falsy value will make it a caret symbol
    if (totalJobsLength === totalCompletedJobs) {
      return true;
    } else if (totalPartialJobs > 0) {
      return "exclamation";
    } else {
      return false;
    }
  };

  const updateTotalCompletedFields = async () => {
    const tempFormState = { ...formState };
    delete tempFormState.uuid;
    delete tempFormState.id;
    delete tempFormState._id;
    let finishedFieldCount = 0;
    // if its an array of objects, then it needs to check if every field inside of it is completed
    Object.entries(tempFormState).map(([key, value]) => {
      if (key === "jobHistory" && formState.isSeekingFirstJob) {
        finishedFieldCount++;
      } else if (
        Array.isArray(value) &&
        value.length > 0 &&
        typeof value[0] === "object" &&
        isArrayOfObjectsFieldCompleted(value) &&
        isArrayOfObjectsFieldCompleted(value) != "exclamation"
      ) {
        finishedFieldCount++;
      }
      // check if non empty array that is not an array of objects
      else if (
        Array.isArray(value) &&
        value.length > 0 &&
        typeof value[0] != "object"
      ) {
        finishedFieldCount++;
        // check if non empty object
      } else if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        value != null &&
        Object.keys(value).length === 0
      ) {
        finishedFieldCount++;
        // any number will work
      } else if (
        (key === "startDate" || key === "endDate") &&
        value != "" &&
        typeof value == "string"
      ) {
        const dateArray = value?.split("-");
        // make sure whole date is filled out
        if (dateArray[0] != "0000" && dateArray[1] != "00") {
          finishedFieldCount++;
        }
      } else if (typeof value === "number") {
        finishedFieldCount++;
        // special check for compensation
      } else if (value?.typesOpenTo?.length) {
        finishedFieldCount++;
        // any non empty string
      } else if (
        key === "degree" &&
        value != "Enter Degree" &&
        value != "None" &&
        value != ""
      ) {
        finishedFieldCount++;
      } else if (typeof value === "string" && value != "") {
        finishedFieldCount++;
      } else if (typeof value === "boolean") {
        finishedFieldCount++;
      }
    });
    setTotalCompletedFields(finishedFieldCount);
  };

  return {
    totalCompletedFields,
    isArrayOfObjectsFieldCompleted,
    isObjectFieldCompleted,
  };
};

export default useFormCounter;
