import React, { useState } from 'react';
import axios from 'axios';

function AddRecipeForm() {
    const [recipe, setRecipe] = useState({
        recipe_name: '',
        description: '',
        ingredients: '',
        instructions: ''
    })

    const enterRecipe = e => {
        setRecipe({...recipe, [e.target.name]: e.target.value});
    };

    const submitRecipe = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/recipes/', recipe)
            .then(res => {
                console.log('output: ', res)
            })
    }

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
                    <button onSubmit={submitRecipe}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddRecipeForm;
