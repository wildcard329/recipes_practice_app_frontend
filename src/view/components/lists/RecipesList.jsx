import React from 'react';
import { useHistory } from 'react-router-dom';

function RecipesList(props) {
    const recipes = props.recipes;
    const history = useHistory();

    const addRecipe = e => {
        e.preventDefault();
        history.push('/recipes/add')
    }

    return(
        <div>
            {recipes && recipes.map(recipe => {
                return(
                    <div key={recipe.id}>
                        <h3>{recipe.recipe_name}</h3>
                        <p>{recipe.description}</p>
                    </div>
                );
            })};
            <button onClick={addRecipe}>Add Recipe</button>
        </div>
    );
};

export default RecipesList;
