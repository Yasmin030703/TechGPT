import React, { useState} from 'react'


export default function TextForm(props) {
const handleUpClick =()=>{
   // console.log("UpperCase was clicked"+ text);
    let newtext = text.toUpperCase()
    setText(newtext)
}
const handleOnChange =(event)=>{
    //console.log("onChange");
    setText(event.target.value)
}

    const [text, setText] = useState('Enter text here');
  //  text = "new text" ;//wrong way to set new text
    //setText("new text");
  return (
   
<><div>
    <h1>{props.heading} </h1>
<div className="mb-3">
  
  <textarea className="form-control" id="myBox " value={text} rows="8"  onChange={handleOnChange} ></textarea>
</div>
<button className="btn btn-primary" onClick ={handleUpClick}>Convert to UpperCase</button>

    </div> </>
  )
}
