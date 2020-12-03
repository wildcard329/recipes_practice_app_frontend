import React from 'react';
import axios from 'axios';

function DeleteButton({id}) {

    const deleteRecipe = e => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/recipes/${id}`)
    }

    return(
        <div>
            <button onClick={deleteRecipe}>Delete</button>
        </div>
    )
}

export default DeleteButton;
