import card from "../../styles/Card/card.module.css"
import Link from "next/dist/client/link";

export default function Card({...data}) {
    return (
      <>
        <Link href="/">
          <div className={card.container}>
            <div className={card.head}>{data.name}</div>
            <div className={card.code}>{data.id}</div>
            <div className={card.timing}>{data.time}</div>
          </div>
        </Link>
      </>
    );
}