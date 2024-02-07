import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
