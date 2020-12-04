import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard.jsx';
import Recipe from '../recipe/Recipe.jsx';
import AddRecipeForm from '../components/forms/AddRecipeForm.jsx';
import UpdateRecipeForm from '../components/forms/UpdateRecipeForm.jsx';

function AppRouter() {
    return(
        <div>
            <Switch>
                <Route path='/recipes/all' component={Dashboard} />
                <Route path='/recipes/recipe' component={Recipe} />
                <Route path='/recipes/add' component={AddRecipeForm} />
                <Route path='/recipes/update' component={UpdateRecipeForm} />
            </Switch>
        </div>
    )
}

export default AppRouter;
