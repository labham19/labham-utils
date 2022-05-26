import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Activated",'dark');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'azure';
      showAlert("Light Mode Activated",'light');
    }
  }
  const changeBackgroundColor = ()=>{
    let bg = document.querySelector('input[name="colorRadio"]:checked').value;
    document.body.style.backgroundColor = bg;
  }
  const showAlert = (message,type) =>{
      setAlert({msg:message,type:type});
      setTimeout(()=>{setAlert(null)},1000)
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} title="LabhamUtils"></Navbar>
      <div className="form-check container form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={toggleMode} id="flexSwitchCheckDefault" /> <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label> 
        
        {
          mode==='dark' && 
          <>
          <div className="form-check form-check-inline mx-5">
            <input className="form-check-input" type="radio" onClick={changeBackgroundColor} name="colorRadio" id="inlineRadio1" value="Grey"/>
            <label className="form-check-label" htmlFor="inlineRadio1"  style={{ color:'white' }}>Grey</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" onClick={changeBackgroundColor} name="colorRadio" id="inlineRadio2" value="darkorange"/>
            <label className="form-check-label" htmlFor="inlineRadio2"  style={{ color:'white' }}>Orange</label>
          </div>
          </>
      }
      </div>
        
      
      <Alert  alert={alert} type='danger'/>

      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}> </Route>
          <Route exact path="/" element={<TestForm showAlert={showAlert} mode={mode} heading="Enter Text In The Text Area Below :" />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
