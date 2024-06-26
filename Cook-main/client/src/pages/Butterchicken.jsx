// ButterChicken.js

import React from 'react';
import './Butterchicken.css'; // Import your CSS file

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
        <li>500g boneless, skinless chicken thighs or breasts, cut into bite-sized pieces</li>
        <li>1/2 cup plain yogurt</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 teaspoon ground cumin</li>
        <li>1 teaspoon ground coriander</li>
        <li>1/2 teaspoon turmeric powder</li>
        <li>1/2 teaspoon chili powder</li>
        <li>Salt to taste</li>
        <li>Juice of 1 lemon</li>
        <li>2 tablespoons butter</li>
        <li>1 tablespoon vegetable oil</li>
        <li>2 onions, finely chopped</li>
        <li>4 cloves garlic, minced</li>
        <li>1-inch piece of ginger, grated</li>
        <li>1 can (400g) crushed tomatoes</li>
        <li>1 teaspoon ground cumin</li>
        <li>1 teaspoon ground coriander</li>
        <li>1 teaspoon garam masala</li>
        <li>1/2 teaspoon chili powder (adjust to taste)</li>
        <li>1/2 cup heavy cream</li>
        <li>1 tablespoon honey or sugar (optional, to balance acidity)</li>
        <li>Salt to taste</li>
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
        <li>Marinate the chicken: In a bowl, mix together the yogurt, ginger-garlic paste, ground cumin, ground coriander, turmeric powder, chili powder, salt, and lemon juice. Add the chicken pieces to the marinade, ensuring they are well coated. Cover and refrigerate for at least 1 hour, or overnight for best results.</li>
        <li>Cook the chicken: Preheat your oven to 200°C (400°F). Arrange the marinated chicken pieces on a baking sheet lined with parchment paper. Bake for 15-20 minutes, or until the chicken is cooked through and lightly browned. Alternatively, you can grill the chicken on a barbecue or cook it in a skillet until browned on all sides. Set aside.</li>
        <li>Prepare the sauce: In a large skillet or saucepan, melt the butter and vegetable oil over medium heat. Add the chopped onions and sauté until they turn soft and translucent, about 5-7 minutes. Add the minced garlic and grated ginger, and cook for another 2 minutes until fragrant.</li>
        <li>Simmer the sauce: Stir in the crushed tomatoes, ground cumin, ground coriander, garam masala, and chili powder. Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, until it thickens and the flavors meld together.</li>
        <li>Finish the sauce: Stir in the heavy cream and honey or sugar (if using) into the sauce. Season with salt to taste. Simmer for another 5 minutes, allowing the flavors to meld together.</li>
        <li>Add the cooked chicken: Add the baked or grilled chicken pieces to the sauce. Stir until the chicken is coated with the sauce and heated through.</li>
        <li>Serve: Garnish the butter chicken with fresh cilantro leaves and serve hot with steamed rice, naan bread, or roti.</li>
      </ol>
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <div className="container">
        <img src="Butterchicken.jpg" alt="Italian Cuisine" className="spaghetti" />
        <div className="wrapper">
          <div className="recipe">
            <h1>Butter Chicken</h1>
            <Ingredients />
            <Instructions />
          </div>
        </div>
      </div>
    </main>
  );
}

function ButterChicken() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default ButterChicken;
