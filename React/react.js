//Creating React components
.newButton {
    border: 2px solid black;
    font-size: 22px;
    color: yellow;
    background-color: red;
    font-weight: bold;
    padding: 10px;
  }
import './Button.css'

function Button () {
    return (
        <>
         <button className="newButton"> Click me </button>
         <p> This is a button </p>
        </>
      
    )
}

export default Button


