export const iconHash = (id: string): number => {
  let hash = 0, i, chr;
  if (id.length === 0) {
    return null
  }
  for (i = 0; i < id.length; i++) {
    chr = id.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  let iconId = Math.abs(hash % 50);
  return iconId;
};