export const sum = (a: number, b: number) => {
  return a + b;
};

export const delay = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));
