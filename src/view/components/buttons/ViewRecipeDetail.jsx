import React from 'react';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../../controller/RecipeController.js';

function ViewRecipeData({id}) {
    const history = useHistory();

    const viewRecipeDetails = e => {
        e.preventDefault();
        RecipeController.getRecipeData(id)
        history.push('/recipe')
    };
    return(
        <div>
            <button onClick={viewRecipeDetails}>More</button>
        </div> 
    )
};

export default ViewRecipeData;
