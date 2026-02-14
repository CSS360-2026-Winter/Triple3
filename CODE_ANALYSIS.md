# Code Analysis Report — Cooking Discord Bot

# Code Analysis 

We analyzed our code using: Test inputs, ESLint, and runtime testing.

# Findings 
1. If the bot takes more than 3 seconds to respond, the interaction times out and throws an error: "Application did not respond".
2. The /allergen command depended on a recipe already being selected, so if the user ran /allergen before /pick, then the bot doesn't work as expected.
We can fix this by validating that the recipe has already been picked.
3. The allergen list displays allergens that aren't in the recipe picked. We can fix this by having a seperate allergen list state for each recipe.

# Cohesion and Coupling

Our cooking bot has the following dependencies between modules:

#### External Coupling:
All our command files depend on discord.js. If Discord's API changes, our commands will no longer function.

#### Common Coupling:
pick.js and allergen.js (commands) rely on state.js to communicate data (user session and chose recipe).

#### Temporal Coupling:
pick.js must be execute before allergen.js because allergen.js relies on the user recipe set by pick.

#### Data Coupling:
allergen.js relies on data in allergen.js (helper), and pick.js relies on data in recipes.js (helper)

#### The following diagram displays the module dependencies:
<img src = "control-flowDiagrams/cohesion.jpg">
