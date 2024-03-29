import React, { useState, useEffect } from "react";
import jac from "../utilities/util";

const Shapefun=({eqs, n, Z, numofnodes})=>{
    const [subeqs, setsubseqs] = useState();
    const [matr, setMat] = useState();
    const [jacob, setjac] = useState(false);
    let expmat = [["du/dZ", "du/dn"],["dv/dZ", "dv/dn"]];
    const handlesubs = ()=>{
        let fineqs = jac.getfindisp(n, Z, numofnodes);
        setsubseqs(fineqs);
    }
    const handlejac = ()=>{
       setjac(!jacob);
    }
    useEffect(()=>{
       let mat = jac.getjac(n, Z, numofnodes);
       setMat(mat);
       console.log(matr);
    },[jacob]);
    return (<>
        <p className="ml-2 font-bold text-2xl"><em>The required shape functions are derived using <a className="text-red-500" target="_blank" href="https://en.wikipedia.org/wiki/Lagrange_polynomial">lagrangian interpolation</a></em></p>
        {eqs&&eqs.map((item,index)=>(<>
        <p className="font-bold m-2">N{index+1}: {item}</p>
        </>))}
        <button
          className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={()=>handlesubs()}
        >
            Substitute in Coordinate equations  
        </button>
        {subeqs&&(<><div className="font-bold m-2">
            <h1>u = {subeqs.finu}</h1>
            <h1>v = {subeqs.finv}</h1>
        </div><button
          className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={()=>handlejac()}
        >Get JACOBIAN Matrix
        </button></>)
        }
        {jacob&&<div>
            <p className="ml-2 font-bold text-2xl"><em>We know jacobian matrix can be derived from formulae</em></p>
            <table className="m-10 table-auto border-collapse border border-gray-800 border-2">
            <tbody>
              {expmat.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="text-center italic font-bold text-xl border border-gray-800 py-2 px-4 border-2">
                        {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p>Final Derived Jacobian Matrix [ J ] = </p>
          <table className="ml-2 table-auto border-collapse border border-gray-800 border-2">
            <tbody>
              {matr.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="text-center italic font-bold text-xl border border-gray-800 py-2 px-4 border-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
    </>)
}

export default Shapefun;