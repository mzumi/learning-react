import React from 'react';
import { Menu } from './Menu'
import { RecipeData } from './RecipeData'

const recipes = RecipeData.loadData()
const App: React.FC = () => {
  return (
    <Menu recipes={recipes} />
  )
}

export default App;
