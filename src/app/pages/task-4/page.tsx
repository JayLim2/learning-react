'use client'
import Header from "@/app/components/Header";
import { FC, memo, useCallback, useState } from "react";

export default function Task4() {
  const [, setCount] = useState<number>(0)

  const increment = useCallback(() => { setCount(prevCount => prevCount + 1) }, [])

  return <div>
    <Header taskId={4} />
    <div className="flex flex-col gap-2">
      <span>
        Following button triggers re-rendering page. But label below must print fixed value once, because it is not changed.
        To see how label is rendered I show <b>alert</b>. Why it appears each time you trigger re-rendering of page?
      </span>
      <button className="button" onClick={increment}>Re-render page</button>
      <Preview data={{ value: 1234 }} />
    </div>
  </div>
}

type PreviewProps = {
  data: {
    value: number
  }
}

const Preview: FC<PreviewProps> = memo(({ data }) => {
  alert('Re-rendering Preview...')

  return <div>
    <h1><b>Value from data:</b> {data.value}</h1>
  </div>
})
Preview.displayName = 'Preview'
