export const validateSubject = (subject) => {
  return subject.length >= 3 && subject.length <= 100;
};
