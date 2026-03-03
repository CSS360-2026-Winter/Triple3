// helpers/ratings.js
import fs from "fs";
import path from "path";

const ratingsFile = path.resolve("./src/data/ratings.json");

// Ensure the data folder and file exist
if (!fs.existsSync(path.dirname(ratingsFile))) fs.mkdirSync(path.dirname(ratingsFile), { recursive: true });
if (!fs.existsSync(ratingsFile)) fs.writeFileSync(ratingsFile, "{}");

export default {
  // Load all ratings from JSON
  getAllRatings() {
    const data = fs.readFileSync(ratingsFile, "utf8");
    return JSON.parse(data || "{}");
  },

  // Save all ratings to JSON
  saveAllRatings(ratings) {
    fs.writeFileSync(ratingsFile, JSON.stringify(ratings, null, 2));
  },

  // Get user's rating for a recipe
  getUserRating(recipeId, userId) {
    const ratings = this.getAllRatings();
    return ratings[recipeId]?.[userId] || null;
  },

  // Add or update user's rating
  setUserRating(recipeId, userId, rating) {
    const ratings = this.getAllRatings();
    if (!ratings[recipeId]) ratings[recipeId] = {};
    ratings[recipeId][userId] = rating;
    this.saveAllRatings(ratings);
  },

  // Compute average rating for a recipe
  getAverageRating(recipeId) {
    const ratings = this.getAllRatings();
    const recipeRatings = ratings[recipeId];
    if (!recipeRatings) return 0;

    const values = Object.values(recipeRatings);
    if (values.length === 0) return 0;

    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
  }
};