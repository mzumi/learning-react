import { useEffect, useMemo } from 'react'
import { useAnyKeyToRender } from './useAnyKeyToRender'

export const WordCount: React.FC<{ children: string }> = (props) => {
  useAnyKeyToRender()

  const words = useMemo<string[]>(() => {
    return props.children.split(" ")
  }, [])

  useEffect(() => {
    console.log("fresh render")
  }, [words])

  return (
    <>
      <p>{props.children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  )
}
