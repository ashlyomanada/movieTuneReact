import React from "react";
import { useState } from "react";

function Cars() {
  const [cars, setCars] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function onChangeYear(event) {
    setCars((c) => ({ ...c, year: event.target.value }));
  }

  function onChangeMake(event) {
    setCars((c) => ({ ...c, make: event.target.value }));
  }

  function onChangeModel(event) {
    setCars((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is {cars.year} {cars.make} {cars.model}
      </p>
      <input type="number" value={cars.year} onChange={onChangeYear} />
      <input type="text" value={cars.make} onChange={onChangeMake} />
      <input type="text" value={cars.model} onChange={onChangeModel} />
    </div>
  );
}

export default Cars;
