# Task
Make a back-end, including a relational database, for an application that will be used for entry and display of cooking recipes

A recipe consists of:
- Recipe name
- Recipe source (where we have obtained the recipe)
- List of ingredients
- Preparation time
- Preparation instructions.

The ingredient list consists of the names of the ingredients, along with the necessary quantiy. The ingredient list can be arbitrarily long or short, but it has to have at least a single ingredient. Possible ingredients are:
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

There should be some way that the client can request the list of possible ingredients from the server.

## Recipe entry
When entering a new recipe we need to:
- enter the recipe name (short text)
- enter the recipe source (short text)
- enter the ingredients (type and quantity for each ingredient)
- enter the preparation time (hours and minutes)
- enter the preparation instructions (long text)

A recipe must have: Name, preparation time and instructions, and at least one ingredient.

## Recipe retrieval
The user should be able to get a list of all the recipes from the server. The recipe list should have following columns:
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

## Recipe search
The user should be able to get a filtered list of recipes from the server. This can either be implemented as separate with the general retrieval, or integrated with that functionality, per candidate preference. The user should be able to do the following filtering operations:
- Only get the recipes that have a specified ingredient (i.e. all recipes with milk)
- Only get the recipes whose name includes a specified string
- Only get the recipes whose preparation time is less than a specified number of minutes.

The format of the result should be identical to the recipe retrieval functionality.

## Recipe details
The user should be able to get all the data about a recipe, by specifying the recipe ID

The server response should contain: 
- Automatically generated ID number
- Recipe name
- Recipe source
- Ingredients display, including ingredient quantities.
- Preparation time in minutes
- The full preparation instructions