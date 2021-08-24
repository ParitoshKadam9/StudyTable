import pending from "../styles/Pending/pending.module.css"
import {useState} from 'react'

export default function Pending() {
  const [striked, setStriked] = useState([])
  const [list, setList] = useState([])

  const [userInput, setUserInput] = useState('')
    
    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        setList(
            [
                userInput,...list
            ]
        )
        setUserInput('')
        
  }
    const handleToggle=(listitem)=>{
      const newArray = list.filter(
        listitems => 
          list.indexOf(listitems) === list.indexOf(listitem))
      setStriked([...striked,newArray])
      const newArr = list.filter(
        (todoitem) => list.indexOf(todoitem) != list.indexOf(listitem)
      );

      setList(newArr);
      console.log(striked);
    }

    const handleDelete = (listitem) => {
        const newArr = list.filter(todoitem => list.indexOf(todoitem) != list.indexOf(listitem))

        setList(newArr)
  }
  const handleReverse = (data) => {
     const newArray = striked.filter(
        listitems => 
          striked.indexOf(listitems) === striked.indexOf(data))
      setList([...list,newArray])
      const newArr = striked.filter(
        (todoitem) => striked.indexOf(todoitem) != striked.indexOf(data)
      );

      setStriked(newArr);
      console.log(striked);
    }
    
  

    return (
      <> 
       
   
        <div className={pending.bigger}>
          <div className={pending.container}>
            <div className={pending.content}>
              <input
                type="text"
                value={userInput}
                placeholder="Enter Task"
                className={pending.input}
                onChange={handleChange}
              ></input>
              <div className={pending.submit} onClick={handleSubmit}>
                Add
              </div>
            </div>
            <div className={pending.list}>
              {list.length >= 1 ? (
                list.map((listitem, idx) => {
                  return (
                    <div className={pending.coloumn}>
                      <div
                        className={pending.striker}
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggle(listitem);
                        }}
                      >
                        Done
                      </div>
                      <div
                        className={pending.item}
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggle(listitem);
                        }}
                      >
                        {listitem}
                      </div>
                      <div
                        className={pending.delete}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(listitem);
                        }}
                      >
                        X
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className={pending.noTask}>No Tasks Left, ggwpopez</div>
              )}
            </div>
          </div>
          <div className={pending.done}>
            {striked.map((data, idx) => {
              return (
                <div className={pending.strikeelement} key={idx}>
                  <div
                    className={pending.reverse}
                    onClick={(e) => {
                      e.preventDefault();
                      handleReverse(data);
                    }}
                  >
                    -{" "}
                  </div>
                  {data}
                </div>
              );
            })}
          </div>
        </div>
      
      </>
    );
}