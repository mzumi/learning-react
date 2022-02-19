import React, { useRef } from 'react'

export const AddColorForm: React.FC<{ onNewColor: (title?: string, color?: string) => void }> = (props) => {
  const txtTitle = useRef<HTMLInputElement>(null)
  const hexColor = useRef<HTMLInputElement>(null)

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = txtTitle.current?.value
    const color = hexColor.current?.value

    props.onNewColor(title, color)
    if (txtTitle.current != null) {
      txtTitle.current.value = ""
    }
    if (hexColor.current != null) {
      hexColor.current.value = ""
    }
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder='color title...' required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  )
}
