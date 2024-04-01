import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
