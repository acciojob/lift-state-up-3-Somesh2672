
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}

//     </div>
//   )
// }

// export default App


import React, { useState } from "react";
import "./../styles/App.css";

const Parent = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State in the parent component

  // Function to update selectedOption when a button is clicked
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <p>Selected Option: {selectedOption}</p>

      {/* Two Child components with buttons */}
      <Child option="Option 1" onClick={handleButtonClick} />
      <Child option="Option 2" onClick={handleButtonClick} />
    </div>
  );
};

const Child = ({ option, onClick }) => {
  return (
    <div className="child">
      <h3>Child Component</h3>
      <button onClick={() => onClick(option)}>{option}</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Parent />
    </div>
  );
};

export default App;