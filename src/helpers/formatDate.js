const formatDate = (stDate) => {
  const date = new Date(stDate);
  return !date
    ? "---"
    : `${date.getDay()} - ${date.getMonth()} - ${date.getFullYear()}`;
};

export default formatDate;
