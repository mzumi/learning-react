import React from "react"
import { Color } from "./Color"
import { ColorData } from "./ColorData"

export const ColorList: React.FC<{ colors: ColorData[], onRemoveColor: (id: string) => void }> = (props) => {
  if (!props.colors.length) return <div>No colors</div>

  return (
    <div>
      {props.colors.map(color => <Color key={color.id} colorData={color} onRemove={props.onRemoveColor} />)}
    </div>
  );
}
