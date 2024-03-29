import React, { useState, useEffect } from "react";
import jac from "../utilities/util";
import Shapefun from "./shapefunc";

const Zn = ({ numofnodes }) => {
  const [numbersArray, setNumbers] = useState([]);
  const [Z, setZ] = useState([]);
  const [n, setN] = useState([]);
  const [sheqs, setSheq] = useState([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < numofnodes; i++) {
      arr.push(i + 1);
    }
    setNumbers(arr);
  }, [numofnodes]);

  const handleSubmit =() => {
    console.log("Z values:", Z);
    console.log("n values:", n);
    let eqs = jac.getShapefun(n, Z, numofnodes);
    setSheq(eqs);
    setshow(!show);
  };

  return (
    <>
      <form className="flex justify-around flex-wrap m-10">
        {numbersArray.map((item, index) => (
          <div key={item} className="mb-4">
            <label
              className="ml-2 mt-2 block text-gray-700 text-sm font-bold mb-2"
              htmlFor={`inputZ-${item}`}
            >
              Z{item} Value
            </label>
            <input
              className="ml-2 mt-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`inputZ-${item}`}
              type="number"
              value={Z[index] || ""}
              onChange={(e) =>
                setZ((prevZ) => {
                  const updatedZ = [...prevZ];
                  updatedZ[index] = e.target.value;
                  return updatedZ;
                })
              }
              placeholder="Enter Z value"
            />
            <label
              className="ml-2 mt-2 block text-gray-700 text-sm font-bold mb-2"
              htmlFor={`inputN-${item}`}
            >
              N{item} Value
            </label>
            <input
              className="ml-2 mt-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`inputN-${item}`}
              type="number"
              value={n[index] || ""}
              onChange={(e) =>
                setN((prevN) => {
                  const updatedN = [...prevN];
                  updatedN[index] = e.target.value;
                  return updatedN;
                })
              }
              placeholder="Enter N value"
            />
          </div>
        ))}
      </form>
      <div className="ml-2 flex items-center justify-between">
        <button
          className="ml-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => handleSubmit()}
        >
          Get Shape Functions
        </button>
      </div>
      {show&&<Shapefun eqs={sheqs} n={n} Z={Z} numofnodes={numofnodes}/>}
    </>
  );
};

export default Zn;

