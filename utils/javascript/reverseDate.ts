const reverseDate = (date: string) => {
  if (!date) {
    return "";
  }

  return date.split("-").reverse().join("-");
};

export default reverseDate;
