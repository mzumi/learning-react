import { useEffect, useState } from 'react'

export const Checkbox: React.FC<{}> = () => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    alert(`checked: ${checked.toString()}`)
  })

  useEffect(() => {
    console.log(checked ? "Yes, checked" : "No, not checked")
  })

  useEffect(() => {
    localStorage.setItem("checkbox-value", checked.toString())
  })

  // useEffect(() => {
  //   txtInputRef.current.focus()
  // })


  return (
    <>
      <input
        type="checkbox"
        value={checked.toString()}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}
