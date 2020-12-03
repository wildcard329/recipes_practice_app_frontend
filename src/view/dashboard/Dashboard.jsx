import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipesList from '../components/lists/RecipesList.jsx';
import Recipe from '../recipe/Recipe.jsx';

function Dashboard() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/recipes/')
            .then(res => {
                console.log(res)
                setRecipes(res.data)
            });
    }, []);

    return(
        <div>
            <RecipesList recipes={recipes} />
            <Recipe recipes={recipes} />
        </div>
    );
};

export default Dashboard;
