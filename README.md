
# Triple3: Cooking Bot

<img src="https://static.vecteezy.com/system/resources/previews/025/894/560/non_2x/cute-little-chef-panda-cooking-food-flat-cartoon-style-vector.jpg" alt="image of cooking" width="200" style="border:100px solid black"/>

## Cooking Bot — Version 2.0

The Triple3 Cooking Bot is a Discord bot designed to help users quickly find simple meals, view ingredients and instructions, filter recipes by cuisine, check nutritional information, and rate recipes — all directly inside a Discord server.

Instead of searching the internet for quick meals, users can interact with the bot using slash commands and receive structured recipe information immediately.

---

## What’s New in Version 2
Version 2 expands the bot from a small demo recipe system into a full interactive recipe assistant.

New features include:
- Expanded recipe database (25+ recipes)
- Cuisine filtering
- Recipe rating system
- Viewing average ratings
- Nutritional information lookup
- Improved navigation and instructions
- Help guidance after viewing recipes
- A timer feature where users can input a time of their choice

---

## Features

### Recipe Browsing
Users can view a full list of recipes and select one to see:
- Ingredients
- Step-by-step instructions
- Allergen warnings

### Cuisine Filtering
Users can filter recipes by cuisine (ex: Italian, Chinese, Mexican, etc.) using a dropdown menu.  
The bot will display only recipes belonging to that cuisine and allow the user to choose from the filtered list.

### Allergen Alternatives
After selecting a recipe, users can request alternatives if they have allergies (egg, dairy, gluten, soy).  
The bot suggests ingredient substitutions where available.

### Recipe Ratings
Users can:
- Rate a recipe
- View the average rating of a recipe

### Nutritional Information
Users can request nutrition information for a recipe using the `/nutrition` command.

The bot provides basic nutritional values associated with the selected recipe.

### Timer 
Users can enter a timer length of their choice to keep track of cooking time. 
The timer beeps when the time runs out.

---

## How to Use the Bot

Start by browsing the available recipes:
/recipes

You can also browse by cuisine:
/cuisine

After selecting a cuisine, choose a recipe using:
/pick number:X


---

## Command List

| Command | Description |
|--------|--------|
| `/recipes` | Displays the full recipe list |
| `/cuisine` | Filter recipes by cuisine using a dropdown |
| `/pick number:X` | Select a recipe to view ingredients and instructions |
| `/allergen name:<allergen>` | Suggests substitutions for allergens |
| `/nutrition:<recipe name>` | Shows nutritional information for the selected recipe |
| `/rate` | Rate a recipe |
| `/ratings` | View the average rating of a recipe |
| `/voiceTimer:<minutes> <seconds>` | Allows user to set a timer for a length of their choice in minutes and seconds |

---

## Example Workflow

1. View all recipes: /recipes
2. Filter by cuisine: /cuisine
3. Choose a recipe: /pick:3
4. Request allergen alternative: /allergen name:dairy
5. Check nutrition: /nutrition:Quick Ramen
6. Set a timer: timer/2
7. Rate the recipe: /rate
8. View Ratings: /ratings

