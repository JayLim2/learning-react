'use client'
import Header from "@/app/components/Header"
import { Dispatch, FC, memo, SetStateAction, useState } from "react"

export default function Task2() {
  return <div>
    <Header taskId={2} />
    <div className="flex flex-col gap-2">
      <span>
        Look at <b>Controls rendered at</b> near the buttons.
        It seems that buttons are re-rendered each time we modify counter!
      </span>
      <Root />
    </div>
  </div>
}

const Counter: FC<{ count: number }> = ({ count }) => {
  return <h1><b>Count:</b> {count}</h1>
}

const Controls: FC<{ setCount: Dispatch<SetStateAction<number>> }> = memo(({ setCount }) => {
  return (
    <div>
      <div className="flex gap-2">
        <button className="button" onClick={() => { setCount(prevCount => prevCount + 1) }}>Increment</button>
        <button className="button" onClick={() => { setCount(prevCount => prevCount - 1) }}>Decrement</button>
      </div>
      <h4>
        <b>Controls rendered at:</b> {new Date().toISOString()}
      </h4>
    </div>
  )
})
Controls.displayName = 'Controls'

const Root: FC = () => {
  const [count, setCount] = useState<number>(0)

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }}>
    <Counter count={count} />
    <Controls setCount={setCount} />
  </div>
}

/*

const Counter: FC<{ count: number }> = ({ count }) => {
  return <h1><b>Count:</b> {count}</h1>
}

const Controls: FC<{ setCount: Dispatch<SetStateAction<number>> }> = ({ setCount }) => {
  return (
    <div>
      <div className="flex gap-2">
        <button className="button" onClick={() => { setCount(prevCount => prevCount + 1) }}>Increment</button>
        <button className="button" onClick={() => { setCount(prevCount => prevCount - 1) }}>Decrement</button>
      </div>
      <h4>
        <b>Controls rendered at:</b> {new Date().toISOString()}
      </h4>
    </div>
  )
}

const Root: FC = () => {
  const [count, setCount] = useState<number>(0)

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }}>
    <Counter count={count} />
    <Controls setCount={setCount} />
  </div>
}
*/
