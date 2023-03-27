import React from "react";
import data from "./data";
import { useState } from "react";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }
    setItems(data);
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Menu Items</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteredItems={filteredItems} />
      </section>
      <div className="section-center">
        {items.map((item) => {
          const { id, img, title, desc, price } = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default App;
