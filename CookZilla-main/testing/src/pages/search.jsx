import React, { useState, useEffect } from 'react';
import './search.css'; // Import the CSS file

function Search() {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        if (searchQuery) {
            fetchRecipes();
        }
    }, [searchQuery]);

    const fetchRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=846af040e785484fbe586e9f4e0c4163&number=3`);
            const data = await response.json();
            setRecipes(data.results);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const fetchRecipeDetails = async (recipeId) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=846af040e785484fbe586e9f4e0c4163`);
            const data = await response.json();
            setSelectedRecipe(data);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
        }
    };

    const handleRecipeClick = (recipeId) => {
        fetchRecipeDetails(recipeId);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target);
        const searchText = formData.get('search');
        setSearchQuery(searchText);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" name="search" placeholder="Search..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="recipe-container">
                {recipes.map(recipe => (
                    <div className="recipe-card" key={recipe.id}>
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                        <button onClick={() => handleRecipeClick(recipe.id)} className="recipe-details-button">View Details</button>
                    </div>
                ))}
            </div>
            {selectedRecipe && (
                <div className="selected-recipe">
                    <h2>{selectedRecipe.title}</h2>
                    <img src={selectedRecipe.image} alt={selectedRecipe.title} />
                    <p>{selectedRecipe.summary}</p>
                    <p>Ready in: {selectedRecipe.readyInMinutes} minutes</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
}

export default Search;
