import React from 'react';
import DeleteButton from '../components/buttons/DeleteButton.jsx';

function Recipe(props) {
    const recipes = props.recipes;

    return(
        <div>
            {recipes && recipes.map(recipe => {
                return(
                    <div key={recipe.id}>
                        <h2>{recipe.recipe_name}</h2>
                        <p>{recipe.description}</p>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.instructions}</p>
                        <DeleteButton id={recipe.id} />
                    </div>
                );
            })};
        </div>
    );
};

export default Recipe;
