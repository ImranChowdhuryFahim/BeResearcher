import React, { useEffect, useState } from 'react';
import './quiz.css';

const Question = ({
  question,
  correctAnswer,
  option1,
  option2,
  option3,
  option4,
  OnQuizAnswered,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [options, setOptions] = useState([]);

  const handleCheckingAnswer = (answer) => {
    console.log('chosen answer: ', answer);
    if (!showAnswer) {
      setShowAnswer(true);
    }
    if (answer === correctAnswer) OnQuizAnswered();
  };

  const handleNextQuestion = () => {
    // setCurrentQuestionIndex(currentQuestionIndex + 1);
    // setShowAnswer(false);
  };

  useEffect(() => {
    setOptions([option1, option2, option3, option4]);
  }, []);

  return (
    <>
      <div className="question-answer-container">
        <div className="question">{question}</div>
        <div className="answer-container">
          {options.map((elem, index) => (
            <button
              className={
                'answer ' +
                (showAnswer
                  ? elem === correctAnswer
                    ? 'green-border'
                    : 'red-border'
                  : '')
              }
              onClick={() => handleCheckingAnswer(elem)}
              dangerouslySetInnerHTML={{ __html: `${index + 1}. ${elem}` }}
            />
          ))}
        </div>
        {/* <button
          className={'next-btn ' + (showAnswer ? '' : 'hidden')}
          title="go to next question"
          onClick={handleNextQuestion}
        >
          NEXT
        </button> */}
      </div>
    </>
  );
};

export default Question;
