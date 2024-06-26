// Ramen.js

import React from 'react';
import './foodpage.css'; // Import your CSS file

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="login..jsx">Login</a>
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
        <li>4 cups chicken or vegetable broth</li>
        <li>2 cups water</li>
        <li>2 packs of ramen noodles (discard the seasoning packets or save for another use)</li>
        <li>2 tablespoons soy sauce</li>
        <li>1 tablespoon miso paste (optional, for extra flavor)</li>
        <li>1 tablespoon sesame oil</li>
        <li>2 cloves garlic, minced</li>
        <li>1-inch piece of ginger, grated</li>
        <li>2 green onions, chopped</li>
        <li>Toppings (optional):<br />
          - Sliced cooked chicken, pork, or tofu<br />
          - Soft-boiled or hard-boiled eggs<br />
          - Sliced mushrooms<br />
          - Baby spinach or other leafy greens<br />
          - Corn kernels<br />
          - Bamboo shoots<br />
          - Nori (seaweed sheets)<br />
          - Toasted sesame seeds<br />
          - Chili oil or sriracha (for spice)</li>
      </ul>
    </div>
  );
}

function Instructions() {
  return (
    <div>
      <h2 className="instructions">Instructions</h2>
      <ol className="instructionsol">
        <li>Prepare the broth: In a large pot, combine the chicken or vegetable broth with water. Bring to a simmer over medium heat.</li>
        <li>Add flavorings: Stir in the soy sauce, miso paste (if using), sesame oil, minced garlic, and grated ginger. Let the broth simmer for about 10-15 minutes to allow the flavors to meld together.</li>
        <li>Cook the noodles: While the broth is simmering, cook the ramen noodles according to the package instructions in a separate pot. Once cooked, drain and set aside.</li>
        <li>Assemble the ramen bowls: Divide the cooked noodles among serving bowls. Ladle the hot broth over the noodles, ensuring that each bowl gets a generous amount of broth.</li>
        <li>Add toppings: Customize your ramen bowls with your choice of toppings. This could include sliced cooked chicken, pork, or tofu, soft-boiled or hard-boiled eggs, sliced mushrooms, baby spinach or other leafy greens, corn kernels, bamboo shoots, nori, toasted sesame seeds, and a drizzle of chili oil or sriracha for heat.</li>
        <li>Serve: Serve the ramen hot, garnished with chopped green onions for added freshness.</li>
      </ol>
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <div className="container">
        <img src="Ramen.jpg" alt="Italian Cuisine" className="spaghetti" />
        <div className="wrapper">
          <div className="recipe">
            <h1>Ramen</h1>
            <Ingredients />
            <Instructions />
          </div>
        </div>
      </div>
    </main>
  );
}

function Ramen() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default Ramen;
