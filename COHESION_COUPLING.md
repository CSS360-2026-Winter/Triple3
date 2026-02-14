# Cohesion and Coupling

## Coupling: Our cooking bot has the following dependencies between modules:

### 1. External Coupling:
All our command files depend on discord.js. If Discord's API changes, our commands will no longer function.

### 2. Common Coupling:
pick.js and allergen.js (commands) rely on state.js to communicate data (user's chosen recipe).

### 3. Temporal Coupling:
pick.js must be execute before allergen.js because allergen.js requires the user recipe which is set by pick.

### 4. Data Coupling:
allergen.js relies on data in allergen.js (helper), and pick.js relies on data in recipes.js (helper).


### The following diagram displays the module dependencies:
<img src = "control-flowDiagrams/cohesion.jpg">


## Cohesion

The main kind of cohesion exhibited in our code is functional cohesion, since each of our modules mainly focus on a single, defined task. 
Recipes.js (command) displays recipes for the user to choose from. Pick.js displays the recipe chosen by the user. Allergen.js offers an
allergen substitution for the allergen chosen by the user. The recipes.js and allergen.js helper files each only work to provide the relevant
information (recipes and allergen substitutions) for their respective pick.js and allergen.js command files. Finally, the state.js file
manages user session data.

Although weaker, our code also exhibits some informational cohesion. Informational cohesion can be seen with our state.js 
module, since tasks are grouped based on how they operate on our userSessions map data structure (the only functions included in this file
are setUserRecipe, getUserRecipe, and clearUserRecipe).

# Suggested Improvements

Although all modules are cohesive, one note is that recipes.js (command) stores the recipe names to be displayed, despite them being 
already included as part of the recipes object in recipes.js (helper). This is a slight redundancy. 


