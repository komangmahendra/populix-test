export const convertTimeToHoursFormat = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return {
    h: hours,
    m: minutes,
  };
};
