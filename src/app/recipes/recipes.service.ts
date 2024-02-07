import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}