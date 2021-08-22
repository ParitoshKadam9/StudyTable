import timeTable from "../styles/TimeTable/timetable.module.css"

export default function TimeTable() {
    return (
        <>
            <div className={timeTable.container}>
                <iframe src="https://chronofactorem.herokuapp.com" width="1100px" height="700px" z-index="10" ></iframe>
            </div>
        </>
    )
}