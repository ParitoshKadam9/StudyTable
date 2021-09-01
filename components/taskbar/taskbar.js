import taskbar from '../../styles/taskbar/taskbar.module.css'
import Link from "next/link";

export default function Taskbar() {
  const taskbarlist = [
    {
      href: "/books",
      title: "Books",
    },
    {
      href: "/meets",
      title: "Time-Table",
    },
    {
      href: "/lectures",
      title: "Recorded Lectures",
    },
    {
      href: "https://drive.google.com/drive/u/0/folders/1ulkq-QjCZeaeAbmmBS54187xKPWJ5Bpm",
      title: "Notes/Assignments",
    },
    {
      href: "/pending",
      title: "Pending Tasks",
    },
  ];
    return (
      <>
        <div className={taskbar.container}>
          <Link href="/">
            <div className={taskbar.header}>Study Table</div>
          </Link>
          {taskbarlist.map((data,idx) => (
            <div key={idx} className={taskbar.buttons}>
                 <Link href={data.href}>
                   <div className={taskbar.button}>{data.title}</div>
                 </Link>
               </div>
          ))}
       
        </div>
      </>
    );
}