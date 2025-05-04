export function humanizeString(str: string): string {
  if (!str) return str
  const regex = /(\b[a-z]+[A-Z][a-z]+\b)|(\b[A-Z]+\b)/g
  const modifiedStr = str.replace(regex, (match) => {
    if (/[a-z]+[A-Z][a-z]+/.test(match)) {
      // is camelCase
      return match.split(/(?=[A-Z])/).join(" ")
    } else {
      // is all caps
      return match
    }
  })
  const frags = modifiedStr.split(/[_-]/)
  if (!frags || frags.length === 0) return modifiedStr
  return frags.map((f) => f[0]?.toUpperCase() + f?.slice(1)).join(" ")
}
