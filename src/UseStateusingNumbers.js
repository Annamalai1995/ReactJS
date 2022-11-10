import { useState } from "react";
// npm install react-bootstrap bootstrap-bootstrap installation
//npm i bootstrap-icons

//import 'bootstrap/dist/css/bootstrap.min.css'

export const Justnumber=()=>
{
    const[count,setCount]=useState(0)

    const fun=()=>
    {
        setCount(count+1)
    }
    const funs=()=>
    {
        setCount(0)
    }

    return(
        <>
        <button className="btn btn-outline-primary" onClick={fun} onDoubleClick={funs} >
            once click a button count plus one,doubleclick-that time value is null -
            <span style={{backgrounColor:'red'}}>{count}</span>
        </button>
        
        </>

    );

}