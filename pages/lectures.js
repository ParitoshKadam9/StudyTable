import Card from "../components/content/cards";

export default function RecLect() {
    const reclectures = [
      {
        key:1,
        name: "Mat Sci and Eng",
        id: "Sujit R",
        section: "L1/T2/P3",
        link: "https://classroom.google.com/u/0/w/MzgzNDY3Nzg1Nzc1/tc/Mzg0MDA3MDA2NTA2",
      },
      {
         key:2,
        name: "Maths 3",
        id: "K bhargava",
        section: "L7",
        link: "https://drive.google.com/drive/folders/1LfaJOgg9V0BhUosFdCBqsA_ms2uRZY7G?usp=sharing",
      },
      {
        key:3,
        name: "POE",
        id: "Bheemeshwar",
        section: "L2",
        link: "https://drive.google.com/file/d/1mPO0drzJlYmdWeS_UVlSar5F0sA7X7AI/view?usp=sharing",
      },
      {
        key: 4,
        name: "Thermodynamics",
        id: "Deepak Nabapure",
        section: "P3",
        link: "https://classroom.google.com/u/0/c/MTMwOTI5MTg4NzYz",
      },
      {
        key:5,
        name: "EPS",
        id: "Santosh sir",
        section: "L1",
        link: "https://drive.google.com/drive/folders/1UtyZzVGTb9uFCXflvVKW6sAJHj9Tp41l",
      },
      {
         key:6,
        name: "Thermodynamics",
        id: "Satish Dubey",
        section: "L1",
        link: "https://cms.bits-hyderabad.ac.in/course/view.php?id=13989",
      },
      {
         key:7,
        name: "Fluid Mechanics",
        id: "Pradha Venkata",
        section: "L1",
        link: "https://cms.bits-hyderabad.ac.in/mod/forum/discuss.php?d=26501",
      },
      {
         key:8,
        name: "Mech Of Solids",
        id: "Pavan Kumar",
        section: "L1",
        link: "https://classroom.google.com/u/0/c/MzgxNTYxODY4ODk2",
      },
    ];

    return (
      <>
        {reclectures.map((data) => (
          <Card key={data.key}  {...data} />
        ))}
      </>
    );
}