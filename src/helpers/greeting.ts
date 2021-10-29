export function greet(person: string, date: Date): string {
  return `Hello ${person}, today is ${date.toDateString()}!`;
}
