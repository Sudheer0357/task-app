import React, { useState } from "react";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="color-form">
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f1e2d3"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button>Generate</button>
        </form>
      </section>
      <section>
        <div
          style={{
            backgroundColor: `${color}`,
            width: "200px",
            height: "200px",
          }}
        ></div>
      </section>
    </>
  );
};

export default App;
