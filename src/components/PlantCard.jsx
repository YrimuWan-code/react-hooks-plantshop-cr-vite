import React, { useState }from "react";

function PlantCard({ plant }) {
  //State to track whether the plant is in stock or not.
  const [inStock, setInStock] = useState(plant.inStock);

  const handleStockToggle = function() {
    setInStock(!inStock); //Toggle the inStock state.
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Sold Out</button>
      )}
    </li>
  );
}

export default PlantCard;
