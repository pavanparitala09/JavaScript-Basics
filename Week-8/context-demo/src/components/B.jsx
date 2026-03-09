import { useTest } from "../store/TestStore";
export default function B() {
  const {x,incrementX,decrementX} = useTest()
    //const x = useTest(state => state.x)
    return (
      <div className="text-center shadow -2xl m-10 p-10 bg-amber-100">
        <p className="text-2xl">counter 1:{x}</p>
        <button onClick={incrementX} className="bg-amber-200"> increment x </button>
        <button onClick={decrementX}>Decriment X</button>
      </div>
    );
}
