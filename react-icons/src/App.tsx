import React, { useState } from 'react'
import colorData from './data/colors.json'
import { ColorList } from './ColorList'
import { StarRating } from './StarRating'

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id: string) => {
        const newColors = colors.filter(c => c.id != id)
        setColors(newColors)
      }} />
  );
}

export default App;
