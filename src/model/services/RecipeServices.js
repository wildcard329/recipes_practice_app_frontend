import axios from 'axios';

// change url when deployed
const RecipesURL = new URL('http://localhost:5000/api');

class RecipeService {
    async getRecipesList() {
        const response = await axios.get(`${RecipesURL}/recipes`);
        return response.data;
    };
    async getRecipeData(id) {
        const response = await axios.get(`${RecipesURL}/recipes/${id}`);
        return response.data;
    };
    async addRecipeData(recipe) {
        await axios.post(`${RecipesURL}/recipes`, recipe);
    };
};

export default new RecipeService();
