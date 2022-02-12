
import { IngredientData } from "./RecipeData";
export const Ingredient: React.FC<IngredientData> = (props) => {
  return (
    <li>
      {props.amount} {props.mesurement} {props.name}
    </li>
  );
}
