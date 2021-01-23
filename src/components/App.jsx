import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setheadingText] = useState(name)

  function handleChange(event){
    setName(event.target.value);
  }

  function submitName(event){
    setheadingText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={submitName}>
        <input 
          onChange={handleChange} 
          type="text"
          placeholder="What's your name?" 
          value = {name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
