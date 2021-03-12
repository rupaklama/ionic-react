import dayjs from 'dayjs';

// to calculate biorhythm
export const calculateBiorhythm = (birthDate, targetDate) => {
  // to get time start of a day
  const birthDay = dayjs(birthDate).startOf('day');
  const targetDay = dayjs(targetDate).startOf('day');

  const diff = targetDay.diff(birthDay, 'days');

  return Math.sin((2 * Math.PI * diff) / 23);
};
