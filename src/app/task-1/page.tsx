'use client'
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"

export default function Task1() {
  const ref = useRef<HTMLInputElement | null>(null)
  const [state, setState] = useState<boolean>(false)

  useEffect(() => {
    if (state) {
      ref.current?.focus()
    }
    setState(true)
  }, [state])

  return <div>
    <Header taskId={1}/>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}>
      Following input must be focused automatically on page load:
      <input ref={ref} type='text' placeholder='Some input' style={{ border: '1px solid black', padding: 5, }} />
    </div>
  </div>
}

/*
export default function Task1() {
  const ref = useRef<HTMLInputElement | null>(null)
  const state = useRef<boolean>(false)

  useEffect(() => {
    if (state.current) {
      ref.current?.focus()
    }
    state.current = true
  }, [state.current])

  return <div>
    <Header taskId={1}/>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}>
      Following input must be focused automatically on page load:
      <input ref={ref} type='text' placeholder='Some input' style={{ border: '1px solid black', padding: 5, }} />
    </div>
  </div>
}
*/