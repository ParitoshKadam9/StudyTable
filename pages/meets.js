import meet from "../styles/Meets/meet.module.css"
import Link from "next/link"
import { useState } from "react";

export default function Meets() {
  const [btn, setBtn] = useState(true);
  const [tabledata, setData] = useState([]);

  const btns = [
    {
      id: 1,
      name: "2-1",
    },
    {
      id: 2,
      name: "2-2",
    },
    
  ];

  const handleBack = () => {
    setBtn(true);
  }

  const fetchapi = async (id) => {
    if (id == 1) {
      const response = await fetch('/api/lectures/sem21');
      const data = await response.json();
      setBtn(false);
      setData(data);
      console.log("test");
    }
    else if (id == 2) {
      const response = await fetch("/api/lectures/sem22");
      const data2 = await response.json();
      setBtn(false);
      setData(data2);
      console.log("test");
    }
  }

    return (
      <div>
        <div className={meet.header}>Time-Table</div>
        <div className={meet.btnContainer}>
          {btns.map((data) => {
            return (
              <>
                <div className={btn ? meet.btn : meet.null} key={data.id} onClick={() => { fetchapi(data.id) }} >
                  {data.name}
                </div>
              </>
            );
          })}
        </div>
        <div className={btn ? meet.null:meet.container}>
          
          {tabledata.map((tabledata) => (
            <div className={meet.row} key={tabledata.key}>
              <Link href={`${tabledata.l1}`}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c1}</div>
                </a>
              </Link>
              <Link href={`${tabledata.l2}`}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c2}</div>
                </a>
              </Link>
              <Link href={`${tabledata.l3}`}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c3}</div>
                </a>
              </Link>
              <Link href={`${tabledata.l4}`}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c4}</div>
                </a>
              </Link>
              <Link href={`${tabledata.l5}`}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c5}</div>
                </a>
              </Link>
              <Link href={`${tabledata.l6}`} passHref={true}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c6}</div>
                </a>
              </Link>
              <Link href={`${tabledata.l7}`} passHref={true}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c7}</div>
                </a>
              </Link>
              <Link href={`${tabledata.l8}`} passHref={true}>
                <a target="_blank">
                  <div className={meet.coloumn}>{tabledata.c8}</div>
                </a>
              </Link>
            </div>
          ))}
          <div className={meet.back} onClick={handleBack}>Back</div>
        </div>
      </div>
    );
}