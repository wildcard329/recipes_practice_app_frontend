import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard.jsx';
import Recipe from '../recipe/Recipe.jsx';
import AddRecipeForm from '../components/forms/AddRecipeForm.jsx';

function AppRouter() {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/recipe' component={Recipe} />
                <Route path='/recipes/add' component={AddRecipeForm} />
            </Switch>
        </div>
    )
}

export default AppRouter;
