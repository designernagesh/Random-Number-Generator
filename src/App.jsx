import { useState } from "react";

function App() {

  const [show, setShow] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");

  //Function to generate and display a random number
  const generateRandomNumber = () => {
    const min = 1;
    const max = 100; // You can change the range as needed
    setRandomNumber(() => Math.floor(Math.random() * (max - min + 1)) + min)
    setShow(true)
  }

  return (
    <>
      <div className="container">
        <h2 className="title">Random Number Generator</h2>
        <p className="sub-title">Click the button to generate and display a random number: 😊 </p>
        <button id="generateButton" onClick={generateRandomNumber}>Generate Random Number</button>
        <p id="result">
          {show && `Random Number: ${randomNumber}`}
        </p>
      </div>
    </>
  )
}

export default App;
