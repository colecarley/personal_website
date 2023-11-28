export function formatDate(date: string): string {
  return new Date(parseInt(date))
    .toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .toLocaleLowerCase();
}
