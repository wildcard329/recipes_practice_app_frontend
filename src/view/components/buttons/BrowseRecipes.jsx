import React from 'react';
import { useHistory } from 'react-router-dom';

function BrowseRecipes() {
    const history = useHistory();
    const browseRecipes = e => {
        e.preventDefault();
        history.push('/recipes/all');
    }

    return(
        <div>
            <button onClick={browseRecipes}>Browse</button>
        </div>
    )
}

export default BrowseRecipes;