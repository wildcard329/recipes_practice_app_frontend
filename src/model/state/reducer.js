import * as Actions from './action.js';

const initialState = {
    recipesList: [],
    recipeData: {}
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.GET_RECIPES_LIST:
            return {
                ...state,
                recipesList: [...action.recipesList]
            };
        case Actions.GET_RECIPE_DATA:
            return {
                ...state,
                recipeData: {...action.recipeData}
            };
        case Actions.UPDATE_RECIPE_RECORD:
            return {
                ...state,
                recipeData: {...action.payload}
            }
        default:
            return state;
    };
};
