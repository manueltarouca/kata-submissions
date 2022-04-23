export function order(words: string): string {
  if (!words.length) {
    return '';
  }
  const wordsMap: Map<number, string> = new Map();
  const wordsArr = words.split(' ').forEach(word => {
    for (let letter of word) {
      const index = Number(letter);
      if (!isNaN(index)) {
        wordsMap.set(index, word);
      }
    }
  });
  const sortedMap = new Map([...wordsMap.entries()].sort());
  return [...sortedMap.values()].join(' ');
}