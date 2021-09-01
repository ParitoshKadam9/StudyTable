import meet from "../styles/Meets/meet.module.css"
import Link from "next/link"

export default function Meets() {
    const tabledata = [
      {
        key: 1,
        c1: "Time",
        l1: "/meets",
        c2: "Monday",
        l2: "",
        c3: "Tuesday",
        l3: "",
        c4: "Wednesday",
        l4: "",
        c5: "Thursday",
        l5: "",
        c6: "Friday",
        l6: "",
        c7: "Saturday",
        l7: "",
        c8: "Sunday",
        l8: `""`,
      },

      {
        key: 2,
        c1: "8 am",
        l1: "",
        c2: "",
        l2: "",
        c3: "Mech of Solids T2",
        l3: "https://meet.google.com/ccd-itft-bpd",
        c4: "POE T2",
        l4: "",
        c5: "Fluid Mech T2",
        l5: "",
        c6: "",
        l6: "",
        c7: "Thermo T1",
        l7: "https://meet.google.com/cij-uidt-yrr?authuser=0",
        c8: "",
        l8: `""`,
      },

      {
        key: 3,
        c1: "9 am",
        l1: "",
        c2: "Mech of Solids L1",
        l2: "https://meet.google.com/skv-yqkp-vqj?authuser=0",
        c3: "",
        l3: "",
        c4: "Mech of Solids L1",
        l4: "https://meet.google.com/skv-yqkp-vqj?authuser=0",
        c5: "",
        l5: "",
        c6: "Mech of Solids L1",
        l6: "https://meet.google.com/skv-yqkp-vqj?authuser=0",
        c7: "",
        l7: "",
        c8: "",
        l8: `""`,
      },

      {
        key: 4,
        c1: "10 am",
        l1: "",
        c2: "",
        l2: "",
        c3: "ESP L1",
        l3: "http://meet.google.com/uzi-fvpb-mhj",
        c4: "",
        l4: "",
        c5: "ESP L1",
        l5: "http://meet.google.com/uzi-fvpb-mhj",
        c6: "",
        l6: "",
        c7: "ESP L1",
        l7: "http://meet.google.com/uzi-fvpb-mhj",
        c8: "",
        l8: `""`,
      },

      {
        key: 5,
        c1: "11 am",
        l1: "",
        c2: "",
        l2: "",
        c3: "POE L2",
        l3: "https://meet.google.com/tbh-bnop-hmh",
        c4: "",
        l4: "",
        c5: "POE L2",
        l5: "https://meet.google.com/tbh-bnop-hmh",
        c6: "",
        l6: "",
        c7: "POE L2",
        l7: "https://meet.google.com/tbh-bnop-hmh",
        c8: "",
        l8: ` ""`,
      },

      {
        key: 6,
        c1: "12 am",
        l1: "",
        c2: "",
        l2: "",
        c3: "Thermo L1",
        l3: "https://meet.google.com/hgi-meez-fkc",
        c4: "",
        l4: "",
        c5: "Thermo L1",
        l5: "https://meet.google.com/hgi-meez-fkc",
        c6: "",
        l6: "",
        c7: "Thermo L1",
        l7: "https://meet.google.com/hgi-meez-fkc",
        c8: "",
        l8: `""`,
      },

      {
        key: 7,
        c1: "1 am",
        l1: "",
        c2: "B",
        l2: "",
        c3: "R",
        l3: "",
        c4: "E",
        l4: "",
        c5: "A",
        l5: "",
        c6: "K",
        l6: "",
        c7: "-B",
        l7: "",
        c8: "C",
        l8: `""`,
      },

      {
        key: 8,
        c1: "2 am",
        l1: "",
        c2: "Math III L7",
        l2: "https://meet.google.com/ije-yvxf-ixn",
        c3: "Mat sci and eng P3",
        l3: "https://meet.google.com/kxr-bnwx-rit",
        c4: "Math III L7",
        l4: "https://meet.google.com/ije-yvxf-ixn",
        c5: "Thermo Lab P3",
        l5: "https://meet.google.com/lookup/fodrs2hv4e?authuser=0&hs=179",
        c6: "Math III L7",
        l6: "https://meet.google.com/ije-yvxf-ixn",
        c7: "",
        l7: "",
        c8: "",
        l8: `""`,
      },

      {
        key: 9,
        c1: "3 am",
        l1: "",
        c2: "Fluid Mech L1",
        l2: "https://meet.google.com/wce-cxve-etp?hs=224",
        c3: "Mat sci and eng P3",
        l3: "https://meet.google.com/kxr-bnwx-rit",
        c4: "Fluid Mech L1",
        l4: "https://meet.google.com/wce-cxve-etp?hs=224",
        c5: "Thermo Lab P3",
        l5: "https://meet.google.com/lookup/fodrs2hv4e?authuser=0&hs=179",
        c6: "Fluid Mech L1",
        l6: "https://meet.google.com/wce-cxve-etp?hs=224",
        c7: "",
        l7: "",
        c8: "",
        l8: `""`,
      },

      {
        key: 10,
        c1: "4 am",
        l1: "",
        c2: "Mat sci and eng L1",
        l2: "https://meet.google.com/gty-jjaw-okd",
        c3: "Math III T6",
        l3: "http://meet.google.com/min-bhom-kib",
        c4: "Mat sci and eng L1",
        l4: "https://meet.google.com/gty-jjaw-okd",
        c5: "Mat sci and eng T2",
        l5: "https://meet.google.com/cjr-pozz-dfh",
        c6: "",
        l6: "",
        c7: "",
        l7: "",
        c8: "",
        l8: "",
      },
    ];
    return (
      <>
        <div className={meet.container}>
          <div className={meet.header}>Time-Table</div>
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
        </div>
      </>
    );
}