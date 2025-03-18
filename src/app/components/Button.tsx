import { FC } from "react"

export const Button: FC<{ text: string }> = (props) => {
  const { text } = props
  return (
    <div className="button">
      {text}
    </div>
  )
}