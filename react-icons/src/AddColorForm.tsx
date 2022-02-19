import React, { useRef, useState } from 'react'

export const AddColorForm: React.FC<{ onNewColor: (title?: string, color?: string) => void }> = (props) => {
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#000000")

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    props.onNewColor(title, color)
    setTitle("")
    setColor("")
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        type="text"
        placeholder='color title...'
        required
      />
      <input
        value={color}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  )
}
