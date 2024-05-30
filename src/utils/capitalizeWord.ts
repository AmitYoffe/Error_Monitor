export function capitalizeWord(str: string) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .toLowerCase()
    .split(/\s|-/)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
