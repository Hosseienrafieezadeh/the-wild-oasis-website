"use client";
import { useState } from "react";

export default function Couner({ users }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>there are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}
