export const getRandomItemsFromArray = <T>(array: T[], count?: number): T[] => {
  let limit = count;
  if (!limit) {
    limit = array.length;
  }

  return array.sort(() => 0.5 - Math.random()).slice(0, limit);
};
