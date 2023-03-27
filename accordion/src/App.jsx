import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>questions and answers about login</h3>
        <section>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
