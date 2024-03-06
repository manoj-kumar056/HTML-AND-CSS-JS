import React, { useState } from 'react'
export default function Cash(){
    const[USD,setUSD]=useState()
    const[IND,setIND]=useState()
    const handleUSD=(e)=>{
        setUSD(e.target.value)
        setIND(e.target.value*82.90)
    }
    const handleIND=(e)=>{
        setIND(e.target.value/82.90)
        setUSD(e.target.value)
    }
    return(
        <div>
    <lable>USD:</lable>
    <input type="number" value={USD} onChange={handleUSD}/>
     <lable>IND:</lable>    
    <input  type="number" value={IND} onChange={handleIND}/>
        </div>
)
}