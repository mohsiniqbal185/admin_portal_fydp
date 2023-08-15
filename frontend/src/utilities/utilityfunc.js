export function convertDate(inputDate) {
  const input = new Date(inputDate);
  const options = { day: "numeric", month: "long", year: "numeric" };

  return input.toLocaleDateString("en-US", options);
}
