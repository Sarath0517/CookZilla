// FishCurry.js

import React from 'react';
import './Fishcurry.css'; // Import your CSS file

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="login">Login</a>
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
        <li>500g fish fillets (such as kingfish, tilapia, or any firm white fish)</li>
        <li>2 tablespoons coconut oil</li>
        <li>1 teaspoon mustard seeds</li>
        <li>10-12 curry leaves</li>
        <li>2 medium onions, finely chopped</li>
        <li>2 tomatoes, chopped</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>2 green chilies, slit lengthwise</li>
        <li>1 tablespoon Kashmiri chili powder (for color, adjust to taste for spice level)</li>
        <li>1/2 teaspoon turmeric powder</li>
        <li>1 teaspoon coriander powder</li>
        <li>1/2 teaspoon fenugreek seeds</li>
        <li>1 cup thick coconut milk</li>
        <li>Salt to taste</li>
        <li>Water, as needed</li>
        <li>Fresh cilantro leaves for garnish</li>
      </ul>
    </div>
  );
}

function Instructions() {
  return (
    <div>
      <h2 className="instructions">Instructions</h2>
      <ol className="instructionsol">
        <li>Prepare the fish: Rinse the fish fillets under cold water and pat them dry with paper towels. Cut the fish into medium-sized pieces and set aside.</li>
        <li>Make the curry base: Heat coconut oil in a large pan or pot over medium heat. Add mustard seeds and let them splutter. Then add fenugreek seeds and curry leaves. Sauté for a few seconds until fragrant.</li>
        <li>Add aromatics: Add finely chopped onions and sauté until they turn translucent. Then add ginger-garlic paste and slit green chilies. Sauté for another couple of minutes until the raw smell of ginger-garlic paste disappears.</li>
        <li>Spice it up: Reduce the heat to low and add Kashmiri chili powder, turmeric powder, and coriander powder. Mix well and cook for a minute to toast the spices, being careful not to burn them.</li>
        <li>Add tomatoes: Add chopped tomatoes to the pan and cook until they turn mushy and the oil starts to separate from the masala.</li>
        <li>Create the curry: Pour in the thick coconut milk and season with salt to taste. Add water as needed to adjust the consistency of the curry. Bring the curry to a gentle simmer.</li>
        <li>Add the fish: Once the curry is simmering, gently add the fish pieces to the pan. Ensure that each piece is coated with the curry. Cover the pan and let the fish cook in the curry for about 8-10 minutes, or until the fish is cooked through and flakes easily with a fork.</li>
        <li>Garnish and serve: Once the fish is cooked, remove the pan from the heat. Garnish with fresh cilantro leaves.</li>
        <li>Serve: Serve the Kerala-style fish curry hot with steamed rice or appam (rice pancakes) for a delicious South Indian meal.</li>
      </ol>
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <div className="container">
        <img src="fishcurry.jpg" alt="Italian Cuisine" className="spaghetti" />
        <div className="wrapper">
          <div className="recipe">
            <h1>Kerala Style Fish Curry</h1>
            <Ingredients />
            <Instructions />
          </div>
        </div>
      </div>
    </main>
  );
}

function FishCurry() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default FishCurry;
