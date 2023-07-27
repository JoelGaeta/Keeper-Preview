export const transformMonthToString = (month) => {
  let monthValue = month;
  if (!monthValue) {
    monthValue = "";
  }
  switch (monthValue) {
    case "01":
      return "January";
    case "02":
      return "February";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "August";
    case "09":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";

    case "January":
      return "01";
    case "February":
      return "02";
    case "March":
      return "03";
    case "April":
      return "04";
    case "May":
      return "05";
    case "June":
      return "06";
    case "July":
      return "07";
    case "August":
      return "08";
    case "August":
      return "09";
    case "October":
      return "10";
    case "November":
      return "11";
    case "December":
      return "12";
    default:
      return "Enter Date!";
  }
};

export const transformDateToText = (textDate) => {
  let dateString = textDate;
  if (!dateString) {
    dateString = "";
  }
  const stringArray = textDate.split("-");

  return `${transformMonthToString(stringArray[1])}, ${stringArray[0]}`;
};
