import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../../controller/RecipeController.js';
import { selectRecipeData } from '../../../model/state/selector.js';

function UpdateRecipeForm() {
    const recipe = useSelector(selectRecipeData)
    const history = useHistory();
    const [updatedRecipe, setUpdatedRecipe] = useState({
        recipe_name: recipe.recipe_name || '',
        description: recipe.description || '',
        ingredients: recipe.ingredients || '',
        instructions: recipe.instructions || ''
    });

    const updateRecipe = e => {
        setUpdatedRecipe({...recipe, [e.target.name]: e.target.value});
    };

    const submitRecipe = e => {
        e.preventDefault();
        RecipeController.updateRecipeData(updatedRecipe);
        history.push('/recipes/all');
    };

    return(
        <div>
            <form onSubmit={submitRecipe}>
                <div>
                    <label htmlFor='recipe_name'>Recipe Name</label>
                    <input id='recipe_name' type='text' name='recipe_name' placeholder={recipe.recipe_name} onChange={updateRecipe} />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input id='description' type='text' name='description' placeholder={recipe.description} onChange={updateRecipe} />
                </div>
                <div>
                    <label htmlFor='ingredients'>Ingredients</label>
                    <input id='ingredients' type='text' name='ingredients' placeholder={recipe.ingredients} onChange={updateRecipe} />
                </div>
                <div>
                    <label htmlFor='instructions'>Instructions</label>
                    <input id='instructions' type='text' name='instructions' placeholder={recipe.instructions} onChange={updateRecipe} />
                </div>
                <div>
                    <button onSubmit={submitRecipe}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateRecipeForm;