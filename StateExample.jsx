import { useState } from "react";
export default function StateExample()
{
    const[count,setCount]=useState(0);
    function handleclick ()
    {
        setCount(count+1);
    }
    return <>
    <h1>State Example</h1>
    <h3>Counter {count}</h3>
    <button onClick={handleclick}>Visit count</button>
    </>
}