export const toTitleCase = (str) => {
  let string = str;
  if (!string) {
    string = "";
  }
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
