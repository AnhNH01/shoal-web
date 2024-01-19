export const mockAsync = async (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(0);
    }, ms);
  });
};
