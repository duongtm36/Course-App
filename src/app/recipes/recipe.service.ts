import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Brulle Cheese Cake Recipe',
      'This is a Brulle Cheese Cake Recipe',
      'https://marketplace.canva.com/EAFEGwki5iw/2/0/1067w/canva-white-yellow-clean-modern-brulle-cheese-cake-recipe-card-ZLMW2pkhjjg.jpg'
    ),
    new Recipe(
      'Chocolate Chip Cookies Recipe',
      'This is a Chocolate Chip Cookies Recipe',
      'https://marketplace.canva.com/EAFCd-MvUm4/1/0/1131w/canva-chocolate-chip-cookies-recipe-_3PIjzkvabE.jpg'
    ),
    new Recipe(
      'Beige Cute Recipe Card',
      'This is a Beige Cute Recipe Card',
      'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
