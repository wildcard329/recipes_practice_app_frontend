import store from '../store.js';
import * as Action from '../model/state/action.js';
import RecipeService from '../model/services/RecipeServices.js';

class RecipeController{
    async getRecipesList(){
        const recipesList = await RecipeService.getRecipesList();
        store.dispatch(Action.getRecipesList(recipesList));
    };

    async getRecipeData(id) {
        const recipeData = await RecipeService.getRecipeData(id);
        store.dispatch(Action.getRecipeData(recipeData));
    };

    async addRecipeData(recipe) {
        await RecipeService.addRecipeData(recipe);
    };

    async updateRecipeData(recipe) {
        await RecipeService.updateRecipeData(recipe);
    };

    async deleteRecipe(id) {
        await RecipeService.deleteRecipe(id);
    };
};

export default new RecipeController();
