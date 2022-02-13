import { FaStar } from "react-icons/fa"

const Star: React.FC<{
  selected: boolean, onSelect: () => void
}> = (props) => {
  return <FaStar color={props.selected ? "red" : "gray"} onClick={props.onSelect} />
}

export const StarRating: React.FC<{ totalStars: number, selectedStars: number, onRate: (rating: number) => void }> = (props) => {
  return (
    <div>
      {[...Array(props.totalStars)].map((_, i) => (
        <Star key={i} selected={props.selectedStars > i} onSelect={() => props.onRate(i + 1)} />)
      )}
      <p>
        {props.selectedStars} of {props.totalStars} stars
      </p>
    </div>
  )
}
