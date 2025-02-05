import Link from "next/link";
import { Button } from "./Button";

type HeaderProps = {
  taskId: number
}

export default function Header({ taskId }: HeaderProps) {
  return (
    <div>
      <Link href="/">
        <Button text="Home" />
      </Link>
      <h2>Task {taskId}</h2>
    </div>
  )
}