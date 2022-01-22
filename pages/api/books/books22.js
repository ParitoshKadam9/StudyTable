const data = [
  {
    name: "Adv MOS",
    id: "ME F218",
    key: 1,
    link: "https://drive.google.com/file/d/1Yl_vMMMN8dRYthxjq3fYRPOCTcHQIq3d/view",
  },
  {
    name: "Mech & Machines",
    id: "MATH F221",
    key: 2,
    link: "https://drive.google.com/file/d/17sVp3d7kRWNuzM-bue6JMpfGBhkBkadb/view",
  },
  {
    name: "EVS",
    id: "BITS F225",
    key: 3,
    link: "https://drive.google.com/file/d/1q_a8h5QgVpre6bIbhxyK5xxb54QrRiid/view",
  },
  {
    name: "Manufacturing",
    id: "ME F219",
    key: 4,
    link: "https://drive.google.com/file/d/19yVLz7WpFuYrXGL09Mp_hupQKJlIjuM8/view",
  },
  {
    name: "Heat Transfer",
    id: "ME F220",
    key: 5,
    link: "https://drive.google.com/file/d/1Iz_NsqPop6l2yjRq-nVE0vpgkRxH804X/view",
  },
  
];

export default function handler(req, res) {
  res.status(200).json(data);
}
