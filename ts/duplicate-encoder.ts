interface LetterMeta {
  value: string;
  dupe: boolean;
}

export function duplicateEncode(word: string) {
  const letters: LetterMeta[] = [];
  Array.from(word.toLowerCase()).forEach((letter, index) => {
    const storedLetter = letters.filter(item => item.value === letter);
    if (!storedLetter.length) {
      letters.push({ value: letter, dupe: false });
    } else {
      storedLetter.map(l => l.dupe = true);
      letters.push({ value: letter, dupe: true });
    }
  });
  const result = letters.map(item => item.dupe ? ')' : '(');
  return result.join('');
}