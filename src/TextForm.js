
import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Cliked on Uppercase", "Succes: ");
  }
  const handleDownclick = () => {
    let neText = text.toLowerCase();
    setText(neText);
    props.showAlert("Cliked on Lowercase", "Succes: ");
  }
  const handleCopyclick = () => {
    var text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard", "Succes: ");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3" >
          <label for="exampleFormControlTextarea1" class="form-label">Enter Textarea</label>
          <textarea class="form-control " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'white' : '#fff2f2' }} id="exampleFormControlTextarea1" rows="8"></textarea>
          <button type="button" className="btn btn-success my-2" onClick={handleUpclick}>Convert to Uppercase</button>
          <button type="button" className="btn btn-success my-2 mx-2" onClick={handleDownclick}>Convert to Lowercase</button>
          <button type="button" className="btn btn-success my-2 mx-2" onClick={handleCopyclick}>Copy Text</button>

        </div></div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to Read</p>
        <p>Preview</p>
        <p>{text}</p>
      </div>
    </div>
  )
}
