import { useState } from "react";

function StateDemo() {
  let [counter, setCounter] = useState(10);

  let [user, setUser] = useState({name:"pavan"})

  const increment = () => {
    setCounter(counter + 1);
  };

  const decriment = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const updateUser = () =>{
    setUser({...user, city: "hyd"})
  }

  return(
  <div>
    <h1>COUNT:{counter}</h1>
    <button onClick={increment} className="p-3,3 bg-blue-400">+</button>
      <button onClick={decriment}>-</button>
        <button onClick={reset}>reset</button>

        <h4>User Details Are</h4>
        <p></p>
        <button onClick={updateUser}>Add Property</button>


  </div>
  )
}

export default StateDemo
