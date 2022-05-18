import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./Components/Recipe";

const API_ID = "bf0d8ebf";
const API_KEY = "61e0a1d17667e73da2aeaabcd448330c";
// const url = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}
const title = "";
function App() {
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchRecipe("pasta");
  }, []);

  const searchRecipe = async (title) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();

    setRecipies(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search m-1">
              {" "}
              <i className="fa fa-search"></i>{" "}
              <input
                value={search}
                type="text"
                className="form-control"
                placeholder="Feeling hungry? Search for recipe"
                onChange={updateSearch}
              />{" "}
              <button className="btn btn-primary m-1" onClick={() => searchRecipe(search)}>Search</button>{" "}
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="container">
        <div className="row">
            {recipies.map((recipe, index) => (
              <Recipe
                key={index}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                mealType={recipe.recipe.mealType}
                // ingredients={recipe.recipe.ingredientLines.map(ingre => ({ingre}))}
              ></Recipe>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;

// OLD SEARCH BOX CODE ...
{
  /* <form className="search-form">
        <input
          type="text"
          className="search-box"
          placeholder="Enter recipe name"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form> */
}
