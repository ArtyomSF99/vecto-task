export const getDataYear = (dateString: string): number => {
  const dateObject = new Date(dateString);
  return dateObject.getFullYear();
};
