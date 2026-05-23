import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="title">Counter</h1>

      <div className="buttons-wrapper">
        <h3 className="count">
          {count}
        </h3>

        <div className="btn-group">
          <button
            className="btn"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="btn"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
