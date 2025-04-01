"use client";

import { getFinalState } from "@/utils/processQueue";

interface TestCase {
  baseState: number;
  queue: number[] | string[];
  expected: number;
}

function increment(n: number): number {
  return n + 1;
}
increment.toString = () => "n => n+1";

const TestCase = ({ baseState, queue, expected }: TestCase) => {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        className={`${actual === expected ? "text-green-600" : "text-red-600"}`}
      >
        Your result: <b>{actual}</b> (
        {actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
};

const App = () => {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  );
};

export default App;
