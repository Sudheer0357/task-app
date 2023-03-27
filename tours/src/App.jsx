import React, { useEffect, useState } from "react";
import Tours from "./Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";

  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    await setTours(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (isLoading) {
    return (
      <main>
        <div className="title">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
