import React from 'react';
import { useSelector } from 'react-redux';

import { selectRecipeData, selectRecipeList } from '../../model/state/selector.js';
import DeleteButton from '../components/buttons/DeleteButton.jsx';


function Recipe() {
    const recipe = useSelector(selectRecipeData);
    console.log(recipe)
    return(
        <div>
            <h2>{recipe.recipe_name}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <DeleteButton id={recipe.id} />
        </div>
    );
};

export default Recipe;
