import React from 'react';
import "./question.css";

export default function Result(props) {
  //Gettting props from QuestionBox.js
  const { score, mode } = props;

  return (
    // navigation bar of the page
    <div className='body-cont' style={{backgroundColor: mode ? '#272938' : '#F7F8FB'}} >
      <div className='navigation'>
        <h1>Quiz App</h1>

        {/* Checking the theme of the page from the previous component by using the props */}
        <button style={{color: mode ? 'black' : 'white',backgroundColor: mode ? 'white' : 'black'}}>{mode?'Light Mode':'Dark Mode'} </button>
      </div>
      <h1 className='score' style={{color: mode ? 'white' : 'black'}}>
        
        {/* Showing the score in UI by using props */}
        Your score is {score} out of 5
      </h1>

      <a href='' id='restartbtn'>Restart Quiz</a>
    </div>
  );
}
