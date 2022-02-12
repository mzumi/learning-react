import data from './data/recipes.json'

export type IngredientData = { name: string, mesurement: string, amount: number }

export class RecipeData {
  name: string;
  ingredients: IngredientData[];
  steps: string[];

  constructor(name: string, ingredients: IngredientData[], steps: string[]) {
    this.name = name;
    this.ingredients = ingredients;
    this.steps = steps;
  }

  static loadData(): RecipeData[] {
    const recipes = data.map(d => (
      new RecipeData(d.name, d.ingredients, d.steps)
    ))

    return recipes;
  }
}
