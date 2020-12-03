import React from 'react';

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
                    </div>
                );
            })};
        </div>
    );
};

export default Recipe;
