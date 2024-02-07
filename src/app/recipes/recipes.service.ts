import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
            'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
            [
                new Ingredient('Cucumber', 4),
                new Ingredient('Onion', 4)
            ]),
        new Recipe('A Test Recipe 2', 'This is simply a test 2',
            'https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg',
            [
                new Ingredient('Flour', 20),
                new Ingredient('Blueberry', 10)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}