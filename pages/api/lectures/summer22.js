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
    c2: "CodeF",
    l2: "https://codeforces.com/",
    c3: "CodeF",
    l3: "https://codeforces.com/",
    c4: "CodeF",
    l4: "https://codeforces.com/",
    c5: "CodeF",
    l5: "https://codeforces.com/",
    c6: "CodeF",
    l6: "https://codeforces.com/",
    c7: "CodeF",
    l7: "https://codeforces.com/",
    c8: "",
    l8: `""`,
  },

  {
    key: 3,
    c1: "9 am",
    l1: "",
    c2: "Math CS",
    l2: "https://www.youtube.com/watch?v=L3LMbpZIKhQ&list=PLB7540DEDD482705B",
    c3: "ConSys",
    l3: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M8-wda5vbgHkMQTmu-21hRK",
    c4: "Math CS",
    l4: "https://www.youtube.com/watch?v=L3LMbpZIKhQ&list=PLB7540DEDD482705B",
    c5: "Consys",
    l5: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M8-wda5vbgHkMQTmu-21hRK",
    c6: "Math CS",
    l6: "https://www.youtube.com/watch?v=L3LMbpZIKhQ&list=PLB7540DEDD482705B",
    c7: "Consys",
    l7: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M8-wda5vbgHkMQTmu-21hRK",
    c8: "",
    l8: `""`,
  },

  {
    key: 4,
    c1: "10 am",
    l1: "",
    c2: "ImgPro CV",
    l2: "https://www.youtube.com/playlist?list=PLcXJymqaE9PMexHWGgXJVINpr6ajy5vuz",
    c3: "CAD",
    l3: "https://www.youtube.com/c/LearnEverythingAboutDesign",
    c4: "ImgPro CV",
    l4: "https://www.youtube.com/playlist?list=PLcXJymqaE9PMexHWGgXJVINpr6ajy5vuz",
    c5: "CAD",
    l5: "https://www.youtube.com/c/LearnEverythingAboutDesign",
    c6: "ImgPro CV",
    l6: "https://www.youtube.com/playlist?list=PLcXJymqaE9PMexHWGgXJVINpr6ajy5vuz",
    c7: "CAD",
    l7: "https://www.youtube.com/c/LearnEverythingAboutDesign",
    c8: "",
    l8: `""`,
  },

  {
    key: 5,
    c1: "11 am",
    l1: "",
    c2: "E",
    l2: "",
    c3: "X",
    l3: "",
    c4: "P",
    l4: "",
    c5: "L",
    l5: "",
    c6: "O",
    l6: "",
    c7: "R",
    l7: "",
    c8: "E",
    l8: ` ""`,
  },

  {
    key: 6,
    c1: "12 am",
    l1: "",
    c2: "",
    l2: "",
    c3: "",
    l3: "",
    c4: "",
    l4: "",
    c5: "",
    l5: "",
    c6: "",
    l6: "",
    c7: "",
    l7: "",
    c8: "",
    l8: `""`,
  },

  {
    key: 7,
    c1: "1 am",
    l1: "",
    c2: "Fluid Mech",
    l2: "",
    c3: "ECU",
    l3: "",
    c4: "Fluic Mech",
    l4: "",
    c5: "ECU",
    l5: "",
    c6: "Fluid Mech",
    l6: "",
    c7: "ECU",
    l7: "",
    c8: "",
    l8: `""`,
  },

  {
    key: 8,
    c1: "2 am",
    l1: "",
    c2: "",
    l2: "",
    c3: "W",
    l3: "",
    c4: "O",
    l4: "",
    c5: "R",
    l5: "",
    c6: "K",
    l6: "",
    c7: "",
    l7: "",
    c8: "",
    l8: `""`,
  },

  {
    key: 9,
    c1: "3 am",
    l1: "",
    c2: "",
    l2: "",
    c3: "W",
    l3: "",
    c4: "O",
    l4: "",
    c5: "R",
    l5: "",
    c6: "K",
    l6: "",
    c7: "",
    l7: "",
    c8: "",
    l8: `""`,
  },

  {
    key: 10,
    c1: "4 am",
    l1: "",
    c2: "",
    l2: "",
    c3: "W",
    l3: "",
    c4: "O",
    l4: "",
    c5: "R",
    l5: "",
    c6: "K",
    l6: "",
    c7: "",
    l7: "",
    c8: "",
    l8: `""`,
  },
];

export default function handler(req, res) {
  res.status(200).json(tabledata);
}