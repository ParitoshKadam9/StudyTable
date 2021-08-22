import card from "../styles/GLobalcard/carddata.module.css"
import Card from "../components/content/cards";

export default function Books() {

    const data = [
      {
        name: "Fluid Mechanics",
        id: "ME F212",
        key: 1,
        time: "",
      },
      {
        name: "Maths 3",
        id: "MATH F211",
        key: 2,
        time: "",
      },
      {
        name: "Mech of Solids",
        id: "ME F211",
        key: 3,
        time: "",
      },
      {
        name: "Mat sci and eng",
        id: "ME F216",
        key: 4,
        time: "",
      },
      {
        name: "Applied Thermo",
        id: "ME F216",
        key: 5,
        time: "",
      },
      {
        name: "POE",
        id: "ECON F211",
        key: 5,
        time: "",
      },
      {
        name: "EPS",
        id: "GS F425",
        key: 5,
        time: "",
      },
      {
        name: "Fluid Mechanics",
        id: "ME F216",
        key: 5,
        time: "",
      },
      
    ];


    return (
      <>
        
          {data.map((data) => (
            <Card key={data.key} {...data} />
          ))}
        
      </>
    );
}