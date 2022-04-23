export function findNb(m: number): number {
  let tempM = Math.cbrt(m)
  let counter = 0;
  for (let i = 0; i <= tempM; i++) {
    counter += Math.pow(i, 3);
    if (counter === m) {
      return i;
    }
  }
  return -1;
}