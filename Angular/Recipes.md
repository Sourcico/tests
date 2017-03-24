# Task
Make a website for entry and display of cooking recipes with Angular 1.X, preferably 1.5 or later.

A recipe consists of:
- Recipe name
- Recipe source (where we have obtained the recipe)
- List of ingredients
- Preparation time
- Preparation instructions.

The ingredient list consists of the names of the ingredients, along with the necessary quantity. The ingredient list can be arbitrarily long or short, but it has to have at least a single ingredient. Possible ingredients are:
- Flour
- Milk
- Oil
- Salt
- Sugar
- Eggs
- Tomatoes
- Peppers
- Cheese
- Potatoes
- Meat

It is not necessary that the web-interface supports adding / removing new ingredient types.

## Recipe entry
When entering a new recipe we need to:
- enter the recipe name (short text)
- enter the recipe source (short text)
- enter the ingredients
    - already entered ingredients should be visible, along with their quantities
    - new ingredients should need to select an ingredient and enter a numeric quantity
- enter the preparation time (hours and minutes)
- enter the preparation instructions (long text)

A recipe must have: Name, preparation time and instructions, and at least one ingredient.

When the new recipe is being entered, the recipe list and the recipe details views should not be visible.
When a recipe is successfully saved, the recipe list should be displayed
It should be possible to access the recipe list without entering a recipe, effectively canceling the entry.

## Recipe list
The recipe list should be shown in a tabular way, with a header and the following columns:
- Automatically generated ID number
- Recipe name
- Recipe source
- Number of ingredients
- Comma separated list of ingredients
    - if the recipe has 3 or less ingredients, show a complete list
    - if the recipe has 4 or more ingredients, show the first three ingredients, followed by ellipsis (...)
- The preparation instructions
    - If the instructions have 50 or less characters they should be shown in full
    - if the instructions have more than 50 characters, only the first 50-ish should be shown, followed by ellipsis.
    - If ellipsis are shown, the last word should be shown in full (should not be cut in half)
- Preparation time
    - The time format should be XX hours XX minutes.
    - If the time is less than 1 full hour, the format should only show the minutes (XX minutes)
- Action (button or link) for display of the complete recipe. When the action is executed, the recipe details view is shown
- Action (button or link) for recipe deletion. When the action is executed, the user should be presented with a confirmation dialog. If a confirmation is received, the recipe is deleted.

When the recipe list is shown, the recipe entry and the recipe details views should not be visible.

## Recipe details
The recipe details should display all entered data about the recipe.
The left-hand side should contain
- Recipe name
- Recipe source
- Ingredients display, including ingredient quantities.
- Preparation time in the same format as in the recipe list
- Action (button or link) for recipe deletion. When the action is executed, the user should be presented with a confirmation dialog. If a confirmation is received, the recipe is deleted, and the recipe list is shown.

The right hand side should contain the full instructions for the recipe.

When the recipe details is shown, he recipe entry and the recipe list views should not be visible.
It should be possible to access the recipe list from the recipe details view.

## Notes
The solution should use services with dependency injection for data access, and directives as needed.  
The solution must include a unit testing architecture, with representative unit tests.  
The data should be persistent within the page session, i.e. it's ok to be lost upon page refresh (a.k.a. in-memory values are good enough).
However, it should be possible to change the application to use a persistent backend with minimum work possible, e.g. using [http-server](https://www.npmjs.com/package/http-server), or something similar
