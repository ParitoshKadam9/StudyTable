const data = [
  {
    name: "Fluid Mechanics",
    id: "ME F212",
    key: 1,
    link: "https://drive.google.com/file/d/1NDvVVFVQekadIHVwuAtYzSD-G_UF2Pdj/view",
  },
  {
    name: "Maths 3",
    id: "MATH F211",
    key: 2,
    link: "https://drive.google.com/file/d/1BbIYxk0bx6-aj0_FSRQW0bg6LoM7mUJ1/view",
  },
  {
    name: "Mech of Solids",
    id: "ME F211",
    key: 3,
    link: "https://drive.google.com/file/d/1z5AzcbReqBfs1f6AN3N_0BBXbfLQlE9p/view",
  },
  {
    name: "Mat sci and eng",
    id: "ME F216",
    key: 4,
    link: "https://drive.google.com/file/d/1nP3Ymk8URwOld2UX470hcIZzF6uD0xur/view",
  },
  {
    name: "Applied Thermo",
    id: "ME F216",
    key: 5,
    link: "https://drive.google.com/file/d/17rSs17dN8tdJcGaDv5gUQFH6rKDONDyN/view",
  },
  {
    name: "POE",
    id: "ECON F211",
    key: 5,
    link: "https://drive.google.com/file/d/1fcGgoeW4YNZbsvplxGnUzmC6PnKeCVt5/view",
  },
  {
    name: "EPS",
    id: "GS F425",
    key: 5,
    link: "",
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}