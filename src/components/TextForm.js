// import React from 'react'

// importing react hooks
import React, { useState } from "react";


export default function TextForm(props) {





    const [text, setText] = useState("");

    function changeStateToUP(){
        setText(text.toUpperCase())
        props.showAlert('Success','Text transformed to Uppercase')
    }    
    
    function changeStateToLow(){
      setText(text.toLowerCase())
      props.showAlert('Success','Text transformed to Lowercase')
    }

    function change_in_text(event){ ///  event  is an object wich is give by onChange event
        // console.log("change the value")
        setText(event.target.value) 
        
      
    }

    function triggerExample() {
        const element = document.querySelector('#example');
        element.select();
        // document.execCommand('copy');
        navigator.clipboard.writeText(element.value)
        props.showAlert('Success','Text copyed to clipboard')
      } 
      
      
    

      // #213ABF

    

    return (
    <div className={`p-4 text-${props.mode==='light'?'dark':'light'}`}>
      <h3 className ="my-3" >{props.heading}</h3>
      <div className="mb-3"> 
        <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`}  style={{backgroundColor:props.mode==='light'?'white':'grey'}} onChange={change_in_text}  value = {text} id="example" rows="10" placeholder="Enter from here"  autoFocus></textarea>
        <button className="btn btn-primary my-4" onClick = {changeStateToUP}>Convert to uppercase</button>
        <button className="btn btn-primary my-4 mx-3" onClick = {changeStateToLow}>Convert to Lowercase</button>
        <button className="btn btn-primary my-4 mx-4"  onClick = {triggerExample}>Copy</button>
      </div>


      <div className="container">
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} Words and { text.length } charector </p>
      </div>
    </div>
  )
}
