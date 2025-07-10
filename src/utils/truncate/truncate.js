export const truncateStr = (str) => {
  const maxLength = 60;
  if (str.length <= maxLength) {
    return str;
  }
  console.log(str.slice(0, maxLength - 3))
  return str.slice(0, maxLength) + "..."; // Subtract 3 for "..."
}