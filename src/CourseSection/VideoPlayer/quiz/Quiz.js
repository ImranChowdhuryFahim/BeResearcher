import React, { useEffect, useState } from 'react';
import './quiz.css';

const SingleQuestion = ({
  question,
  answers,
  options,
  questionNo,
  quizLength,
  handleNextQuestion,
  handleUpdateScore,
  handleQuizFinished,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOptionsNumbers, setSelectedOptionsNumbers] = useState([]);

  const handleItemClick = (item) => {
    if (selectedOptionsNumbers.includes(item)) {
      const nSelectedOptionsNumber = selectedOptionsNumbers.filter(
        (elem) => elem !== item
      );
      setSelectedOptionsNumbers(nSelectedOptionsNumber);
    } else {
      setSelectedOptionsNumbers((prev) => {
        return [...prev, item];
      });
    }
  };

  const handleSubmit = () => {
    if (selectedOptionsNumbers.length > 0) {
      setShowAnswer(true);
      let correct = true;
      for (let selecedItem in selectedOptionsNumbers) {
        if (!answers.includes(selectedOptionsNumbers[selecedItem] + 1)) {
          correct = false;
          break;
        }
      }

      if (selectedOptionsNumbers.length !== answers.length) {
        correct = false;
      }

      if (correct) {
        handleUpdateScore();
      } else {
      }
    }
    if (questionNo === quizLength) {
      handleQuizFinished();
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
        {options.map((elem, index) => {
          if (elem !== undefined) {
            return (
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
            );
          }
        })}
      </div>
      <button
        disabled={showAnswer}
        className="submit-btn-quiz"
        onClick={handleSubmit}
      >
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

const Questions = ({ quiz, OnQuizAnswered }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [answers, setAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [quizeFinished, setQuizFinished] = useState(false);

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

  const handleUpdateScore = () => {
    setScore(score + 1);
  };

  const handleQuizFinished = () => {
    if (score >= 4) OnQuizAnswered();
    setTimeout(() => {
      setQuizFinished(true);
    }, 2000);
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
  }, [quiz, currentQuestionIndex]);

  return (
    <>
      {!quiz ? (
        'loading...'
      ) : (
        <div className="question-answer-container">
          {quizeFinished ? (
            (score * 100) / quiz.length < 70 ? ( // pass: 70% mark
              <span role="img" aria-label="failed">
                🙁 You failed the quiz. Watch the video again and back to this
                quiz.
              </span>
            ) : (
              <span role="img" aria-label="pass">
                😊 You successfully Completed the Quiz.
              </span>
            )
          ) : (
            <SingleQuestion
              question={quiz[currentQuestionIndex].question}
              options={options}
              answers={answers}
              questionNo={currentQuestionIndex + 1}
              quizLength={quiz.length}
              handleNextQuestion={handleNextQuestion}
              handleUpdateScore={handleUpdateScore}
              handleQuizFinished={handleQuizFinished}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Questions;
