import { useState } from "react";

function PreviousStateUseState() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  function onclikFuns() {
    setCounter(counter + 1);
  }
  function onclikFunsByLoop() {
    for (let i = 0; i < 5; i++) {
      setCounter(counter + 1);
    }
  }
  function onclikFunsByLoopPreState() {
    for (let i = 0; i < 5; i++) {
      setCounter((preState) => preState + 1);
    }
  }
function clickOnce(){
    setInterval(()=>{
        setCounter1((preState)=>preState+1)
    },1000)
}


  return (
    <>
      <h4>{counter}</h4>
      <button onClick={onclikFuns}>Normal-increment</button>
      <button onClick={onclikFunsByLoop}>increment-By-Loop</button>
      <button onClick={onclikFunsByLoopPreState}>
        increment-By-Loop-with-previous-State
      </button>
      <h4>{counter1}</h4>
      <button onClick={clickOnce}>automatic increment</button>
    </>
  );
}

export default PreviousStateUseState;
