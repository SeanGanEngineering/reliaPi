import * as math from "mathjs";

export const graph = (array: number[]): number[] => {
  const mean: number = calcMean(array);
  const std: number = calcSD(array);
  return array.map((value) => {
    const exponent: number = -((value - mean) ** 2) / (2 * std ** 2);
    const numerator: number = 1 / (std * Math.sqrt(2 * Math.PI));
    return numerator * math.exp(exponent);
  });
};

export const phi = (x: number): number => {
  return (1.0 + math.erf(x / Math.sqrt(2.0))) / 2.0;
};

export const calcMean = (array: number[]): number => {
  return math.mean(array);
};

export const calcSD = (array: number[]): number => {
  const mean: number = calcMean(array);
  let accumulator: number = 0;
  for (const value of array) {
    accumulator += Math.pow(mean - value, 2);
  }
  const sub: number = accumulator / (array.length - 1);

  return Math.sqrt(sub);
};

export const calcSixSigma_cp = (
  array: number[],
  usl: number,
  lsl: number,
): number => {
  const range: number = usl - lsl;
  const sd: number = calcSD(array);
  return range / (6 * sd);
};

export const calcZUpper = (usl: number, array: number[]): number => {
  const sd: number = calcSD(array);
  const mean: number = calcMean(array);
  return (usl - mean) / sd;
};

export const calcZLower = (lsl: number, array: number[]): number => {
  const sd: number = calcSD(array);
  const mean: number = calcMean(array);
  return (mean - lsl) / sd;
};

export const ppm = (array: number[], lsl: number, usl: number): number => {
  const zl: number = calcZLower(lsl, array);
  const zu: number = calcZUpper(usl, array);
  const range: number = 1 - phi(zl) + (1 - phi(zu)) * 1000000;
  return range;
};
