import React, { useState } from "react";

// Test data - Do not modify
const recipes = [
  { id: 1, name: "Pasta Carbonara", cookingTime: 20, difficulty: "Medium" },
  { id: 2, name: "Boiled Eggs", cookingTime: 10, difficulty: "Easy" },
  { id: 3, name: "Pan Pizza", cookingTime: 40, difficulty: "Hard" },
  { id: 4, name: "Salad Bowl", cookingTime: 5, difficulty: "Easy" },
  { id: 5, name: "Peanut Butter Sandwich", cookingTime: 3, difficulty: "Easy" },
];

function App() {
  const [filteredRecipe, setFilteredRecipe] = useState(null);
  const [color, setColor] = useState();
  // Your code here
  // Hints:
  // 1. Use useState to track the selected difficulty filter.
  // 2. Create a function to handle difficulty filter changes.
  // 3. Use .filter() to get recipes matching the selected difficulty.
  // 4. Use .map() to render the filtered recipes.

  // change the difficulty on the button
  const changeDifficulty = (currentDifficulty) => {
    setFilteredRecipe(currentDifficulty);
  };

  // // change the color of the badge
  // const changeColor = (currentColor) => {
  //   setColor(currentColor);
  // };

  // filter out using the difficulty
  const filteredRecipes = filteredRecipe
    ? recipes.filter((recipe) => recipe.difficulty === filteredRecipe)
    : recipes; // If no filter is selected, show all recipes

  // {
  //   /* filter test */
  // }
  // if(recipes.difficulty === "Easy"){
  //   console.log("this is easy");
  // }else if(recipes.difficulty === "Medium"){
  //   console.log("this is mid");
  // }else if(recipes.difficulty === "Hard"){
  //   console.log("this is hard");
  // }else{
  //   console.log("empty");
  // }
  // console.log(recipes , "test");

  // if (recipe.difficulty === "Easy") {
  //   <span className="badge bg-primary">{recipe.difficulty}</span>
  // }else if(recipe.difficulty === "Medium"){
  //   <span className="badge bg-warning">{recipe.difficulty}</span>
  // }else if(recipe.difficulty === "Hard"){
  //   <span className="badge bg-danger">{recipe.difficulty}</span>
  // }

  return (
    <div className="p-5">
      {/* Your JSX here */}
      <h1>Recipe Directory</h1>
      <div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            console.log("All");
            changeDifficulty(null);
            {
            }
          }}
        >
          All
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            changeDifficulty("Easy");
            console.log("Easy");
          }}
        >
          Easy
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            changeDifficulty("Medium");
            console.log("Medium");
          }}
        >
          Medium
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            changeDifficulty("Hard");
            console.log("Hard");
          }}
        >
          Hard
        </button>
      </div>

      <div className="card">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="card-body">
            <h2>{recipe.name}</h2>
            <p>Time : {recipe.cookingTime} minutes</p>
            {recipe.difficulty === "Easy" ? (
              <span className="badge bg-success">{recipe.difficulty}</span>
            ) : recipe.difficulty === "Medium" ? (
              <span className="badge bg-warning">{recipe.difficulty}</span>
            ) : recipe.difficulty === "Hard" ? (
              <span className="badge bg-danger">{recipe.difficulty}</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

// const filterItems = () => {
//   if ((showSaleOnly === true)){
//     setShowSaleOnly(false);
//   }else{
//     setShowSaleOnly(true);
//   }
//   if(showSaleOnly === true){
//     setFilteredList(FilteredList.filter((item) => item.onSale === true));
//   }else{
//     setFilteredList(items);
//   }
// }

export default App;
