import React from 'react';
import { Checkbox } from './Checkbox'
import { PhraseInput } from './PhraseInput'
import { WordCount } from './WordCount'

export const App: React.FC = () => {
  return (
    <>
      <Checkbox />
      <br />
      <PhraseInput />
      <br />
      <WordCount children="You are not gonna believe this but..." />
    </>
  )
}

