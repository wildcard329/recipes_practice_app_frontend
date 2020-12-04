import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import RecipesList from '../components/lists/RecipesList.jsx';
import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList } from '../../model/state/selector.js';

function Dashboard() {
    const recipes = useSelector(selectRecipeList)

    useEffect(() => {
        RecipeController.getRecipesList();
    }, [recipes]);

    return(
        <div>
            <RecipesList recipes={recipes} />
        </div>
    );
};

export default Dashboard;
