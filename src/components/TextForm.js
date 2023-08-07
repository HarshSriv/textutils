import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "Success");
    }
    const handleClearClick = ()=>{
        console.log("Text cleared");
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "Success");
    }
    const handleOnChange = (event)=>{
        console.log("ON Change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        var text = document.getElementById("mybox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const[text,setText] = useState('Enter text Here');
    //wrong way  text = "new text"
    // correct way setText = ("newtext")
  return (
    <>
    <div className="container" style={{ color:props.mode ==='dark'?'white':'#042743'}}>
        <h1 >
            {props.heading}
        </h1>
        <div className="mb-3">
        {/* <label for="mybox " class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces </button>
    </div>
    <div className="Container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <h2> You Text Summary</h2>
      <p>{text.split(" ").length}words and {text.length}</p>
      <p>{0.008 *text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
