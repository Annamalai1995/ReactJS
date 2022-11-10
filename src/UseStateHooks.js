import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Firsthooks=()=>
{
    const[user,setUser]=useState("")

    const print=()=>
    {
        alert(user+"has added successfully")
    }
    const result=(name)=>
    {
        setUser(name.target.value)
    }
    return(
        <>
        <input type="text" placeholder="Enter your name" name={user} onChange={result} />
        <button onClick={print} className="btn btn-outline-warning" >
            click...!
        </button>
        </>

    );
}