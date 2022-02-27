import { useEffect, useState } from "react"

export const useAnyKeyToRender: () => void = () => {
  const [, forceRender] = useState<string>("")

  useEffect(() => {
    window.addEventListener("keydown", e => { forceRender(e.key) })
    return () => window.removeEventListener("keydown", e => { forceRender(e.key) })
  }, [])
}
