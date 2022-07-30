import React from 'react'
import { useState } from 'react'
import "./scrbling.css"

const Fear = ({headingText}) => {
  const [text, setText] = useState("")
  const [alert, setAlert] = useState(false)
  
  const handleText = (e) => {
      setText(e.target.value)
  }
  const handleupClick = () =>{
   const upperText = text.toUpperCase()
   setText(upperText)
  }
  const handleloClick = () => {
   const lowerText = text.toLowerCase() ;
   setText(lowerText)
  }
  const handleRemoveClick = () => {
    const newText = "" 
    setText(newText)

  }
  const handleCopyClick = () => {
       let copyText = document.getElementById("myText")
       copyText.select() ;
       navigator.clipboard.writeText(copyText.value)
  }
  const handleremoveExtraSpaces = () =>{
     let extraSpace = text.split(/[]+/)
     setText(extraSpace.join(" ")) ;
  }
  const handleSaveText = () => {
    setAlert(true)
        localStorage.setItem("textData", text)
  }
  return (
    <div>
      <div className='headingDiv'><h3>{headingText}</h3></div>

      <div className='textContainerDiv'>
        <textarea value={text} onChange={handleText} rows="20" cols="130" id='myText'></textarea>
      </div>
      <div className='textCalculation'>
        <h4>{text.split(" ").length} Words ,   {text.length} Characters</h4>
      </div>
      <div className="buttonCss">
      <button onClick={handleupClick}>Click to UpperCase</button>
      <button onClick={handleloClick}>Click to LowerCase</button>
      <button onClick={handleRemoveClick}>Click to Remove</button>
      <button onClick={handleCopyClick}>Copy text</button>
      <button onClick={handleremoveExtraSpaces}>Remove Extra Space</button>

      </div>
      <div className='saveButton'>
        <button onClick={handleSaveText}>Save</button>
      </div>
    </div>
  )
}

export default Fear
