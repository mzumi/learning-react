import React, { useRef, useState } from 'react'
import { useInput } from './hooks'

export const AddColorForm: React.FC<{ onNewColor: (title: string, color: string) => void }> = (props) => {
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    props.onNewColor(titleProps.value, colorProps.value)
    resetTitle()
    resetColor()
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder='color title...'
        required
      />
      <input
        {...colorProps}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  )
}
