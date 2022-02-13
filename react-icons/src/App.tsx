import React, { useState } from 'react'
import colorData from './data/colors.json'
import { ColorList } from './ColorList'

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <ColorList
      colors={colors}
      onRateColor={(id: string, rating: number) => {
        const newColors = colors.map(color =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors)
      }}
      onRemoveColor={(id: string) => {
        const newColors = colors.filter(c => c.id !== id)
        setColors(newColors)
      }} />
  );
}

export default App;
