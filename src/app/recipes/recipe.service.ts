import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Brulle Cheese Cake Recipe',
      'This is a Brulle Cheese Cake Recipe',
      'https://marketplace.canva.com/EAFEGwki5iw/2/0/1067w/canva-white-yellow-clean-modern-brulle-cheese-cake-recipe-card-ZLMW2pkhjjg.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French', 20)]
    ),
    new Recipe(
      'Chocolate Chip Cookies Recipe',
      'This is a Chocolate Chip Cookies Recipe',
      'https://marketplace.canva.com/EAFCd-MvUm4/1/0/1131w/canva-chocolate-chip-cookies-recipe-_3PIjzkvabE.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'Beige Cute Recipe Card',
      'This is a Beige Cute Recipe Card',
      'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg',
      [new Ingredient('Kaka', 12), new Ingredient('HoHo', 21)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
}
