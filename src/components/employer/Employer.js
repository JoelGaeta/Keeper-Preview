import React, { memo, useCallback, useEffect, useState } from "react";
// import Icon from "react-native-vector-icons/Feather";
// import Entypo from "react-native-vector-icons/Entypo";
// import axios from "axios";
// import { TEmployeeEducation, TEmployeePastJob, TEmployeeSettings } from "types";
// import { toTitleCase } from "utils";
// import AppText from "../AppText";
import AppBoldText from "../AppBoldText";
import PastJobItem from "../pastjobitem/PastJobItem";
import AppParagraph from "../AppParagraph";
import KeeperImage from "../keeperimage/KeeperImage";
import EducationListItem from "../educationlistitem/EducationListItem";
import { toTitleCase } from "../../utils/toTitleCase";
import { numberWithCommas } from "../../utils/numberWithCommas";
// import { useReorderJobHistory } from "hooks";
import "./Employer.css";

// import { useStyles } from "./ResumeComponentStyles";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, addLoggedInUser } from "reduxStore";
// import { UsersService } from "services";

// type ResumeComponentProps = {
//   currentEmployeeSettings: TEmployeeSettings,
//   currentEmployeeId?: string,
//   swipe?: (isRightSwipe: boolean, currentItemId: string) => void,
//   isOwner?: boolean,
//   jobColor?: string,
// };

// this is the reusable component that is in both ViewResume and
// Resume files it contains the shared logic and html between them
const ResumeComponent = ({
  currentEmployeeSettings,
  currentEmployeeId,
  swipe,
  // isOwner means this is a logged in employee viewing their own resume
  isOwner,
  jobColor,
}) => {
  // const loggedInUserId = useSelector((state: RootState) => state.loggedInUser._id);
  // const accountType = useSelector((state: RootState) => state.loggedInUser.accountType);
  // const hasSeenDoubleTapTip = useSelector((state: RootState) => state.loggedInUser.hasSeenDoubleTapTip);
  // const isLoggedIn = useSelector((state: RootState) => state.loggedInUser.isLoggedIn);

  // const [isDoubleTapModalOpen, setIsDoubleTapModalOpen] = useState(false);

  // const styles = useStyles(jobColor, isOwner, currentEmployeeSettings.isSeekingFirstJob);
  // const { reorderedJobHistory } = useReorderJobHistory(
  //   currentEmployeeSettings?.jobHistory
  // );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://mzl4y00fba.execute-api.us-east-1.amazonaws.com/dev/getEmployee"
  //       );
  //       console.log("Response data:", response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const data = {
    settings: {
      compensation: {
        typesOpenTo: ["Salary"],
        targetHourly: 50,
        targetSalary: 140000,
      },
      address: "Atlanta, GA",
      firstName: "Anakin",
      lastName: "Skywalker",
      img: "http://img4.wikia.nocookie.net/__cb20130711173954/jadensadventures/images/6/6f/Anakin_Skywalker_RotS.png",
      aboutMeText:
        "I am a passionate and experienced full stack developer with a strong background in creating innovative and efficient web applications. With a deep understanding of both front-end and back-end technologies, I thrive in the dynamic and constantly evolving world of software development.\nFrom a young age, I have been fascinated by technology and its potential to solve complex problems. This curiosity led me to pursue a degree in Computer Science, where I gained a solid foundation in programming languages, data structures, algorithms, and software engineering principles. Since then, I have continuously honed my skills and stayed up-to-date with the latest trends and advancements in the field.",
      jobTitle: "Fullstack Developer",
      educationHistory: [
        {
          uuid: "d4c0f3db-f0d5-487b-a36e-9d279014f7a3",
          school: "University of Georgia ",
          major: "Computer Science",
          startDate: "2011-01-01",
          endDate: "2015-01-01",
          degree: "Bachelor's",
        },
      ],
      jobHistory: [
        {
          uuid: "010815f3-cfa9-47d7-9700-ade3b6431a32",
          jobTitle: "Frontend Developer",
          company: "Target",
          startDate: "2015-06-01",
          endDate: "2020-02-01",
          jobDescription:
            "At Target, I worked on the internal software that helps the account team track inventory. The software allowed users to look at a store’s inventory and make sales forecasts, as well as track what had been selling best. We wrote this code in React, Typescript, and also built a native app with react native",
        },
        {
          uuid: "419e68e4-b5df-43d6-a306-2410c01d5b40",
          jobTitle: "Fullstack Developer",
          company: "Spotify",
          startDate: "2020-07-01",
          endDate: "2023-05-01",
          jobDescription:
            "At Spotify, I worked in both front end and backend building their native application. We used .NET on the backend and React/ Typescript on the frontend",
        },
      ],
      relevantSkills: [
        ".NET",
        "AWS",
        "C#",
        "Java",
        "React",
        "React Native",
        "Redux",
        "SQL",
        "Svelte",
        "Vue",
        "Typescript",
        "CSS",
      ],
      yearsOfExperience: 8,
      isUsCitizen: true,
      onSiteOptionsOpenTo: ["Hybrid", "Office", "Remote"],
      isSeekingFirstJob: null,
    },
    preferences: {
      compensation: {
        typesOpenTo: ["Salary"],
        targetHourly: 50,
        targetSalary: 140000,
      },
      searchRadius: 65000,
      requiredYearsOfExperience: 8,
      address: "Atlanta, GA",
      geoLocation: {
        type: "Point",
        coordinates: [-84.38768449999999, 33.748752],
      },
      isNew: false,
      relevantSkills: [
        ".NET",
        "AWS",
        "C#",
        "Java",
        "React",
        "React Native",
        "Redux",
        "SQL",
        "Svelte",
        "Vue",
        "Typescript",
        "CSS",
      ],
      isRemote: true,
    },
    _id: "64a2fe2f6e4c00fbdc925889",
    phoneNumber: "+17708202074",
    accountType: "employee",
    createdAt: "2023-07-03T16:58:23.016Z",
    expoPushToken: "ExponentPushToken[S1Rs5mAMZ7aBgWCbI-yNhz]",
    matches: [],
    receivedLikes: [
      "649f2ee51183520399ef9248",
      "649f2ee51183520399ef9248",
      "649c6bed05837ed04cf2a83b",
      "649c6bed05837ed04cf2a83b",
    ],
    geoLocation: null,
    education: 0,
    hasSeenDoubleTapTip: false,
    __v: 4,
  };
  const returnProfilePicture = useCallback(() => {
    return (
      <KeeperImage
        className="profilePicture"
        source={{
          uri: data.settings.img,
        }}
      />
    );
  }, []);

  // const addNewPastJobRedux = () => {
  //   dispatch(updateResumeData({ jobHistory: [...jobHistory, blankPastJob] }));
  //   UsersService.updateUserSettings({
  //     userId: loggedInUserId,
  //     accountType,
  //     newSettings: { jobHistory: [...jobHistory, blankPastJob] },
  //   });
  // };

  // const returnJobSkillsChips = (jobSkills: string[]) => {
  //   return jobSkills.map((skill: string) => (
  //     <Chip containerStyles={{ padding: 3 }} textStyles={{ fontSize: 10 }} name={skill} key={skill} />
  //   ));
  // };

  const borderInbetween = (arrayLength, index) => {
    if (arrayLength === 1) {
      return {};
    } else {
      return arrayLength - 1 === index ? {} : { borderBottomWidth: 1 };
    }
  };

  // const closeModal = useCallback(() => {
  //   dispatch(addLoggedInUser({ hasSeenDoubleTapTip: true }));
  //   UsersService.updateUserData({
  //     userId: loggedInUserId || '',
  //     accountType,
  //     updateObject: { hasSeenDoubleTapTip: true },
  //   });
  //   if (swipe) {
  //     swipe(true, currentEmployeeId || '');
  //   }
  // }, []);

  // const onKeepButtonPress = useCallback(() => {
  //   if (!hasSeenDoubleTapTip && isLoggedIn) {
  //     setIsDoubleTapModalOpen(true);
  //   } else {
  //     if (swipe) {
  //       swipe(true, currentEmployeeId || "");
  //     }
  //   }
  // }, []);

  return (
    <div className="mainContainer">
      <div className="resumeComponentContainer">
        {returnProfilePicture()}
        <div className="nameJobAndAboutMeSection">
          <div className="nameAndJobTitleSection">
            <div className="nameContainer">
              <AppBoldText className="name">
                {data.settings.firstName}
              </AppBoldText>
              <AppBoldText className="name">
                {data.settings.lastName}
              </AppBoldText>
            </div>
            <div className="bottomDetailsSection">
              <AppBoldText className="position">
                {toTitleCase(data.settings.jobTitle || "")}
              </AppBoldText>

              <AppBoldText className="onSiteOptionsOpenTo">
                {data.settings.onSiteOptionsOpenTo?.join(" / ")}
              </AppBoldText>

              {/* <Entypo name="location-pin" size={24} /> */}
              <AppBoldText className="address">
                {toTitleCase(data.settings.address || "")}
              </AppBoldText>
            </div>
            {/* <AppBoldText className="jobTitle">{data.address}</AppBoldText>
          <AppBoldText className="jobTitle">{data.jobTitle}</AppBoldText>
          <AppBoldText className="jobTitle">{data.email}</AppBoldText> */}
          </div>
        </div>
        <div className="experienceDetailsSection">
          {!data.settings.isSeekingFirstJob && (
            <>
              <div className="jobHistoryTitleSection">
                <AppBoldText className="jobHistoryTitle">
                  Job History
                </AppBoldText>
              </div>

              {data.settings.jobHistory.map((job, index) => (
                <div className="jobHistoryButton">
                  <PastJobItem job={job} index={index} key={index} />
                </div>
              ))}
            </>
          )}

          <div className="skillsSection">
            <AppBoldText className="skillsTitle">Skills</AppBoldText>
            <div className="skillsContainer">
              {data.settings.relevantSkills?.map((skill, i) => (
                <div key={i} className="skillContainer">
                  <AppParagraph className="skillText">{skill}</AppParagraph>
                  <AppParagraph
                    className={
                      i === data.settings.relevantSkills?.length - 1
                        ? "hidden"
                        : "bulletPoint"
                    }
                  ></AppParagraph>
                </div>
              ))}
            </div>
          </div>
          <div className="educationSection">
            <AppBoldText className="educationTitle">Education</AppBoldText>
            {data.settings.educationHistory?.map((educationItem, index) => {
              return (
                <div
                  className="educationContainer"
                  key={index}
                  // className={[
                  //   { paddingVertical: 10 },
                  //   borderInbetween(
                  //     data.settings.educationHistory?.length,
                  //     index
                  //   ),
                  // ]}
                >
                  <EducationListItem
                    educationItem={educationItem}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="aboutMeSection">
          <AppParagraph>{data.settings.aboutMeText}</AppParagraph>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
