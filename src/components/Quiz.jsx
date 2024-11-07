import React, { useState, useEffect } from 'react';

function Quiz({ quizData, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
      setShowFeedback(false);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
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
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNext}>次の問題へ</button>
          ) : (
            <button onClick={onBack}>クイズ選択に戻る</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
