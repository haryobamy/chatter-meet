export function stringAvatar(name: string) {
  if (name) return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
}
