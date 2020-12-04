export const GET_RECIPES_LIST = 'GET_RECIPES_LIST';
export const GET_RECIPE_DATA = 'GET_RECIPE_DATA';

export const UPDATE_RECIPE_RECORD = 'UPDATE_RECIPE_RECORD';

export const getRecipesList = recipesList => {
    return { type: GET_RECIPES_LIST, recipesList };
};

export const getRecipeData = recipeData => {
    return { type: GET_RECIPE_DATA, recipeData };
};


export const updateRecipeRecord = recipeData => {
    return { type: UPDATE_RECIPE_RECORD, recipeData };
};
