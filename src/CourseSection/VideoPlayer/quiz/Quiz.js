import React, { useEffect, useState } from 'react';
import './quiz.css';

const SingleQuestion = ({
  question,
  answers,
  options,
  questionNo,
  quizLength,
  handleNextQuestion,
  OnQuizAnswered,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOptionsNumbers, setSelectedOptionsNumbers] = useState([]);

  const handleItemClick = (items) => {
    setSelectedOptionsNumbers((prev) => {
      return [...prev, items];
    });
  };

  const handleSubmit = () => {
    if (selectedOptionsNumbers.length > 0) {
      setShowAnswer(true);
    }
    if (questionNo === quizLength) {
      setTimeout(() => {
        alert('Quiz Completed');
        OnQuizAnswered();
      }, 2000);
    }
  };

  const resetStateAndHandleNextQuestionClick = () => {
    setShowAnswer(false);
    setSelectedOptionsNumbers([]);
    handleNextQuestion();
  };

  return (
    <>
      <div className="question">
        (Q.{questionNo} of {quizLength}) {question}
      </div>
      <div className="answer-container">
        {options.map((elem, index) => (
          <button
            className={
              'answer ' +
              (selectedOptionsNumbers.includes(index)
                ? showAnswer
                  ? answers.includes(index + 1)
                    ? 'green-border'
                    : 'red-border'
                  : 'black-border'
                : showAnswer
                ? answers.includes(index + 1)
                  ? 'green-border'
                  : ''
                : '')
            }
            disabled={showAnswer}
            onClick={() => handleItemClick(index)}
            dangerouslySetInnerHTML={{ __html: `${index + 1}. ${elem}` }}
          />
        ))}
      </div>
      <button className="submit-btn-quiz" onClick={handleSubmit}>
        SUBMIT
      </button>
      <button
        className={
          'next-btn ' + (showAnswer && questionNo < quizLength ? '' : 'hidden')
        }
        title="go to next question"
        onClick={resetStateAndHandleNextQuestionClick}
      >
        NEXT
      </button>
    </>
  );
};

const Questions = ({
  quiz,
  // question,
  // quiz.answer,
  // option1,
  // option2,
  // option3,
  // option4,
  OnQuizAnswered,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [answers, setAnswer] = useState([]);

  // const handleCheckingAnswer = (answer) => {
  //   console.log('chosen answer: ', answer);
  //   if (!showAnswer) {
  //     setShowAnswer(true);
  //   }
  //   // if (answer === quiz[currentQuestionIndex].answer) OnQuizAnswered();
  // };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (quiz) {
      setOptions([
        quiz[currentQuestionIndex].option1,
        quiz[currentQuestionIndex].option2,
        quiz[currentQuestionIndex].option3,
        quiz[currentQuestionIndex].option4,
      ]);
      const nAnswer = quiz[currentQuestionIndex].answer.map(
        (answer) => +answer
      );
      setAnswer(nAnswer);
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
          <SingleQuestion
            question={quiz[currentQuestionIndex].question}
            options={options}
            answers={answers}
            questionNo={currentQuestionIndex + 1}
            quizLength={quiz.length}
            handleNextQuestion={handleNextQuestion}
            OnQuizAnswered={OnQuizAnswered}
          />
        </div>
      )}
    </>
  );
};

export default Questions;
