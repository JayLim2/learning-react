import Link from "next/link";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <div className="flex gap-2 justify-center">
      {[1, 2, 3, 4].map(taskId => (
        <Link key={taskId} href={`/pages/task-${taskId}`}>
          <Button text={`Task ${taskId}`}/>
        </Link>
      ))}
    </div>
  );
}
