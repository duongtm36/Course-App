import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelect = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
