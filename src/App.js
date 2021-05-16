import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketches/sketch";
// import "./example.css";
import Loading from "./components/Loading.jsx";

function App() {
  // const [state, setState] = useState({ rotation: 160 });
  const [numOfMarimos, setNumOfMarimos] = useState(0);
  const [timer, setTimer] = useState(null);


  return (
    <>
      <Loading />

      <div className="data-box">
        <p>Number of Marimos: {numOfMarimos}</p>
        <p>Timer: {timer}</p>
      </div>  
      <P5Wrapper
        sketch={sketch} 
        setNumOfMarimos={setNumOfMarimos}
        timer={timer}
        setTimer={setTimer}
        // rotation={state.rotation} 
      />
    </>
  );
}

export default App;
