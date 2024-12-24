  // // //                                                                  // // // //uppercase,lowercase,send,length

import React, { useState } from 'react';
import './one.css';
function Flash() {

  const [main, setmain] = useState("the flash");
  const [next, setnext] = useState();
  // const [len, setlen] = useState();
  

  const input =(e)=>{
    
    setmain(e.target.value);
  }

  const send =()=>{
    // console.log(main);
    setmain(next);
    // setmain("");
  }

  const upper =() =>{
    let a = next.toUpperCase()
    setmain(a)
  }
  
  const lower =() =>{
    let a = next.toLowerCase()  
    setmain(a) 
  }
  


  return (
    <div className='hello' >
        <input value={main} onChange={input} type="text" />
        <button onClick={send} >Send</button>
        <button onClick={upper} >uppercase</button>
        <button onClick={lower} >lowercase</button>


          <h2>{main}</h2>
        <div className='name' >
        <h1>hello {next} </h1>
        <p>length is : {main.length} </p>

        </div>
    </div>
  )
}
export default Flash;

