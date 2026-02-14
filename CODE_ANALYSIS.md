# Code Analysis Report — Cooking Discord Bot

# Code Analysis 

We analyzed our code using: Test inputs, ESLint, and runtime testing. We also reviewed our code for coupling and cohesion. Additionally, we have conducted a cyclomatic complexity test. 

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

## Cyclomatic Complexity Test
Efforts: The purpose of this cyclomatic complexity test was to evaluate the structural complexity of each command within our Discord cooking bot. Specifically, we wanted to measure how many independent execution paths exist in each method and determine how much branching logic is present. By calculating the complexity values (1, 2, and 4), we were able to objectively assess how complicated our command handlers are.

Findings: The results show that our command handlers have very low cyclomatic complexity. This indicates that the functions are simple, predictable, and follow clear execution paths. Because there are minimal branching structures, the commands are easier to test and maintain. Lower complexity also reduces the likelihood of hidden bugs caused by deeply nested or overly conditional logic.

Since our complexity values fall within the low range, there are no immediate concerns regarding structural risk or maintainability. Overall, this assessment confirms that our bot’s command architecture is clean and well-organized, and it provides a baseline understanding of the current complexity levels within our files.