function getLastMonth(monthsToSubtract) {
  var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - monthsToSubtract);
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var oneMonthBeforeDate =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day;

  return oneMonthBeforeDate;
}

module.exports = {
  getLastMonth,
};
