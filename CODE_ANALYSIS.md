# Code Analysis Report — Cooking Discord Bot

# Code Analysis 

We analyzed our code using: Test inputs, ESLint, and runtime testing. We also reviewed our code for coupling and cohesion.

## Threat Model Findings 
1. If the bot takes more than 3 seconds to respond, the interaction times out and throws an error: "Application did not respond".
2. The /allergen command depended on a recipe already being selected, so if the user ran /allergen before /pick, then the bot doesn't work as expected.
We can fix this by validating that the recipe has already been picked.
3. The allergen list displays allergens that aren't in the recipe picked. We can fix this by having a seperate allergen list state for each recipe.

## Coupling and Cohesion Findings
1. Our model exhibits controlled external, commom, temporal, and data coupling.
2. Code shows good organization, coupling is low with no problematic dependencies.
3. Code shows strong functional and informational cohesion.
4. Command recipe.js can be improved to also rely on recipes.js helper (improving cohesion).
