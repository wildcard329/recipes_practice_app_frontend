import React from 'react';
import { useSelector } from 'react-redux';

import { selectRecipeData } from '../../model/state/selector.js';
import DeleteButton from '../components/buttons/DeleteButton.jsx';
import UpdateButton from '../components/buttons/UpdateButton.jsx';


function Recipe() {
    const recipe = useSelector(selectRecipeData);

    return(
        <div>
            <h2>{recipe.recipe_name}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <UpdateButton id={recipe.id} />
            <DeleteButton id={recipe.id} />
        </div>
    );
};

export default Recipe;
