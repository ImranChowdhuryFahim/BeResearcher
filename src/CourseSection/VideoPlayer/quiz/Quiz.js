import React, { useEffect, useState } from 'react';
import './quiz.css';

const Question = ({
  quiz,
  // question,
  // quiz.answer,
  // option1,
  // option2,
  // option3,
  // option4,
  OnQuizAnswered,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [options, setOptions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleCheckingAnswer = (answer) => {
    console.log('chosen answer: ', answer);
    if (!showAnswer) {
      setShowAnswer(true);
    }
    // if (answer === quiz[currentQuestionIndex].answer) OnQuizAnswered();
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowAnswer(false);
  };

  useEffect(() => {
    if (quiz) {
      setOptions([
        quiz[currentQuestionIndex].option1,
        quiz[currentQuestionIndex].option2,
        quiz[currentQuestionIndex].option3,
        quiz[currentQuestionIndex].option4,
      ]);
    }
    console.log('******', quiz);
  }, [quiz, currentQuestionIndex]);

  return (
    // <div>
    //   {!quiz ? 'kkkkkkkkkkkkk' : <div>{JSON.stringify(quiz, null, 2)}</div>}
    // </div>

    <>
      {!quiz ? (
        'loading...'
      ) : (
        <div className="question-answer-container">
          <div className="question">
            (Q.{currentQuestionIndex + 1} of {quiz.length}){' '}
            {quiz[currentQuestionIndex].question}
          </div>
          <div className="answer-container">
            {options.map((elem, index) => (
              <button
                className={
                  'answer ' +
                  (showAnswer
                    ? elem === quiz[currentQuestionIndex].answer
                      ? 'green-border'
                      : 'red-border'
                    : '')
                }
                onClick={() => handleCheckingAnswer(elem)}
                dangerouslySetInnerHTML={{ __html: `${index + 1}. ${elem}` }}
              />
            ))}
          </div>
          <button
            className={
              'next-btn ' +
              (showAnswer && currentQuestionIndex < quiz.length - 1
                ? ''
                : 'hidden')
            }
            title="go to next question"
            onClick={handleNextQuestion}
          >
            NEXT
          </button>
        </div>
      )}
    </>
  );
};

export default Question;
