import React, { useEffect, useRef } from 'react'
import './style.css'
import one from './qqq.jpg'
import gsap from 'gsap'

// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'



const Script = () => {

  // useGSAP( () =>{
  //   gsap.from("#a1 #a2 #a3",{
  //     y : -40,
  //     stagger : 1.1,
  //   })
  // })


  // useEffect (() =>{
  //   gsap.from(".container",{
  //     x : 200,
  //     duration : 2,
  //   })
  // })

const aa = useRef(null);

useEffect(() =>{
  gsap.from(aa.current,{
    scale : -1.02,
    duration : 2,

  })

  // gsap.from(aa.current,{
  //   x : 0,

  // })

})


  return (
    <div>
      <div ref={aa} id="first">
        <a id="logo" href="#"> Flash</a>

        <div  className="container">
          <a id='a1' className=' p-0 hover:border-b-2 border-b-red-500 border-b-solid px-4 rounded-md' href="http://#">Home</a>
          <a id='a2' className=' p-0 hover:border-b-2 border-b-red-500 border-b-solid px-4 rounded-md' href="http://#">Profile</a>
          <a id='a3' className=' p-0 hover:border-b-2 border-b-red-500 border-b-solid px-4 rounded-md' href="http://#">Projects</a>
          <button href="#">Share</button>

        </div> 
      </div>
      
        <div>
        <marquee> Building the Future of the Web.. </marquee> 
        </div>

        <div className=' mt-2  rounded-none mb-3' id="ok1"></div>
        <div className=' mt-2  rounded-none mb-3' id="ok2"></div>

        <div id="contant" className='uppercase'>
          <h1>Ready t😎 </h1>
          <h1>begin</h1>
          <h1> your</h1>
          <h1>web journey..</h1>  
        </div>
          <div id="jod">
            <img src={one}/>
          </div>

    </div>
  )
}

export default Script;