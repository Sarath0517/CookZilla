import React from 'react';
import './foodpage.css'; // Import CSS file

const SpaghettiRecipe = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="login.jsx">Login</a>
                        </li>
                        <li>
                            <a href="login.jsx">Register</a>
                        </li>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="container">
                    <img src="italiancuisine.jpg" alt="Italian Cuisine" className="spaghetti" />
                    <div className="wrapper">
                        <div className="recipe">
                            <h1>Spaghetti</h1>
                            <h2 className="ingredients">Ingredients</h2>
                            <ul className="ingredientsul">
                                <li>225g spaghetti pasta</li>
                                <li>2 tablespoons olive oil</li>
                                <li>3 cloves garlic, minced</li>
                                <li>1 small onion, finely chopped</li>
                                <li>400g crushed tomatoes</li>
                                <li>1 teaspoon dried oregano</li>
                                <li>1 teaspoon dried basil</li>
                                <li>Salt and pepper to taste</li>
                                <li>Grated Parmesan cheese (optional)</li>
                                <li>Fresh basil leaves for garnish (optional)</li>
                            </ul>
                            <h2 className="instructions">Instructions</h2>
                            <ol className="instructionsol">
                                <li>Fill a large pot with water and bring it to a boil over high heat.</li>
                                <li>Once the water is boiling, add a pinch of salt and the spaghetti pasta. Stir occasionally to prevent sticking</li>
                                <li>Cook the spaghetti according to the package instructions, usually around 8-10 minutes, or until al dente (firm to the bite).</li>
                                <li>Once cooked, drain the spaghetti in a colander and set aside</li>
                                <li>While the spaghetti is cooking, heat olive oil in a large skillet over medium heat.</li>
                                <li>Add minced garlic and chopped onion to the skillet. Cook for 2-3 minutes, stirring occasionally, until the onion is translucent and fragrant.</li>
                                <li>Pour in the crushed tomatoes and stir to combine with the garlic and onion.</li>
                                <li>Add dried oregano and basil to the sauce. Stir well.</li>
                                <li>Season with salt and pepper to taste. Allow the sauce to simmer gently for about 10-15 minutes, stirring occasionally, until it thickens slightly.</li>
                                <li>Once the sauce is ready, add the cooked spaghetti to the skillet with the sauce.</li>
                                <li>Toss the spaghetti gently with the sauce until it is well coated.</li>
                                <li>Cook for an additional 1-2 minutes, allowing the flavors to meld together.</li>
                                <li>Taste and adjust the seasoning if necessary.</li>
                                <li>Once the spaghetti is ready, transfer it to serving plates or bowls.</li>
                                <li>If desired, sprinkle grated Parmesan cheese on top of each serving.</li>
                                <li>Garnish with fresh basil leaves for extra flavor and presentation.</li>
                                <li>Serve hot and enjoy!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SpaghettiRecipe;
