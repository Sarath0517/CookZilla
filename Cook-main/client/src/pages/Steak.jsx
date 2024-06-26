// Steak.js

import React from 'react';
import './Steak.css'; // Import your CSS file

function Header() {
  return (
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
  );
}

function Ingredients() {
  return (
    <div>
      <h2 className="ingredients">Ingredients</h2>
      <ul className="ingredientsul">
        <li>4 boneless, skinless chicken breasts</li>
        <li>Salt and pepper to taste</li>
        <li>2 tablespoons olive oil</li>
        <li>2 cloves garlic, minced</li>
        <li>1 teaspoon dried thyme (or any other preferred herbs)</li>
        <li>1 teaspoon paprika (optional)</li>
        <li>2 tablespoons butter</li>
      </ul>
    </div>
  );
}

function Instructions() {
  return (
    <div>
      <h2 className="instructions">Instructions</h2>
      <ol className="instructionsol">
        <li>Prepare the chicken: Start by pounding the chicken breasts to an even thickness, about 1/2 to 3/4 inch thick. This ensures even cooking.</li>
        <li>Season the chicken: Season both sides of the chicken breasts with salt, pepper, and any additional herbs or spices you like. Paprika adds a nice color and flavor but feel free to customize to your taste.</li>
        <li>Sear the chicken: Heat olive oil in a large skillet over medium-high heat. Add minced garlic and cook for about 30 seconds until fragrant. Place the seasoned chicken breasts in the skillet and cook for about 5-6 minutes on each side, or until golden brown and cooked through. Cooking time may vary depending on the thickness of your chicken breasts. You can also grill the chicken if you prefer.</li>
        <li>Add butter: Once the chicken is cooked through, add butter to the skillet and let it melt, spooning it over the chicken breasts. This adds richness and flavor.</li>
        <li>Rest and serve: Remove the chicken from the skillet and let it rest for a few minutes before serving. This allows the juices to redistribute and keeps the chicken moist. Serve hot with your favorite sides like mashed potatoes, steamed vegetables, or a salad.</li>
      </ol>
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <div className="container">
        <img src="Steak.jpg" alt="Italian Cuisine" className="spaghetti" />
        <div className="wrapper">
          <div className="recipe">
            <h1>Steak</h1>
            <Ingredients />
            <Instructions />
          </div>
        </div>
      </div>
    </main>
  );
}

function Steak() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default Steak;
