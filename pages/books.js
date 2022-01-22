import { useState } from "react";
import styles from "../styles/books.module.css"
import Card from "../components/content/cards"

export default function Books() {

    const [btn, setBtn] = useState(true);

  const [data, setData] = useState([]);
  
   const btns = [
     {
       id: 1,
       name: "2-1 Books",
     },
     {
       id: 2,
       name: "2-2 Books",
     },
   ];

    const handleBack = () => {
      setBtn(true);
  };
  
  const fetchapi = async (id) => {
    if (id == 1) {
      const response = await fetch("/api/books/books21");
      const data1 = await response.json();
      setBtn(false);
      setData(data1);
      console.log("test");
    } else if (id == 2) {
      const response = await fetch("/api/books/books22");
      const data2 = await response.json();
      setBtn(false);
      setData(data2);
      console.log("test");
    }
  };
    

    return (
      <>
        <div className={btn? styles.header: styles.null}>Books</div>
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