import * as Actions from './action.js';

const initialState = {
    recipesList: []
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.GET_RECIPES_LIST:
            return {
                ...state,
                recipesList: [...action.recipesList]
            };
        default:
            return state;
    };
};