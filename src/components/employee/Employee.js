/* eslint-disable no-undef */
import React, { useCallback, useState } from "react";
// import AntDesign from "react-native-vector-icons/AntDesign";
import AppBoldText from "../AppBoldText";
import AppParagraph from "../AppParagraph";
import KeeperImage from "../keeperimage/KeeperImage";
// import { TJobSettings } from "types";
import "./Employee.css";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { ArrowRight } from "react-feather";
// import { useStyles } from "./JobPostingComponentStyles";
// import { RootState, addLoggedInUser } from "reduxStore";
// import { useDispatch, useSelector } from "react-redux";
// import { UsersService } from "services";

// type JobPostingComponentProps = {
//   currentJobSettings: TJobSettings;
//   currentJobId?: string;
//   swipe?: (isRightSwipe: boolean, currentItemId: string) => void;
//   isOwner?: boolean;
// };

const Employee = ({ currentJobSettings, currentJobId, swipe, isOwner }) => {
  // const loggedInUserId = useSelector((state: RootState) => state.loggedInUser._id);
  // const accountType = useSelector((state: RootState) => state.loggedInUser.accountType);
  // const hasSeenDoubleTapTip = useSelector((state: RootState) => state.loggedInUser.hasSeenDoubleTapTip);
  // const isLoggedIn = useSelector((state: RootState) => state.loggedInUser.isLoggedIn);

  const [isDoubleTapModalOpen, setIsDoubleTapModalOpen] = useState(false);

  // const styles = useStyles();
  // const dispatch = useDispatch();

  const returnRequiredSkillsChips = (relevantSkills) => {
    const divStyle = {
      border: "1px solid black", // Add the border styles here
      borderRadius: "50px", // Optional: Add rounded corners to the border
      margin: 10,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: "white", // Optional: Add a background color
    };
    return relevantSkills.map((skill) => (
      // <Chip
      //   containerStyles={{ padding: 3 }}
      //   textStyles={{ fontSize: 10 }}
      //   name={skill}
      //   key={skill}
      // />

      <div style={divStyle}>
        <p style={{ textAlign: "center" }}>{skill}</p>
      </div>
    ));
  };

  const returnKeyResponsibilities = (responsibilities) => {
    return responsibilities.map((responsibility, index) => (
      <div className="responsibility" key={index}>
        {/* <div className="arrowContainer">
          <AntDesign name="arrowright" size={20} />
        </div> */}
        <div style={{ paddingRight: 5 }}>
          <ArrowRight size={20} />
        </div>
        <AppParagraph className="responsibilityText">
          {responsibility}
        </AppParagraph>
      </div>
    ));
  };

  const returnJobRequirements = (jobRequirements) => {
    return jobRequirements.map((requirement, index) => (
      <div className="responsibility" key={index}>
        {/* <div className="arrowContainer">
          <AntDesign name="arrowright" size={20} />
        </div> */}
        <div style={{ paddingRight: 5 }}>
          <ArrowRight size={20} />
        </div>
        <AppParagraph className="responsibilityText">
          {requirement}
        </AppParagraph>
      </div>
    ));
  };

  // const closeModal = useCallback(() => {
  //   dispatch(addLoggedInUser({ hasSeenDoubleTapTip: true }));
  //   UsersService.updateUserData({
  //     userId: loggedInUserId || '',
  //     accountType,
  //     updateObject: { hasSeenDoubleTapTip: true },
  //   });
  //   swipe(true, currentJobId);
  // }, []);

  const onKeepButtonPress = useCallback(() => {
    if (!hasSeenDoubleTapTip && isLoggedIn) {
      setIsDoubleTapModalOpen(true);
    } else {
      swipe(true, currentJobId);
    }
  }, []);

  const data = {
    settings: {
      title: "Senior Software Engineer",
      companyDescription:
        "At Autodesk, we’re building a diverse workplace and an inclusive culture to give more people the chance to imagine, design, and make a better world. Autodesk is proud to be an equal opportunity employer and considers all qualified applicants for employment without regard to race, color, religion, age, sex, sexual orientation, gender, gender identity, national origin, disability, veteran status, or any other legally protected characteristics. We also consider for employment all qualified applicants regardless or criminal histories, consistent with application law.",
      companyName: "Autodesk",
      jobOverview:
        "As part of the E-commerce Engineering team, you will be implementing exciting es features that engage and influence Autodesk customers worldwide. Our team faces a variety of unique and interesting challenges, from creating new tools and components, implementing critical services, creating new and engaging end-user experiences, to digging into low-level performance details and streamlining processes. ",
      compensation: {
        type: "Salary",
        payRange: {
          min: 109000,
          max: 188000,
        },
      },
      onSiteSchedule: "Remote",
      address: "Atlanta, GA",
      img: "https://keeper-image-upload-bucket.s3.amazonaws.com/d808bf6e-5618-4ee6-a7dd-2ff5b199ed3e.jpeg",
      relevantSkills: [
        "React",
        "Microservices",
        "CSS",
        "AWS",
        "Node",
        "Express",
        "Angular",
      ],
      responsibilities: [
        "Design, code, test, debug, and document new and existing components to ensure that software meets business, quality and operational needs",
        "Build high quality code following unit testing and test-driven development ",
        "Drive and participate in code and document reviews, mentoring team in best practices",
        "Collaborate with peer organizations , Devops, Support organizations in technical issues and provide guidance.",
        "Interpret and translate business needs to technical requirements and accurate estimates ",
        "Work with team to troubleshoot code level problems quickly and efficiently",
      ],
      jobRequirements: [
        "React expert: you are an expert in modern front end development using React, with deep knowledge of topics such as TypeScript, Redux, GraphQL, component architecture, Storybook, Jest, Cypress, etc",
        "String practical experience building micro services and micro front ends",
        "8+ years hands on experience developing scalable, customer facing applications",
        "Deep understanding of modern web applications design architecture, good API design patterns, performance, and scale, driving quality bar cross-functionality ",
      ],
      benefits: ["Dental", "Vision", "401k", "Health Care"],
      education: 1,
      requiredYearsOfExperience: 8,
      isPublic: false,
      referralBonus: 0,
    },
    preferences: {
      searchRadius: 65000,
      compensation: {
        type: "Salary",
        payRange: {
          min: 109000,
          max: 188000,
        },
      },
      address: "Atlanta, GA",
      relevantSkills: [
        "React",
        "Microservices",
        "CSS",
        "AWS",
        "Node",
        "Express",
        "Angular",
      ],
      yearsOfExperience: 8,
      isRemote: true,
      geoLocation: {
        type: "Point",
        coordinates: [-84.38768449999999, 33.748752],
      },
    },
    _id: "649c6bed05837ed04cf2a83b",
    color: "#acfcf2",
    expoPushToken: "ExponentPushToken[S1Rs5mAMZ7aBgWCbI-yNhz]",
    createdAt: "2023-06-28T17:20:43.533Z",
    matches: [],
    receivedLikes: [
      "64a5bb3f5672ab3867bdc217",
      "64a5bb3f5672ab3867bdc217",
      "64b9dd32e1fa44989b4068e2",
    ],
    geoLocation: {
      type: "Point",
      coordinates: [-84.38768449999999, 33.748752],
    },
    publicJobTakenCount: 0,
    publicTakers: [],
    __v: 3,
    ownerId: "64a5c3490313de42a6c8dba1",
  };

  return (
    <div className="mainContainer ">
      <div className="jobPostingContent">
        <div className="jobOverviewSection">
          <div className="logoAndTextSection">
            <div>
              <KeeperImage
                className="companyLogo"
                resizeMode="contain"
                source={{
                  uri: data.settings?.img,
                }}
              />
            </div>

            <AppBoldText className="jobTitleContainer">
              {data.settings?.title}
            </AppBoldText>
            <AppBoldText className="jobTitle">
              {data.settings?.companyName}
            </AppBoldText>
            <div>
              <AppBoldText className="isFullTimeText">
                {data.settings?.onSiteSchedule + " · " + data.settings?.address}
              </AppBoldText>
              <AppBoldText className="salaryOrHourlyText">
                {numberWithCommas(data.settings?.compensation?.payRange?.min)}k
                - {numberWithCommas(data.settings?.compensation?.payRange?.max)}
                k
              </AppBoldText>
            </div>

            {/* <AppBoldText className="onSiteScheduleText">
              {data.settings?.onSiteSchedule}
            </AppBoldText> */}

            <div className="requiredSkillsContainer">
              {returnRequiredSkillsChips(data.settings?.relevantSkills || [])}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <AppBoldText className="jobOverviewText">Job Overview</AppBoldText>
            <div>
              <AppParagraph style={{ marginBottom: 20, marginTop: 0 }}>
                {data.settings?.jobOverview}
              </AppParagraph>
            </div>
          </div>
        </div>
        <div>
          <AppBoldText className="jobOverviewText">
            Key Responsibilities
          </AppBoldText>
          {returnKeyResponsibilities(data.settings?.responsibilities || [])}
        </div>
        <div className="whoWeAreSection">
          <AppBoldText className="jobOverviewText">Who We Are</AppBoldText>
          <AppParagraph style={{ marginBottom: 0, marginTop: 0 }}>
            {data.settings?.companyDescription}
          </AppParagraph>
          <AppBoldText style={{ marginBottom: 0 }} className="jobOverviewText">
            Benefits
          </AppBoldText>
          <div className="skillsSection">
            <div className="skillsListSection">
              {data.settings?.benefits?.map((benefit, i) => (
                <div key={i} className="skillContainer">
                  <AppParagraph className="skillText">{benefit}</AppParagraph>
                  <AppParagraph
                    className={
                      i === data.settings?.benefits?.length - 1
                        ? "hidden"
                        : "bulletPoint"
                    }
                  ></AppParagraph>
                </div>
              ))}
            </div>
          </div>
          {/* <AppBoldText className=[styles.jobOverviewText, styles.perksText]}>PTO</AppBoldText>
        <AppText>20 Days</AppText> */}
          {/* <AppBoldText className=[styles.jobOverviewText, styles.perksText]}>Perks</AppBoldText>
        <AppText>20 Days</AppText> */}
        </div>
        <div>
          <AppBoldText className="jobOverviewText">Requirements</AppBoldText>
          {returnJobRequirements(data.settings?.jobRequirements || [])}
        </div>
        {/* {!isOwner && (
        <KeeperSelectButton
          buttonStyles={styles.keepButton}
          textStyles={styles.keepButtonText}
          onPress={onKeepButtonPress}
          // title={`Like ${currentJobSettings.title}`}
          title='Like This Job'
        />
      )} */}
      </div>
    </div>
  );
};

export default Employee;
