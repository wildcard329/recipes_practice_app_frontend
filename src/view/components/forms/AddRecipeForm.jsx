import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeController from '../../../controller/RecipeController';
import BrowseRecipes from '../buttons/BrowseRecipes';

function AddRecipeForm() {
    const [recipe, setRecipe] = useState({
        recipe_name: '',
        description: '',
        ingredients: '',
        instructions: ''
    })
    const history = useHistory();

    const enterRecipe = e => {
        setRecipe({...recipe, [e.target.name]: e.target.value});
    };

    const cancel = e => {
        e.preventDefault();
        history.push('/recipes/all');
    }

    const submitRecipe = e => {
        e.preventDefault();
        RecipeController.addRecipeData(recipe);
        history.push('/recipes/all');
    };

    return(
        <div>
            <form onSubmit={submitRecipe}>
                <div>
                    <label htmlFor='recipe_name'>Recipe Name</label>
                    <input id='recipe_name' type='text' name='recipe_name' onChange={enterRecipe} />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input id='description' type='text' name='description' onChange={enterRecipe} />
                </div>
                <div>
                    <label htmlFor='ingredients'>Ingredients</label>
                    <input id='ingredients' type='text' name='ingredients' onChange={enterRecipe} />
                </div>
                <div>
                    <label htmlFor='instructions'>Instructions</label>
                    <input id='instructions' type='text' name='instructions' onChange={enterRecipe} />
                </div>
                <div>
                    <button onClick={cancel}>Cancel</button>
                    <button onSubmit={submitRecipe}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddRecipeForm;
