const summerlinks = [
  {
    key: 1,
    name: "Maths",
    id: "SuKu",
    section: "nais",
    link: "https://sites.google.com/site/sureshkumaryd/home/assignments",
  },
  {
    key: 2,
    name: "Brain Chart",
    id: "Me",
    section: "One at a Time",
    link: "https://lucid.app/lucidspark/c3df9ccf-d1e2-4149-a572-0b44d990fdb3/edit?invitationId=inv_749b04f6-3ac6-4254-bfe1-3d418c9eff20#",
  },
  {
    key: 3,
    name: "Fusion 360",
    id: "CAD",
    section: "art",
    link: "https://www.youtube.com/c/LearnEverythingAboutDesign",
  },
  {
    key: 4,
    name: "ConSys",
    id: "IITM",
    section: "Robotics",
    link: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M8-wda5vbgHkMQTmu-21hRK",
  },
  {
    key: 5,
    name: "Work Track",
    id: "Hourly track",
    section: "Discipline",
    link: "https://docs.google.com/spreadsheets/d/1X9NaKYHBMUSRALnXLNztzOtdi4qNNKV1EEWTNP9TqKY/edit#gid=0",
  },
  {
    key: 6,
    name: "XF Sports",
    id: "Mechanics",
    section: "art",
    link: "https://www.youtube.com/c/SK8215/playlists",
  },
];

export default function handler(req, res) {
  res.status(200).json(summerlinks);
}
