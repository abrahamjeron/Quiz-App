const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false ,num:1},
      { id: 1, text: "user interface framework", isCorrect: true,num:2 },
      { id: 2, text: "both a and b", isCorrect: false ,num:3},
      { id: 3, text: "none of the above", isCorrect: false ,num:4},
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true ,num:1},
      { id: 1, text: "Java", isCorrect:  false ,num:2},
      { id: 2, text: "C", isCorrect:  false ,num:3},
      { id: 3, text: "C++", isCorrect: false,num:4},
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect:  false ,num:1},
      { id: 1, text: "Internal storage of the component.", isCorrect: true ,num:2},
      { id: 2, text: "External storage of the component.", isCorrect: false ,num:3},
      { id: 3, text: "None of the above.", isCorrect:  false ,num:4},
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: " Pair of current state and function updating it", isCorrect: true ,num:1},
      { id: 1, text: "Current State", isCorrect:  false ,num:2},
      { id: 2, text: "Function updating the current state", isCorrect:  false ,num:3},
      { id: 3, text: "UseState returns nothing", isCorrect: false,num:4},
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect: true ,num:1},
      { id: 1, text: "2", isCorrect:  false ,num:2},
      { id: 2, text: "3", isCorrect:  false ,num:3},
      { id: 3, text: "4", isCorrect:  false,num:4},
    ],
  },
];

export default questions;