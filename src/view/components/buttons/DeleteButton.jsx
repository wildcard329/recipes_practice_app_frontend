import React from 'react';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../../controller/RecipeController.js';

function DeleteButton({id}) {
    const history = useHistory();

    const deleteRecipe = e => {
        e.preventDefault();
        RecipeController.deleteRecipe(id)
        history.push('/recipes/all')
    }

    return(
        <div>
            <button onClick={deleteRecipe}>Delete</button>
        </div>
    )
}

export default DeleteButton;
