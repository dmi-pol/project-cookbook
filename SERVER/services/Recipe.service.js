const { Recipe } = require("../db/models");

class RecipeService {
  static async getRecipes() {
    try {
      return await Recipe.findAll();
    } catch (error) {
      return error;
    }
  }

  static async createRecipe(data) {
    try {
      return Recipe.create(data);
    } catch (error) {
      return error;
    }
  }

  static async updateRecipe(id, data, userId) {
    try {
      const recipe = await Recipe.findOne({ where: { id, userId } });

      if (recipe) {
        return await recipe.update(data);
      } else {
        return { message: "Cat not found" };
      }
    } catch (error) {
      console.log(error);

      return error;
    }
  }

  static async deleteRecipe(id, userId) {
    try {
      const recipe = await Recipe.findOne({ where: { id, userId } });
      if (recipe) {
        await recipe.destroy();
        return { isDeleted: true, message: "Success" };
      } else {
        return { isDeleted: false, message: "Recipe not found" };
      }
    } catch (error) {
      return error;
    }
  }
}

module.exports = RecipeService;
