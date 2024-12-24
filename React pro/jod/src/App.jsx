import React from 'react'
import Flash from './Components/Flash';
import Dark from './Components/Dark';
import Demo from './Components/Demo';


function App() {
  return (
    <div>
      {/* <Flash/> */}

      <Dark/>
      {/* <Demo/> */}


    </div>
  )
}

export default App;




// import React, { useState } from "react";

// const App = () => {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleClick = () => {
//     setShowAlert((prev) => !prev); // Toggle the alert visibility
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       {showAlert && <div style={{ marginTop: "10px", color: "red" }}>Alert is shown!</div>}
//     </div>
//   );
// };

// export default App;
















// import React, { useState } from 'react'
// import './App.css'

// function App() {

//   const [text,Apptext] = useState("The Flash");
//   const [h1,Mh1] = useState("The Jod");


//   const ok = () =>{
//     console.log("okk");
//     let a = text.toUpperCase();
//     console.log(a);
//     Apptext(a) 
    
//   }
  
//   const nice = () =>{
//     console.log("nicee");
//     let a = text.toLowerCase();
//     console.log(a);
//     Apptext(a)
    
//   }

//   const find =(e)=>{
//     Apptext(e.target.value)
    
//   }

//   const send =()=>{
//     console.log(Mh1);
//     h1(text);
    
//   }


//   return (
//     <div>
//       <div className="container">
//         <textarea value={text} onChange={find}>hello</textarea>
//         <button onClick={ok}>UpperCase</button>
//         <button onClick={nice}>LowerCase</button>
//       </div>

//       <div className="main">
//         <h1 id='ping'>letter {text.length} </h1>
//         <h2>{text}</h2>
//         <button onClick={send}>Send</button>
//         <h2> {Mh1}  okkey</h2>
//       </div>
//     </div>
//   )
// }





// export default App




// import React, { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [savedText, setSavedText] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleButtonClick = () => {
//     setSavedText(inputValue);

//     setInputValue(""); // Clear the input after saving
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>{savedText}</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter text"
//         style={{ padding: "10px", width: "200px", marginBottom: "10px" }}
//       />
//       <br />
//       <button
//         onClick={handleButtonClick}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Save to H1
//       </button>
//     </div>
//   );
// }

// export default App;