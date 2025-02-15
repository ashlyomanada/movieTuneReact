import React, { useState } from "react";

function Food() {
  const [foods, setFoods] = useState(["apple", "Orange", "Pineapple"]);

  const items = foods.map((food, index) => <li key={index}>{food}</li>);
  return (
    <div>
      <ol>{items}</ol>
    </div>
  );
}

export default Food;
