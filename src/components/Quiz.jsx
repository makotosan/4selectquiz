import React, { useState, useEffect } from 'react';
import QuizSummary from './QuizSummary';

function Quiz({ quizData, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const shuffledQuestions = [...quizData.quizzes].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions.map(q => ({
      ...q,
      options: q.options.sort(() => Math.random() - 0.5)
    })));
  }, [quizData]);

  const handleOptionSelect = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.multiselect) {
      const index = newSelectedOptions.indexOf(optionIndex);
      if (index > -1) {
        newSelectedOptions.splice(index, 1);
      } else {
        newSelectedOptions.push(optionIndex);
      }
    } else {
      newSelectedOptions[0] = optionIndex;
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers = currentQuestion.options
      .map((option, index) => option.answer ? index : -1)
      .filter(index => index !== -1);

    const isAnswerCorrect = currentQuestion.multiselect
      ? selectedOptions.length === correctAnswers.length && selectedOptions.every(option => correctAnswers.includes(option))
      : selectedOptions[0] === correctAnswers[0];

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    setResults(prevResults => [...prevResults, {
      question: currentQuestion.question,
      isCorrect: isAnswerCorrect,
      selectedOptions: selectedOptions.map(index => currentQuestion.options[index].text),
      correctOptions: correctAnswers.map(index => currentQuestion.options[index].text),
      explanation: currentQuestion.explanation
    }]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (quizCompleted) {
    return <QuizSummary results={results} onBack={onBack} quizTitle={quizData.title} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{quizData.title} ({currentQuestionIndex + 1}/{questions.length})</h2>
      <div className="question">
        <p>{currentQuestion.question}</p>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`option ${selectedOptions.includes(index) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(index)}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
      {!showFeedback && (
        <button onClick={handleSubmit}>回答する</button>
      )}
      {showFeedback && (
        <div>
          <p className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '正解です！' : '不正解です。'}
          </p>
          <p className="explanation">{currentQuestion.explanation}</p>
          <button onClick={handleNext}>
            {currentQuestionIndex < questions.length - 1 ? '次の問題へ' : '結果を見る'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
