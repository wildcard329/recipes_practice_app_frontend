import React from 'react';

function RecipesList(props) {
    const recipes = props.recipes;
    
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
        </div>
    );
};

export default RecipesList;
