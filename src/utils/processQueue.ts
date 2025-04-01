export function getFinalState(baseState: number, queue: []) {
  let finalState = baseState;
  for (const entry of queue) {
    if (typeof entry === "number") {
      finalState = entry;
    } else {
      finalState = entry(finalState);
    }
  }
  return finalState;
}
