import Card from "../components/content/cards";

export default function RecLect() {
    const reclectures = [
      {
        name: "Material Sci and Eng",
        id: "Sujit R",
        section: "L1/T2/P3",
        link: "https://classroom.google.com/u/0/w/MzgzNDY3Nzg1Nzc1/tc/Mzg0MDA3MDA2NTA2",
      },
      {
        name: "Maths 3",
        id: "K bhargava",
        section: "L7",
        link: "https://drive.google.com/drive/folders/1LfaJOgg9V0BhUosFdCBqsA_ms2uRZY7G?usp=sharing",
      },
      {
        name: "POE",
        id: "Bheemeshwar",
        section: "L2",
        link: "https://drive.google.com/file/d/1mPO0drzJlYmdWeS_UVlSar5F0sA7X7AI/view?usp=sharing",
      },
    ];

    return (
        <>
            {reclectures.map((data) => (
                <Card {...data}/>
            ))}
        </>
    )
}