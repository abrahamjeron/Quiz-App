import React, { useState, useEffect } from 'react';
import questions from './questions.js';
import Result from './Result.js'; 
import "./question.css";
import { Link } from 'react-router-dom';

export default function QuestionBox() {
  //Initialiszing the states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [dark, setDark] = useState(false);
  const [mode,setMode]=useState('Dark Mode')

  //UseEffect hook to change the color of the question (highlighting)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHighlighted(false);
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, [highlighted]);

  const highlightQuestion = () => {
    setHighlighted(true);
  };

  const removehighlightQuestion = () => {
    setHighlighted(false);
  };
  
  //Logic of the quiz
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) { //If the ans is correct, the the score will be added by manipulating the state
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1; //increasing the question number by manipulating the state
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setHighlighted(false);
    } else {
      console.log('Finished', score);
      setQuizFinished(true);  // Set quizFinished to true when all questions are answered
    }
  };

  // Conditional rendering the result page based on quiz completion
  if (quizFinished) {
    return <Result score={score} mode={true ? dark : false}/>; //setting the props to use it in another component i.e Result.js
  }

  // TO swith the theme of the page
  const changetheme = () => {
    console.log("clicked");
    setDark((prevDark) => !prevDark); // Toggle dark mode
  };


  return (
    // the Dom of the webpage
    <div className='body-cont' style={{backgroundColor: dark ? '#272938' : '#F7F8FB'}}> 

      <div className='navigation' style={{ backgroundColor: dark ? '#3D488B' : '#394B78' }}>
        <h1>Quiz App</h1>
        {/* theme changing button */}
        <button onClick={() => {
          changetheme();
          setMode((prevMode) => (prevMode === 'Light Mode' ? 'Dark Mode' : 'Light Mode'));
        }}
        style={{backgroundColor: dark ? 'white' : 'black',color: dark ? 'black' : 'white'}}>{mode}</button>
      </div>

      {/* container for Questions and answeres */}
      <div className='question-container'>
        <h1 id='question' style={{ color: highlighted ? 'blue' : '#9598A3' }}>
          {questions[currentQuestion].text}
        </h1>

        {/* to display the question number in the UI */}
        <h1 id='questionnum'>Question no: {currentQuestion + 1}</h1>

        <div>
          {questions[currentQuestion].options.map((option) => (
            <button className='buttons'
              key={option.id}
              onClick={() => handleAnswerClick(option.isCorrect)}
              style={{ backgroundColor: dark ? '#576097' : 'white' ,color: dark ? 'white' : '#272938'}}
            >
              <p>{option.num}</p>
              {option.text}
            </button>
          ))}
        </div>
      </div>
      <div className='quesbuttons'>
        <button id='add' onClick={highlightQuestion}>Highlight</button>
        <button id='remove' onClick={removehighlightQuestion}>Remove Highlight</button>
      </div>
    </div>
  );
}
