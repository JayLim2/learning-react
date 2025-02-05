import { FC } from "react"

export const Button: FC<any> = (props) => {
  const { text } = props
  return (
    <div className="button">
      {text}
    </div>
  )
}