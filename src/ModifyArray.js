import { useState } from "react";

function ModifyArray() {
  const [arr, setArr] = useState(["Javascript", "Java", "Python"]);
  const [input, setInput] = useState("");

  function clickFun() {
    setArr((preState) => [...preState, input]);
    setInput("");
  }
  function EnterFun(e) {
    if (e.key === "Enter") {
      setArr((preState) => [...preState, input]);
      setInput("");
    }
  }
  return (
    <>
      <h4>
        {arr.map((item) => {
          return <li>{item}</li>;
        })}
      </h4>
      <input
        type="text"
        placeholder="Add programming languages"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={EnterFun}
      />
      <button onClick={clickFun}>Add</button>
    </>
  );
}

export default ModifyArray;
