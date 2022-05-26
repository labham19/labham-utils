import React,{useState} from 'react'

export default function TestForm(props) {
  const [myText,setText] = useState(''); 

  const uppercaseConvert = ()=>{
      setText(myText.toUpperCase());
      props.showAlert("Converted to uppercase","success");
  } 
  const lowercaseConvert = ()=>{
    setText(myText.toLowerCase());
    props.showAlert("Converted to lowercase","success");
  } 
  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(myText);
    props.showAlert("Copied Successfully","success");
  } 
  const handleExtraSpaces = ()=>{
    let newText = myText.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Trimmed Successfully","success");
  }
  const capitalizeConvert = ()=>{
    let newText = myText.toLowerCase();
    let arr = newText.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if(arr[i])
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    
    setText(arr.join(" "));
    props.showAlert("Capitalized Successfully","success");
  } 
  const clearText = ()=>{
    setText('');
    props.showAlert("Cleared","success");
  } 
  const handleOnChange = (event)=>{
    setText(event.target.value);
  } 
  const wordCount = () =>{
    let words = myText.trim().split(/\s+/).length;
    if (words === 1 && myText.split(" ")[0] === "") {
      words = 0;
      return words;
    } else {
      return words;
    }
  }
  return (
    <>
        <div className="my-3 container" style={{ color: props.mode==='light'?'black':'white'}}>
        <label htmlFor="myTextArea" className="form-label"><b>{props.heading}</b></label>
        <textarea className="form-control" value={myText} id="myTextArea" style={{ backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="3"></textarea>
        <button disabled={myText.length===0} className='btn btn-sm btn-primary m-2' onClick={uppercaseConvert}>Convert To Uppercase</button>
        <button disabled={myText.length===0} className='btn btn-sm btn-warning m-2' onClick={lowercaseConvert}>Convert To Lowercase</button>
        <button disabled={myText.length===0} className='btn btn-sm btn-info m-2' onClick={capitalizeConvert}>Convert To Capitalized</button>
        <button disabled={myText.length===0} className='btn btn-sm btn-success m-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={myText.length===0} className='btn btn-sm btn-light m-2' onClick={copyToClipboard}>Copy</button>
        <button disabled={myText.length===0} className='btn btn-sm btn-danger m-2' onClick={clearText}>Clear</button>
        </div>

        <div className="my-3 container">
            <p><b>{wordCount()}</b> Words and  <b>{ myText.split(" ").join("").length }</b> Characters</p>
            <p><b>{myText.split(/[".!?"]/).length-1}</b> Sentences</p>
            <p>Estimated Time To Read : <b>{wordCount()*0.008}</b> Minutes </p>

        </div>
       
    </>
  )
}
