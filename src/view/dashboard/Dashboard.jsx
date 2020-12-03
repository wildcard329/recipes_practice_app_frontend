import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';
import RecipesList from '../components/lists/RecipesList.jsx';
import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList } from '../../model/state/selector.js';

function Dashboard() {
    // const [recipes, setRecipes] = useState([]);
    const recipes = useSelector(selectRecipeList)

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:5000/api/recipes/')
    //         .then(res => {
    //             setRecipes(res.data)
    //         });
    // }, []);

    useEffect(() => {
        RecipeController.getRecipesList();
    }, []);

    return(
        <div>
            <RecipesList recipes={recipes} />
            {/* <Recipe recipes={recipes} /> */}
        </div>
    );
};

export default Dashboard;
