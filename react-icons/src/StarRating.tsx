import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

const Star: React.FC<{
  selected: boolean, onSelect: () => void
}> = (props) => {
  return <FaStar color={props.selected ? "red" : "gray"} onClick={props.onSelect} />
}

export const StarRating: React.FC<{ totalStars: number, selectedStars: number }> = (props) => {
  const [selectedStars, setSelectedStars] = useState(props.selectedStars)

  return (
    <div>
      {[...Array(props.totalStars)].map((_, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />)
      )}
      <p>
        {selectedStars} of {props.totalStars} stars
      </p>
    </div>
  )
}
