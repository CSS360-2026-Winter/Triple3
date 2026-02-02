const recipes = {
  1: {
    egg: "Replace the egg with tofu or chickpeas for a delicious, protein-packed alternative!",
    dairy: "This recipe is dairy-free :)",
    gluten: "Switch out the soy sauce for tamari for a yummy, gluten-free alternative!",
    soy: "Leave out the soy sauce or switch it with coconut aminos for a delicious, soy-free alternative!"
  },
  2: {
    egg: "This recipe contains no eggs :)",
    dairy: "You can use some dairy-free cheese instead!",
    gluten: "Use gluten-free corn tortillas or try a lettuce wrap instead!",
    soy: "This recipe is soy-free!"
  },
  3: {
    egg: "This recipe contains no eggs :)",
    dairy: "Instead of butter, use some olive oil!",
    gluten: "Use gluten-free pasta instead!",
    soy: "This recipe is soy-free :)"
  },
  4: {
    egg: "This recipe contains no eggs :)",
    dairy: "Leave out the greek yogurt!",
    gluten: "This recipe is gluten-free :)",
    soy: "This recipe is soy-free :)"
  },
  5: {
    egg: "Replace the egg with tofu or edamame for a delicious, protein-packed alternative!",
    dairy: "This recipe is dairy-free :)",
    gluten: "Use rice noodles, and switch out any soy sauce with tamari!",
    soy: "Leave out the soy sauce or switch it with coconut aminos for a delicious, soy-free alternative!"
  }
};

export const getAllergen = async (recipeNumber, allergen) => {
  return recipes[recipeNumber]?.[allergen.toLowerCase()];

