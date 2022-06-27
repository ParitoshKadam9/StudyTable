import Card from "../components/content/cards";
import styles from "../styles/lectures.module.css"
import { useState } from "react";

export default function RecLect() {
    
    const [btn, setBtn] = useState(true);

    const [data, setData] = useState([]);

    const btns = [
      {
        id: 1,
        name: "2-1 Lectures",
      },
      {
        id: 2,
        name: "2-2 lectures",
      },
      {
        id: 3,
        name: "Summer 2022",
      },
    ];

    const handleBack = () => {
      setBtn(true);
    };

    const fetchapi = async (id) => {
      if (id == 1) {
        const response = await fetch("/api/recordings/lect21");
        const data1 = await response.json();
        setBtn(false);
        setData(data1);
        console.log("test");
      } else if (id == 2) {
        const response = await fetch("/api/recordings/lect22");
        const data2 = await response.json();
        setBtn(false);
        setData(data2);
        console.log("test");
      }
       else if (id == 3) {
        const response = await fetch("/api/recordings/summer1");
        const data2 = await response.json();
        setBtn(false);
        setData(data2);
        console.log("test");
      }
    };
    

    return (
      <>
        <div className={btn ? styles.header : styles.null}>Books</div>
        <div className={styles.btnContainer}>
          {btns.map((data) => {
            return (
              <>
                <div
                  className={btn ? styles.btn : styles.null}
                  key={data.id}
                  onClick={() => {
                    fetchapi(data.id);
                  }}
                >
                  {data.name}
                </div>
              </>
            );
          })}
        </div>
        <div className={btn ? styles.null : styles.cards}>
          {data.map((data) => (
            <Card key={data.key} {...data} />
          ))}
          <div className={styles.back} onClick={handleBack}>
            Back
          </div>
        </div>
      </>
    );
}