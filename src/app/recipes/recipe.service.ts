import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is simply a test',
			'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
			[
				new Ingredient('Ingredient 1', 1),
				new Ingredient('Ingredient 2', 3),
				new Ingredient('Ingredient 3', 4),
			]
		),
		new Recipe(
			'Another Test Recipe',
			'This is simply a test',
			'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
			[
				new Ingredient('Ingredient 4', 4),
				new Ingredient('Ingredient 5', 5),
				new Ingredient('Ingredient 6', 6),
			]
		),
	];
	constructor(private shoppingListService: ShoppingListService) {}
	getRecipes() {
		return this.recipes.slice();
	}
	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}
}
