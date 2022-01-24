const reclectures = [
  {
    key: 1,
    name: "Adv MOS",
    id: "Brajesh P",
    section: "L1",
    link: "https://drive.google.com/drive/folders/1-FjSXj6mUUDxaoOoAi3YQ_a3pKKm0cw9n9eHetMafclN9fL9zRsJhPUMQ9VBcROqtQqe9lSe",
  },
  {
    key: 2,
    name: "Mech & Machines",
    id: "Y V Daseswara Rao",
    section: "L1/T3",
    link: "https://classroom.google.com/u/0/c/NDUzNTgwODQwMDQw",
  },
//   {
//     key: 3,
//     name: "POE",
//     id: "Bheemeshwar",
//     section: "L2",
//     link: "https://drive.google.com/file/d/1mPO0drzJlYmdWeS_UVlSar5F0sA7X7AI/view?usp=sharing",
//   },
//   {
//     key: 4,
//     name: "Thermodynamics",
//     id: "Deepak Nabapure",
//     section: "P3",
//     link: "https://classroom.google.com/u/0/c/MTMwOTI5MTg4NzYz",
//   },
//   {
//     key: 5,
//     name: "EPS",
//     id: "Santosh sir",
//     section: "L1",
//     link: "https://drive.google.com/drive/folders/1UtyZzVGTb9uFCXflvVKW6sAJHj9Tp41l",
//   },
//   {
//     key: 6,
//     name: "Thermodynamics",
//     id: "Satish Dubey",
//     section: "L1",
//     link: "https://cms.bits-hyderabad.ac.in/course/view.php?id=13989",
//   },
//   {
//     key: 7,
//     name: "Fluid Mechanics",
//     id: "Pradha Venkata",
//     section: "L1",
//     link: "https://cms.bits-hyderabad.ac.in/mod/forum/discuss.php?d=26501",
//   },
//   {
//     key: 8,
//     name: "Mech Of Solids",
//     id: "Pavan Kumar",
//     section: "L1",
//     link: "https://classroom.google.com/u/0/c/MzgxNTYxODY4ODk2",
//   },
//   {
//     key: 9,
//     name: "Maths-tuts",
//     id: "No clue man",
//     section: "meh",
//     link: "https://drive.google.com/drive/u/1/folders/13SdZz-KY69xFWqrqzyNd7ckB7bPqHvVq",
//   },
];

export default function handler(req, res) {
  res.status(200).json(tabledata);
}
