import { useState } from "react";

function VariableModification() {
  const [variable, setVariable] = useState("Hello ReactJs");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setVariable(input);
    setInput("");
  };
  const enterFun = (e) => {
    if (e.key === "Enter") {
      setVariable(input);
      setInput("");
    }
  };

  return (
    <>
      <h4>{variable} </h4>
      <input
        type="text"
        value={input}
        onKeyDown={enterFun}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleClick}>Change</button>
    </>
  );
}

export default VariableModification;
