import React from "react";
import "./Style.css";

function App() {
  const [result, setResult] = React.useState("");
  const [neverSettle, setNeverSettle] = React.useState(false);
  let styles = {
    color: neverSettle ? "Red" : "#FFFFFF",
  };

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function clear() {
    setResult("");
    setNeverSettle(false);
  }

  function c() {
    setResult(result.slice(0, -1));
  }

  function validateResult() {
    try {
      if (result === "1+") {
        setNeverSettle(true);
        setResult("Never Settle");
      } else setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  }
  return (
    <div className="container">
      <form>
        <input type="text" value={result} style={styles}></input>
      </form>
      <div className="keypad">
        <button onClick={clear} id="clear" className="highlight">
          Clear
        </button>
        <button onClick={c} id="backspace" className="highlight">
          C
        </button>
        <button onClick={handleClick} name="/" className="highlight">
          &divide;
        </button>
        <button onClick={handleClick} name="7">
          7
        </button>
        <button onClick={handleClick} name="8">
          8
        </button>
        <button onClick={handleClick} name="9">
          9
        </button>
        <button onClick={handleClick} name="*" className="highlight">
          &times;
        </button>
        <button onClick={handleClick} name="4">
          4
        </button>
        <button onClick={handleClick} name="5">
          5
        </button>
        <button onClick={handleClick} name="6">
          6
        </button>
        <button onClick={handleClick} name="-" className="highlight">
          &ndash;
        </button>
        <button onClick={handleClick} name="1">
          1
        </button>
        <button onClick={handleClick} name="2">
          2
        </button>
        <button onClick={handleClick} name="3">
          3
        </button>
        <button onClick={handleClick} name="+" className="highlight">
          +
        </button>
        <button onClick={handleClick} name="0">
          0
        </button>
        <button onClick={handleClick} name=".">
          .
        </button>
        <button onClick={validateResult} id="result" className="highlight">
          =
        </button>
      </div>
    </div>
  );
}
export default App;
