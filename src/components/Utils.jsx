export const getDate = (date) => {
  try {
    let value = new Date(date);
    let yearValue = value.getFullYear();
    let monthValue = value.getMonth() + 1;
    monthValue = monthValue < 10 ? "0" + monthValue : monthValue;
    let dateValue = value.getDate();
    dateValue = dateValue < 10 ? "0" + dateValue : dateValue;
    return `${yearValue}-${monthValue}-${dateValue}`;
  } catch {
    throw new Error("MyCustomError: Invalid date value was passed");
  }
};
