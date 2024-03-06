export function cn(...classNames: Array<string | number | null | undefined>) {
  return classNames.reduce((p, n) => {
    if (!n) return p;
    if (!p) return n;
    return p + " " + n;
  }, "") as string;
}
