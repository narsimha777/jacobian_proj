import React, { useState } from "react";
// import jac from "../utilities/util.js";
import Coordeqs from "./cordinateqs.js";
import Zn from "./nZ.js";

const Jacob = ()=>{
    const [numofnodes, setNum] = useState();
    const [seqs, setseqs] = useState(false);
    const handlenum = (e)=>{
        e.preventDefault();
        setseqs(!seqs);
    }
    return(<>
        <form onSubmit={handlenum}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label for="number-of-nodes" className="block text-lg font-medium leading-6 text-gray-900">Enter Number of Nodes</label>
                    <input type="number" name="number-of-nodes" id="number-of-nodes" autocomplete="given-name" value={numofnodes} onChange={(e)=>(setNum(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            <button type="submit" className="w-20 h-10 mt-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
        {seqs&&(
        <>
            <Coordeqs numofnodes={numofnodes}/>
            <Zn numofnodes={numofnodes}/>
        </>)}
    </>)
}

export default Jacob