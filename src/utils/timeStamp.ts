export const getTimeStamp = (
  duration = 0,
  span: "day" | "hour" | "minute" | "second" = "minute"
): number => {
  const today = new Date();
  const exp = new Date(today);
  switch (span) {
    case "day":
      exp.setDate(today.getDate() + duration);
      break;
    case "hour":
      exp.setHours(today.getHours() + duration);
      break;
    case "minute":
      exp.setMinutes(today.getMinutes() + duration);
      break;
    case "second":
      exp.setSeconds(today.getSeconds() + duration);
      break;
  }
  return exp.getTime();
};