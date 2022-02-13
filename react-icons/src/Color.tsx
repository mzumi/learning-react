import React from "react"
import { ColorData } from "./ColorData"
import { StarRating } from "./StarRating";
import { FaTrash } from "react-icons/fa"

export const Color: React.FC<{ colorData: ColorData, onRate: (id: string, rating: number) => void, onRemove: (id: string) => void }> = (props) => {
  return (
    <section>
      <h1>{props.colorData.title}</h1>
      <button onClick={() => { props.onRemove(props.colorData.id) }}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: props.colorData.color }} ></div>
      <StarRating
        totalStars={5}
        selectedStars={props.colorData.rating}
        onRate={rating => props.onRate(props.colorData.id, rating)}
      />
    </section>
  );
}
