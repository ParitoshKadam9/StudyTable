import meet from "../styles/Meets/meet.module.css"

export default function Meets() {
    const tabledata = [
      {
        key: 1,
        c1: "Time",
        c2: "Monday",
        c3: "Tuesday",
        c4: "Wednesday",
        c5: "Thursday",
        c6: "Friday",
        c7: "Saturday",
        c8: "Sunday",
      },

      {
        key: 2,
        c1: "8 am",
        c2: "",
        c3: "Mech of Solids T2",
        c4: "POE T2",
        c5: "Fluid Mech T2",
        c6: "",
        c7: "Thermo T1",
        c8: "",
      },

      {
        key: 3,
        c1: "9 am",
        c2: "Mech of Solids L1",
        c3: "",
        c4: "Mech of Solids L1",
        c5: "",
        c6: "Mech of Solids L1",
        c7: "",
        c8: "",
      },

      {
        key: 4,
        c1: "10 am",
        c2: "Monday",
        c3: "ESP L1",
        c4: "",
        c5: "ESP L1",
        c6: "",
        c7: "ESP L1",
        c8: "",
      },

      {
        key: 5,
        c1: "11 am",
        c2: "Monday",
        c3: "POE L2",
        c4: "",
        c5: "POE L2",
        c6: "",
        c7: "POE L2",
        c8: "",
      },

      {
        key: 6,
        c1: "12 am",
        c2: "Monday",
        c3: "Thermo L1",
        c4: "",
        c5: "Thermo L1",
        c6: "",
        c7: "Thermo L1",
        c8: "",
      },

      {
        key: 7,
        c1: "1 am",
        c2: "B",
        c3: "R",
        c4: "E",
        c5: "A",
        c6: "K",
        c7: "-B",
        c8: "C",
      },

      {
        key: 8,
        c1: "2 am",
        c2: "Math III L7",
        c3: "Mat sci and eng P3",
        c4: "Math III L7",
        c5: "Thermo Lab P3",
        c6: "Math III L7",
        c7: "",
        c8: "",
      },

      {
        key: 9,
        c1: "3 am",
        c2: "Fluid Mech L1",
        c3: "Mat sci and eng P3",
        c4: "Fluid Mech L1",
        c5: "Thermo Lab P3",
        c6: "Fluid Mech L1",
        c7: "",
        c8: "",
      },

      {
        key: 10,
        c1: "4 am",
        c2: "Mat sci and eng L1",
        c3: "Math III T6",
        c4: "Mat sci and eng L1",
        c5: "Mat sci and eng T2",
        c6: "",
        c7: "",
        c8: "",
      },
    ];
    return (
        <>
            <div className={meet.header}>
                Time-Table
            </div>
            <div className={meet.container}>
                {tabledata.map((tabledata)=>(
          <div className={meet.row} key={tabledata.key}>
            <div className={meet.coloumn}>{tabledata.c1}</div>
            <div className={meet.coloumn}>{tabledata.c2}</div>
            <div className={meet.coloumn}>{tabledata.c3}</div>
            <div className={meet.coloumn}>{tabledata.c4}</div>
            <div className={meet.coloumn}>{tabledata.c5}</div>
            <div className={meet.coloumn}>{tabledata.c6}</div>
            <div className={meet.coloumn}>{tabledata.c7}</div>
            <div className={meet.coloumn}>{tabledata.c8}</div>
                    </div>
                    ))}
        </div>
      </>
    );
}