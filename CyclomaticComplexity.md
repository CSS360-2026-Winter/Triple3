## Cyclomatic Complexity Test 
## This complexity test measures the number of independent execution paths through a function. In other words, it counts how many decisions you method makes. Within all our command files, the complexity test will only check command functions in each, as they are the core runners of our bot. 

# TEST FORMULA: M (Cyclomatic Complexity Test) = 1 + Decision Points
## The test focuses on the following core words: if, else if, for, while, switch, catch, &&, ||, & ?:.
## This phrases forms the decision points, and the overall count. The test is done manually reading through each function within the command files.

##
## #1: For our first command allergen.js 

## async execute(interaction) {
    ## const allergen = interaction.options.getString("name");
    ## const recipeNumber = getUserRecipe(interaction.user.id);
    ## //const recipeNumber = 1; // Temporary fix until state management is implemented

    ## const response = await getAllergen(recipeNumber, allergen);

    ## await interaction.reply({
      ## content: response ?? "Sorry — I don't have a substitution for that allergen yet!"
    ## });
## },
## This command within the allergen.js file no if, no loops, and no branching, which concludes 1 pathway. Because there's not multiple pathways, it's a sign the code is easier to navigate through, it's hard to mess up, and fewer bugs. 
## 
## Overall Score
## Decision Points = 0
## Cyclomatic Complexity = 1
## --------------------------------------------------------------------------------------------------------------------------------------
##
## #2: Second Command: pick.js
    ## async execute(interaction) {
    ## const choice = interaction.options.getInteger("number");
    ## const recipe = recipesArray[choice];

    ## if (!recipe) {
     ## return interaction.reply("❌ Invalid recipe number. Please pick 1–5.");
    ## }

    ## setUserRecipe(interaction.user.id, choice);

    ## let response = `🍽 **${recipe.name}**\n\n`;

    ## response += "**Ingredients:**\n";
    ## recipe.ingredients.forEach(i => {
     ## response += `• ${i}\n`;
    ## });

    ## response += "\n**Instructions:**\n";
    ## recipe.instructions.forEach((step, i) => {
     ## response += `${i + 1}. ${step}\n`;
    ## });

    ## response += "\n⚠️ **If you have ONE of the following allergens:**\n";
    ## response += "**egg, dairy, gluten, soy**\n";
    ## response += "Please enter one allergen using the /allergen command to receive an alternative recipe.";

    ## await interaction.reply(response);
 ##  },
 ##
 ## This command within the pick.js file has 4 different execution paths, is pretty manageable, but exits super early, and would need at least 4 test cases to fully recover it. The 4 paths include invalid recipe, valid recipe, & ingredients/instructions loop path. Its fairly clean, and simple.

 ## Overall Score
 ## Decision Points: 3
 ## Cyclomatic Complexity: 4
 ## ------------------------------------------------------------------------------------------------------------------------------------
 ## 
 ## #3: Third Command: recipes.js
    ## async execute(interaction) {
    ## let message = "Here are 5 recipes you can choose from:\n\n";
    ## recipes.forEach((r, i) => {
      ## message += `${i + 1}. ${r}\n`;
    ## });

    ## message += "\nTell me which one you want by entering the recipe number.";

    ## await interaction.reply(message);
  ## }
  ##
  ## This command within recipes.js file has no specific branching behavior, focuses on building a message, loops through the recipes, and has manual responses upon each user. 

  ## Overall Score
  ## Decision Points: 1
  ## Cyclomatic Complexity: 2
  ## ----------------------------------------------------------------------------------------------------------------------------------
 ##
  ## Efforts & Findings

  ## Efforts: The purpose of this test was to determine the level of complexity within each of our commands. We also wanted to see the number of possible paths that can occur. In our case, our complexity numbers 1,2,4 are extremely low. 

  ## Findings: Our commands are simpler, predictable, they are easy to test depending on what potential tests we come up with, and likely have no hidden bugs. Since our numbers are on the lower scale of the complexity test, we don't need to worry about this going forward. 


