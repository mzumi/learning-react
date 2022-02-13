import React from "react"
import { ColorData } from "./ColorData"
import { StarRating } from "./StarRating";

export const Color: React.FC<{ colorData: ColorData }> = (props) => {
  return (
    <section>
      <h1>{props.colorData.title}</h1>
      <div style={{ height: 50, backgroundColor: props.colorData.color }} ></div>
      <StarRating totalStars={5} selectedStars={props.colorData.rating} />
    </section>
  );
}
