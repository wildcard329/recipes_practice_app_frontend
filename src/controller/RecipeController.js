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
        console.log('controller ',recipe)
        await RecipeService.addRecipeData(recipe);
        store.dispatch(Action.addRecipeData(recipe))
    }
};

export default new RecipeController();
