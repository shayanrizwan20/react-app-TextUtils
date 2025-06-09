// import './App.css';
// import About from './components/About';
// import { use, useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   // Switch,
//    Routes,
//   Route,
//   // Link
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor = 'black';
    showAlert("Dark mode has been activated", "success");
    document.title = 'TextUtils - Dark mode activated';
  //   setInterval(()=>{
  // document.title = 'TextUtils is amazing';
  //   }, 2500);
  //   setInterval(()=>{
  // document.title = 'Install TextUtils Now';
  //   }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
        document.title = 'TextUtils - Light mode enabled';
    }
    
}
 const togglMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor = '#87CEEB';
    showAlert("Dark mode has been activated", "success");
      document.title = 'TextUtils - Blue mode activated';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
        document.title = 'TextUtils - Light mode activated';
    }
    
}

  return (
    <>

{/* <Navbar title="textutils" aboutText="About TextUtils" /> */}
{/* <Navbar /> */}
{/* <Router> */}
  <Navbar title="textutils" mode={mode} toggleMode={toggleMode} togglMode={togglMode} />
  <Alert alert={alert} />

  <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
      <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    {/* </Routes> */}
  </div>
{/* </Router> */}



</>
      );
}

export default App;
                                   