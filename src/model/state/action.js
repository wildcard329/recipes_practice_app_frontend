export const GET_RECIPES_LIST = 'GET_RECIPES_LIST';
export const GET_RECIPE_DATA = 'GET_RECIPE_DATA';

export const getRecipesList = recipesList => {
    return { type: GET_RECIPES_LIST, recipesList };
};

export const getRecipeData = recipeData => {
    return { type: GET_RECIPE_DATA, recipeData };
};
