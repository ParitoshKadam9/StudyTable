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
  {
    key: 3,
    name: "NNFL",
    id: "Rajesh Kumar ",
    section: "L1",
    link: "https://drive.google.com/drive/folders/1Dv_xnHYGJk8AMMgRdSP_XJNHUCfr1Lif",
  },
  {
    key: 4,
    name: "Post Col lit",
    id: "Vijay Tadakamalla",
    section: "L1",
    link: "https://docs.google.com/document/d/1ZyjTO42dVQMguMqBr9kCCm0CFVEYb_mAcXb7iH2jAjQ/edit",
  },
  {
    key: 6,
    name: "NNFL",
    id: "2021",
    section: "L1",
    link: "https://drive.google.com/drive/u/1/folders/1n2jBKFpzoo1haGBHxuDLUOUidLPK-w37",
  },
  {
    key: 5,
    name: "Manuf",
    id: " N Suresh Reddy",
    section: "L1",
    link: "https://drive.google.com/drive/folders/1aR1NgIwp6CtZRxn5SYz2N49tekdkqdGz",
  },
  {
    key: 6,
    name: "Adv Com Eng",
    id: "Pranesh Madarchod",
    section: "L1",
    link: "https://drive.google.com/drive/folders/1GfaryNneO9NR7kgt69yho34b887uWldL",
  },
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
  res.status(200).json(reclectures);
}
