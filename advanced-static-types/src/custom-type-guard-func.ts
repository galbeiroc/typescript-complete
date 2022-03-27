const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]]

function flatten(array: (number | number[])[]): number[] {
  const flattened: number[] = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

console.log(flatten(numbers));

// Define custom type with generic
function flattenGenericType<T>(array: (T | T[])[]): T[] {
  const flattened: T[] = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

function isFlat<T>(array: (T | T[]) []): array is T[] {
  return !array.some(Array.isArray);
}

if (isFlat(numbers)) {
  console.log(numbers);
}