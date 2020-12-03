export const GET_RECIPES_LIST = 'GET_RECIPES_LIST';

export const getRecipesList = recipesList => {
    return { type: GET_RECIPES_LIST, recipesList };
};
