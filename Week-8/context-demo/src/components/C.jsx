/* eslint-disable no-unused-vars */
import React from "react";
import { useTest } from "../store/TestStore.js";

export default function C() {

  const {x,incrementX,decrementX} = useTest()
  //const x = useTest(state => state.x)
  return (
    <div className="text-center shadow -2xl mt-5 p-10 bg-amber-100">
      <p className="text-2xl">counter 1:{x}</p>
      <button onClick={incrementX} className="bg-amber-200"> increment x </button>
    </div>
  );
}
