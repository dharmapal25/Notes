import React , {useState} from 'react'




function Demo() {

    const [ok, setok] = useState({});

    const stll ={
        color : "red",
        backgroundColor : "#79e979",
        height : '300px',
        width : '500px',
    }
    
    const Change =()=>{
        console.log("Flash");
        
        setok({
            color : "#fff",
            backgroundColor : "#111",
        })
    }

    function Changing (){
        console.log("The flash");
        setok(null)   
    } 

    
  return (
    <div style={ok} >
        <textarea value={ok} style={stll} >The Flash</textarea>
        <button onClick={Change} >Dark</button>
        <button onClick={Changing} >Light</button>
    </div>
  )
}

export default Demo