import { useState } from "react";
import "./style.components/ModifyArrayOfAnObject.css";

function ModifyArrayOfAnObject() {
  const [input, setInput] = useState({ fName: "", mName: "", lName: "" });
  const [arrObj, setArrObj] = useState([]);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const addToArray = () => {
    setArrObj([...arrObj, { ...input }]);
    console.log(arrObj);
    setInput({ ...input, fName: "", mName: "", lName: "" });
  };

  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="display">
            {arrObj.map((obj) => (
              <>
              <div>
                <span style={{ marginRight: "5px" }}>{obj.fName}</span>
                <span style={{ marginRight: "5px" }}>{obj.mName}</span>
                <span>{obj.lName}</span>
                </div>
              </>
            ))}
          </div>
          <input
            name="fName"
            value={input.fName}
            onChange={handleInput}
            placeholder="enter first name"
          />
          <br />
          <br />

          <input
            name="mName"
            value={input.mName}
            onChange={handleInput}
            placeholder="enter middle name"
          />
          <br />
          <br />

          <input
            name="lName"
            value={input.lName}
            onChange={handleInput}
            placeholder="enter last name"
          />
          <br />
          <br />
          <button onClick={addToArray}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default ModifyArrayOfAnObject;
