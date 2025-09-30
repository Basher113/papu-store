export const truncateStr = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "..."; // Subtract 3 for "..."
}