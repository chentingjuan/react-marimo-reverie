import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketches/sketch";
// import "./example.css";

function App() {
  // const [state, setState] = useState({ rotation: 160 });
  const [numOfMarimos, setNumOfMarimos] = useState(0);

  return (
    <>
      <div className="data-box">
        Number of Marimos: {numOfMarimos}
      </div>  
      <P5Wrapper
        sketch={sketch} 
        setNumOfMarimos={setNumOfMarimos}
        // rotation={state.rotation} 
      />
    </>
  );
}

export default App;
