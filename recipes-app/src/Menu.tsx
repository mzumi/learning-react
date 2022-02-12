import React from 'react'
import { Recipe } from './Recipe'
import { RecipeData } from './RecipeData'

export const Menu: React.FC<{ recipes: RecipeData[] }> = (props) => {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {props.recipes.map((recipe, i) => (
          <Recipe key={i} recipe={recipe} />
        ))}

      </div>
    </article>
  )
}
