import { useState } from "react";

export const TernaryOperator=()=>
{
    const[wish,setWish]=useState("nothing")
    const[result,setResult]=useState("")
    const[changes,setChanges]=useState({color:'red',backgroundColor:'black'})

    const trigger=(tmp)=>
    {
        setWish(tmp.target.value)
    }
    const ternary=()=>
    {
        (wish==='spring')?
        setChanges({color:'white',backgroundColor:'green'}):
        (wish==='rainy')?
        setChanges({color:'white',backgroundColor:'seagreen'}):
        (wish==='summer')?
        setChanges({color:'white',backgroundColor:'yellow'}):
        (wish==='winter')?
        setChanges({color:'white',backgroundColor:'blue'}):

        setChanges({color:'yellow',backgroundColor:'black'})
        
        setResult(wish)
    }
    return(
        <>
        <input type="text" placeholder="Tell us your favoriate season" onChange={trigger}/>
        <button onClick={ternary} className="btn btn-outline-secondary">
            Climate
        </button>
        <p style={changes}>
            {result}
        </p>
        </>

    );
}