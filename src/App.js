import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Textutils - Dark MOde';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Textutils - Light MOde';

    }
  }
  return (
      <>
   
    {/* <Navbar title="TextUtils" aboutText="About" /> */}
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            
            </Route>
    </Routes>
    {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
    {/* <About/> */}
    </div>
    </Router>
      </>
    );
}

export default App;
