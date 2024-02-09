import { useState } from "react";

function ObjectModification() {
  const [obj, setObj] = useState({ name: "", mName: "", lname: "" });
  const [input, setInput] = useState({ name: "", mName: "", lname: "" });

  function handleChange(e) {
    setInput((preState)=>(
({ ...input, [e.target.name]: e.target.value })
    ))
  }
  function handleClick() {
    setObj({ ...input });
    setInput({ name: "", mName: "", lname: "" });
  }
  return (
    <>


      <h4>
        {obj.name} {obj.mName} {obj.lname}
      </h4>
      <input
        type="text"
        name="name"
        value={input.name}
        placeholder="Enter Your First Name"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="mName"
        value={input.mName}
        onChange={handleChange}
        placeholder="Enter Your Middle Name"

      />
      <br />
      <br />
      <input
        type="text"
        name="lname"
        value={input.lname}
        onChange={handleChange}
        placeholder="Enter Your Last Name"

      />
      <br />
      <br />
      <button onClick={handleClick}>Enter</button>
    </>
  );
}

export default ObjectModification;
