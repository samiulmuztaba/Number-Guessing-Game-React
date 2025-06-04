import { useState } from "react";
import "./Game.css";

function Brutal() {
  const [matched, setMatched] = useState(false);
  const [random, setRandom] = useState(() => Math.floor(Math.random() * 10));
  const [message, setMessage] = useState("");

  function checkOk(e) {
    const value = parseInt(e.target.value);
    console.log("Random:", random);
    console.log("Clicked:", value);

    if (value === random) {
      setMatched(true);
      setMessage("");
    } else {
      setMessage("Not quite! Try again. 😅");
    }
  }

  if (matched) {
    return (
      <>
        <h1>That's a good guess! 🎉</h1>
        <button onClick={() => {
          setMatched(false);
          setRandom(Math.floor(Math.random() * 10));
          setMessage("");
        }}>
          Let's Guess Again
        </button>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>{message ? "Not quite, try again!" : "Guess The Number!"}</h1>
        <div className="grid">
          {[...Array(10).keys()].map((num) => (
            <button className="cell" value={num} key={num} onClick={checkOk}>
              {num}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Brutal;
