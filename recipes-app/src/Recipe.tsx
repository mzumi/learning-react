import React from "react";
import { IngredientsList } from './IngredientsList'
import { Instructions } from './Instructions'
import { RecipeData } from "./RecipeData";

export const Recipe: React.FC<{ recipe: RecipeData }> = (props) => {
  return (
    <section id={props.recipe.name.toLowerCase().replace(/ /g, "-")}>
      <h1>{props.recipe.name}</h1>
      <IngredientsList list={props.recipe.ingredients} />
      <Instructions title="Cooking Instructions" steps={props.recipe.steps} />
    </section>
  )
}
