import React from 'react';
import { useHistory } from 'react-router-dom';

function UpdateButton() {
    const history = useHistory();

    const updateRecipe = e => {
        e.preventDefault();
        history.push('/recipes/update');
    };
    return(
        <div>
            <button onClick={updateRecipe}>Update</button>
        </div>
    )
};

export default UpdateButton;
