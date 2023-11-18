export const formatDuration = (durationInSeconds: number): string => {
  const minutes = Math.floor((durationInSeconds / 60) % 60);
  const hours = Math.floor(durationInSeconds / 3600);

  return `${hours}h ${minutes}m`;
};
