export const likes = (a: string[]): string => {
  let response = 'no one';
  if (a.length > 0 && a.length < 3) {
    response = `${a.join(' and ')}`;
  } else if (a.length === 3) {
    response = `${a.slice(0, 2).join(', ')} and ${a.slice(2)}`;
  } else if (a.length > 3) {
    response = `${a.slice(0, 2).join(', ')} and ${a.slice(2).length} others`;
  }

  return `${response} ${a.length > 1 ? 'like' : 'likes'} this`;
}