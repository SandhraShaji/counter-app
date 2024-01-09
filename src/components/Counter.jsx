import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter]=useState(0)
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        if(counter>0){
          setCounter(counter-1)
        }
        else{
          setCounter(0)
        }
    }
    function reset(){
        setCounter(0)
    }
  return (
    <div style={{marginBlock:'124.5px'}}>
        <h1 style={{textAlign:'center',fontSize:'80px'}}>{counter}</h1>
        <div style={{textAlign:'center',marginBlock:'70px'}}>
        <button style={{backgroundColor:'orange',marginInline:'10px', padding:'8px',border:'none',borderRadius:'7px',boxShadow:'1px 1px 5px grey'}} onClick={decrement}>Decrement</button>
        <button style={{backgroundColor:'red',marginInline:'10px', padding:'8px',border:'none',borderRadius:'7px',boxShadow:'1px 1px 5px grey'}} onClick={reset}>Reset</button>
        <button style={{backgroundColor:'green',marginInline:'10px', padding:'8px',border:'none',borderRadius:'7px',boxShadow:'1px 1px 5px grey'}} onClick={increment}>Increment</button>
        </div>
    </div>
  )
}

export default Counter