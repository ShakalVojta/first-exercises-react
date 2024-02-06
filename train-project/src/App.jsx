import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';
import { Seat } from "./Seat.jsx";

function App() {
  const numberSeats = 48;

  return (
    <>
    <div className="App">
      <div className="carriage">
        {new Array(numberSeats / 4).fill(null).map((n, row) => {
          return (
            <div key={row} className="carriage-row">
              <Seat number={row * 4 + 1} />
              <Seat number={row * 4 + 2} />

              <div className="aisle-spacer"></div>

              <Seat number={row * 4 + 3} />
              <Seat number={row * 4 + 4} />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default App;

