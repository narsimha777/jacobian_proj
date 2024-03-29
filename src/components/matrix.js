import React from "react";

const Mat= ({matrix})=>{
    return (
        <div>
          {/* <table className="table-auto border-collapse border border-gray-500">
            <tbody>
              {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-400 py-2 px-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table> */}
          <h1>Working</h1>
          <h1>{matrix[0][0]}</h1>
        </div>
      );
}

export default Mat;