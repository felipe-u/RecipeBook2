import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";

const URL = "https://udemy-course-recipe-book-a70e2-default-rtdb.firebaseio.com";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient, private recipesService: RecipesService) { }

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put(`${URL}/recipes.json`, recipes)
            .subscribe(
                response => {
                    console.log(response);
                }
            );
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(`${URL}/recipes.json`)
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }), tap(recipes => {
                this.recipesService.setRecipes(recipes);
            }))
    }
}