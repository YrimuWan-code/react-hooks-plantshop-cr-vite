import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //State to hold the list of plants. 
  const [plants, setPlants] = useState([]);

//State to track what the user is typing in the search bar.
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect to fetch the list of plants when the page loads.
  useEffect(function() {
    fetch("http://localhost:6001/plants")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setPlants(data); //Save the fetched plants to state.
    })
    .catch(function(error) {
      console.error("Error fetching plants:", error);
    })
  }, []) //Empty array means this effect runs only once when the page loads.

//Filter plants based on the search term. 
const displayedPlants = plants.filter(function(plant) {
  return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
})
//Add a new plant to the list of plants.
function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant]); //Create a new array with the existing plants and the new plant.
  }


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  )
}

export default PlantPage;
