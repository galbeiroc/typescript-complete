/**
 * Reverses the given string
 * @param string 
 */
function reverse(string: string): string;
/**
 * Reverses the given array
 * @param array 
 */
function reverse<T>(array: T[]): T[];
/**
 * Reverses the given string or array
 * @param stringOrArray the string or arry reverse
 */
function reverse(stringOrArray: string | any[]) {
  return typeof stringOrArray === 'string'
    ? [...stringOrArray].reverse().join("")
    : stringOrArray.slice().reverse();
}

const reverseString = reverse("TypeScript");
const reverseArray = reverse([4, 8, 15, 20, 58]);

console.log(reverseArray);
console.log(reverseString);