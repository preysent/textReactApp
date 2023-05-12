import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from'./components/Alert';
import React, { useState } from "react";

function App() {
 
  const [mode, setMode]= useState('light');

  const changeMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#0B1340";
      showAlert('Success','Dark mode is Enabled')

      // changing the page titile dinamecally
      document.title="Text app - dark"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert('Success','Dark mode is disabled')
      
      // changing the page titile dinamecally
      document.title="Text app - light"
    }
  }


  // alert
  const [alert , setAlert] = useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message,
    })

    setTimeout(()=>{
      setAlert(null)
    },1200)
  }


  return (
    <>
    {/* <Router> */}

  

    <Navbar title="Preysent" about="my about" mode={mode} modef={changeMode}/>
    <Alert alert={alert} />
    {/* <Switch> */}
    <div className="container">
    

              <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} /> 


    </div>

    {/* </Switch> */}

    {/* </Router> */}
    </>
  );
}

export default App;
