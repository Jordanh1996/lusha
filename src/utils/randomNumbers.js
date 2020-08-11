export const generateRandomNumbers = (min, max, count) => {
  const nums = new Set();
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * max) + min);
  }

  return Array.from(nums);
};
