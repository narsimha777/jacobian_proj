import React from "react";
import jac from "../utilities/util";

const Coordeqs = ({numofnodes})=>{
    const eqs = jac.getdisp(numofnodes);
    return (<div className="font-bold m-2">
        <h1>u = {eqs.u}</h1>
        <h1>v = {eqs.v}</h1>
    </div>)
}

export default Coordeqs;