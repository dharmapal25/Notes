import React, { useState } from 'react';
import './white.css';
import ff from './joker.jpg';



function Dark() {

 const [darks,setdarks] = useState({})
//  const [ping,setping] = useState({})


 const dark = () => {

  setdarks({
    color : "#fff",
    backgroundColor : '#23443e',
  })

  document.body.style.background = "#797979";
  
}


const light = () => {
  setdarks(null)
  document.body.style.background = "#fff";
 }

  return (
    <>
    <div className="main" style={darks} >
      <h2>The Flash</h2>
      <div className="secd">
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Projects</ul>
        <ul>Blog</ul>

        <button onClick={dark} > Dark </button>
        <button onClick={light} > Light </button>

      </div>
    </div>

        <div className="jod">
        {/* // <img src={'joker.jpg'} /> */}
        <img src={ff} />
        </div>
    </>
  )
}

export default Dark;



