const sortPredicate = (a: number, b: number) => a - b;

const range = (start: number, stop: number) => Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + (i));

export function getSum(a: number, b: number): number {
  const arr = [a, b].sort(sortPredicate);
  const items = range(arr[0], arr[1]);
  return items.reduce((acc, curr) => acc + curr, 0);
}