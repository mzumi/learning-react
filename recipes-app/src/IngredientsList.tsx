import { Ingredient } from './Ingredient'
import { IngredientData } from './RecipeData'

export const IngredientsList: React.FC<{ list: IngredientData[] }> = (prop) => {
  return (
    <ul className="ingredients">
      {prop.list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  )
}
