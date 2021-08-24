import taskbar from '../../styles/taskbar/taskbar.module.css'
import Link from "next/link";

export default function Taskbar() {
    return (
      <>
        <div className={taskbar.container}>
          <Link href="/">
            <div className={taskbar.header}>Study Table</div>
          </Link>
          <div className={taskbar.buttons}>
            <Link href="/books">
              <div className={taskbar.button}>Books</div>
            </Link>
            <Link href="/meets">
              <div className={taskbar.button}>Time-table</div>
            </Link>
            <Link href="/lectures">
              <div className={taskbar.button}>Recorded Lectures</div>
            </Link>
            <Link href="https://drive.google.com/drive/u/0/folders/1ulkq-QjCZeaeAbmmBS54187xKPWJ5Bpm">
              <a target="_blank">
                <div className={taskbar.button}>Notes/Assignments</div>
              </a>
            </Link>
            <Link href="/pending">
              <div className={taskbar.button}>Pending Tasks</div>
            </Link>
          </div>
        </div>
      </>
    );
}