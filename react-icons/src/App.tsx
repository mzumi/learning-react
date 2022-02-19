import React, { useState } from 'react'
import colorData from './data/colors.json'
import { ColorList } from './ColorList'
import { AddColorForm } from './AddColorForm'
import { v4 } from 'uuid'

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm
        onNewColor={(title: string, color: string) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ]
          setColors(newColors)
        }}
      />
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
        }}
      />
    </>
  );
}

export default App;
