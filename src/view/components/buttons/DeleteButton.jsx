import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteButton({id}) {
    const history = useHistory();

    const deleteRecipe = e => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/recipes/${id}`)
        history.push('/')
    }

    return(
        <div>
            <button onClick={deleteRecipe}>Delete</button>
        </div>
    )
}

export default DeleteButton;
