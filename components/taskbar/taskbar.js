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
                    <Link href="/">
                    <div className={taskbar.button}>Notes/Assignments</div>
                    </Link>

                </div>
            </div>
        </>
    )
}