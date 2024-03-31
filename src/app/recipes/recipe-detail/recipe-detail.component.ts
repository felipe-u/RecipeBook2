import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  id: number

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      }
    )
  }

  addToShoppingList() {
    this.recipesService.addIngredientsToSL(this.recipe.ingredients);
  }
}
