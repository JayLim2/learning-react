'use client'
import Header from "@/app/components/Header";
import { FC, useCallback, useEffect, useState } from "react";

export default function Task3() {
  return <div>
    <Header taskId={3}/>
    <div className="flex flex-col gap-2">
      There are some issues with counter. Try to fix them all.
      <Counter />
    </div>
  </div>
}

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  useEffect(() => {
    alert(count)
  }, [count])

  return <div>
    <h1><b>Counter:</b> {count}</h1>
    <button className="button" onClick={increment}>Increment</button>
  </div>
}

/*

export default function Task3() {
  return <div>
    <Header taskId={3}/>
    <div className="flex flex-col gap-2">
      There are some issues with counter. Try to fix them all.
      <Counter />
    </div>
  </div>
}

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => {
    setCount(count + 1)
    alert(count)
  }, [])

  return <div>
    <h1><b>Counter:</b> {count}</h1>
    <button className="button" onClick={increment}>Increment</button>
  </div>
}
*/