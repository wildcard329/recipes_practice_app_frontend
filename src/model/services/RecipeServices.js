import axios from 'axios';

// change url when deployed
const RecipesURL = new URL('http://localhost5000/api');

class RecipeService {
    async getRecipesList() {
        const response = await axios.get(`${RecipesURL}/recipes`);
        return response.data;
    }
}

export default new RecipeService();
