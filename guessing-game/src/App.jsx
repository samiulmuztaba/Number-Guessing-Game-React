// import { useState } from "react";
import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <h1>Choose the Level</h1>
      <div className="grids">
        <Link to="/Easy">
          <button>Easy</button>
        </Link>
        <Link to="/Medium">
          <button>Medium</button>
        </Link>
        <Link to="/Hard">
          <button>Hard</button>
        </Link>
        <Link to="/Brutal">
          <button>Brutal</button>
        </Link>
      </div>
    </>
  );
}

export default App;
