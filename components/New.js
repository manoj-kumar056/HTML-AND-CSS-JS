import React,{useState} from 'react'
export default function Form()
{

const[cal,setCal]=useState('')
const handleEvaluate=()=>{
    
      setCal(eval(cal))
}
return(

 <div>
  <center>
   <input type='text' value={cal}/><br></br>
   <button onClick={()=>{setCal(prev=> prev+'1')}}>1</button>
   <button onClick={()=>{setCal(prev=> prev+'2')}}>2</button>
   <button onClick={()=>{setCal(prev=> prev+'3')}}>3</button>
   <button onClick={()=>{setCal(prev=> prev+'4')}}>4</button>
   <button onClick={()=>{setCal(prev=> prev+'5')}}>5</button>
   <button onClick={()=>{setCal(prev=> prev+'6')}}>6</button>
   <button onClick={()=>{setCal(prev=> prev+'7')}}>7</button>
   <button onClick={()=>{setCal(prev=> prev+'8')}}>8</button>
   <button onClick={()=>{setCal(prev=> prev+'9')}}>9</button>
   <button onClick={()=>{setCal(prev=> prev+'0')}}>0</button>
   <button onClick={()=>{setCal(prev=> prev+'+')}}>+</button>
   <button onClick={()=>{setCal(prev=> prev+'-')}}>-</button>
   <button onClick={()=>{setCal(prev=> prev+'*')}}>*</button>
   
   <button onClick={handleEvaluate}>=</button>
  
   </center>
   
 </div>
)
}
