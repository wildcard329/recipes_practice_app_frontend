import store from '../store.js';
import * as Action from '../model/state/action.js';
import RecipeService from '../model/services/RecipeServices.js';

class RecipeController{
    async getRecipesList(){
        const recipesList = await RecipeService.getRecipesList();
        store.dispatch(Action.getRecipesList(recipesList));
    };
};

export default new RecipeController();
