export function getFinalState(baseState: number, queue: []) {
  let finalState = baseState;
  for (const entry of queue) {
    if (typeof entry === "function") {
      finalState = entry(finalState);
    } else {
      finalState = entry;
    }
  }
  return finalState;
}
