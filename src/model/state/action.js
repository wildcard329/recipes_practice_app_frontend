export const GET_RECIPES_LIST = 'GET_RECIPES_LIST';

export const getRecipeList = recipeList => {
    return { type: GET_RECIPES_LIST, recipeList };
};
