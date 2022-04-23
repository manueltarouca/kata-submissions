export function findOutlier(integers: number[]): number {
  const even = integers.filter(int => int % 2 === 0);
  const odd = integers.filter(int => !even.includes(int));
  return (even.length === 1 ? even[0] : odd[0]);
}