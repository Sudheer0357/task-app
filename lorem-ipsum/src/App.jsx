import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    setText(data);
  };

  return (
    <section className="section-header">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs: </label>
        <input
          type="number"
          name="number"
          id="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button className="btn" type="submit">
          Generate
        </button>
      </form>

      <article>{text}</article>
    </section>
  );
}

export default App;
