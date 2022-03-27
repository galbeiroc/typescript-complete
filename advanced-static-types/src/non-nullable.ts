function trimToLowerText(text: string | null | undefined) {
  if (typeof text === 'string') {
    return text.trim().toLowerCase();
  }
  return text
}

console.log(trimToLowerText(" Hello World exit "));
console.log(trimToLowerText(null));
console.log(trimToLowerText(undefined));
