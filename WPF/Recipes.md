# Task
Make an application for entry and display of cooking recipes

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

It is not necessary that the interface supports adding / removing new ingredient types.

## Recipe entry
When entering a new recipe we need to:
- enter the recipe name (short text)
- enter the recipe source (short text)
- enter the ingredients
    - already entered ingredients should be visible, along with their quantities
    - for new ingredients one would need to select an ingredient and enter a numeric quantity
- enter the preparation time (hours and minutes)
- enter the preparation instructions (long text)

A recipe must have: Name, preparation time and instructions, and at least one ingredient.

When a recipe is successfully saved, the recipe list should be displayed
It should be possible to cancel the entry of a recipe.

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

## Recipe details
The recipe details should display all entered data about the recipe.
It should not be the same view as when entering the recipe.
The following data should be shown:
- Recipe name
- Recipe source
- Ingredients display, including ingredient quantities.
- Preparation time in the same format as in the recipe list
- Action (button or link) for recipe deletion. When the action is executed, the user should be presented with a confirmation dialog. If a confirmation is received, the recipe is deleted, and the recipe list is shown.
- The full instructions for the recipe.

## Notes
The data can be persistent in-memory, i.e. it's ok to be lost upon app restart.
However, it should be possible to change the application to use a persistent database backend with minimum work possible
