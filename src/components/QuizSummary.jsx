import React from 'react';

function QuizSummary({ results, onBack, quizTitle }) {
  const correctCount = results.filter(result => result.isCorrect).length;
  const totalCount = results.length;
  const correctRate = (correctCount / totalCount) * 100;

  const handleSearch = (question) => {
    const searchQuery = encodeURIComponent(question);
    window.open(`https://www.bing.com/search?q=${searchQuery}`, '_blank');
  };

  const handlePrint = () => {
    const printContent = `
      <!DOCTYPE html>
      <html lang="ja">
        <head>
          <meta charset="UTF-8">
          <title>${quizTitle} - クイズ結果</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .result-item { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
            .correct { color: green; }
            .incorrect { color: red; }
          </style>
        </head>
        <body>
          <h1>${quizTitle}</h1>
          <h2>クイズ結果</h2>
          <p>正答率: ${correctRate.toFixed(2)}% (${correctCount}/${totalCount})</p>
          ${results.map((result, index) => `
            <div class="result-item">
              <h3>問題 ${index + 1}</h3>
              <p>${result.question}</p>
              <p>あなたの回答: ${result.selectedOptions.join(', ')}</p>
              <p>正解: ${result.correctOptions.join(', ')}</p>
              <p class="${result.isCorrect ? 'correct' : 'incorrect'}">${result.isCorrect ? '正解' : '不正解'}</p>
              <p>${result.explanation}</p>
            </div>
          `).join('')}
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();

    printWindow.onload = function() {
      printWindow.focus();
      printWindow.print();
    };
  };

  return (
    <div className="quiz-summary">
      <h2>{quizTitle}</h2>
      <h3>クイズ結果</h3>
      <p>正答率: {correctRate.toFixed(2)}% ({correctCount}/{totalCount})</p>
      <div className="results-list">
        {results.map((result, index) => (
          <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
            <h3>問題 {index + 1}</h3>
            <p>{result.question}</p>
            <button onClick={() => handleSearch(result.question)}>検索</button>
            <p>あなたの回答: {result.selectedOptions.join(', ')}</p>
            <p>正解: {result.correctOptions.join(', ')}</p>
            <p>{result.isCorrect ? '正解' : '不正解'}</p>
            <p className="explanation">{result.explanation}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={onBack}>問題選択画面に戻る</button>
        <button onClick={handlePrint}>印刷</button>
      </div>
    </div>
  );
}

export default QuizSummary;
