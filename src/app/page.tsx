"use client";

import { useState } from "react";

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const Counter = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const handleClick = async () => {
    setPending((pending) => pending + 1);
    await delay(3000);
    setPending((pending) => pending - 1);
    setCompleted((completed) => completed + 1);
  };
  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
};

export default Counter;
