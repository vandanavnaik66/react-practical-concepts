import { useState } from "react";

function ModifyArrayOfAnObject() {
  const [arr, setArr] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  function addFun() {
    let newObj = {
      f_name: fname,
      l_name: lname,
      e_mail: email,
    };
    setArr((preState) => [...preState, newObj]);
    setFname("");
    setLname("");
    setEmail("");
  }
  function removeFun(i) {
    setArr((pre) => {
        return pre.filter((_, index) => {
        return index !== i;
      });
    });
  }

  return (
    <>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            {item.f_name} {item.l_name} {item.e_mail}
            <button onClick={() => removeFun(index)}>remove</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="first name"
      />
      <br />
      <br />

      <input
        type="text"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        placeholder="last name"
      />
      <br />
      <br />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <br />
      <br />
      <button onClick={addFun}>Add</button>
    </>
  );
}

export default ModifyArrayOfAnObject;
