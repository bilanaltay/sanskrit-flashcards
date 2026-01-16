/**
 * Generates a shuffled array of indices [0, 1, ..., length-1]
 * using the Fisher-Yates algorithm.
 */
export const getShuffledIndices = (length: number): number[] => {
  const indices = Array.from({ length }, (_, i) => i);
  
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  
  return indices;
};