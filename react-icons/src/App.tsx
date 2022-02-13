import React, { useState } from 'react'
import colorData from './data/colors.json'
import { ColorList } from './ColorList'
import { StarRating } from './StarRating'

function App() {
  const [colors] = useState(colorData);

  return (
    <ColorList colors={colors} />
  );
}

export default App;
