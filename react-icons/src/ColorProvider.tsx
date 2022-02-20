import { createContext, ReactNode, useState, useContext } from "react"
import colorData from './data/colors.json'
import { v4 } from 'uuid'

const ColorContext = createContext({
  colors: colorData,
  addColor: (title: string, color: string) => { },
  rateColor: (id: string, rating: number) => { },
  removeColor: (id: string) => { }
})

export const useColors = () => useContext(ColorContext)

export const ColorProvider = (props: { children: ReactNode }) => {
  const [colors, setColors] = useState(colorData)

  const addColor = (title: string, color: string) => {
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
  }

  const rateColor = (id: string, rating: number) => {
    const newColors = colors.map(color =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors)
  }

  const removeColor = (id: string) => {
    const newColors = colors.filter(c => c.id !== id)
    setColors(newColors)
  }

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {props.children}
    </ColorContext.Provider>
  )
}

