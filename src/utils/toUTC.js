export function toUTC(dateInput) {
  const date = new Date(dateInput); // Create a Date object from the input
  return date.toISOString(); // Convert to UTC string
}
