import React from "react"
import { Color } from "./Color"
import { useColors } from "./ColorProvider"

export const ColorList: React.FC<{}> = () => {
  const { colors, rateColor, removeColor } = useColors()

  if (!colors.length) return <div>No colors</div>

  return (
    <div>
      {colors.map(color =>
        <Color
          key={color.id}
          colorData={color}
          onRate={rateColor}
          onRemove={removeColor} />
      )}
    </div>
  );
}
