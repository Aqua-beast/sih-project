import React, { useState } from 'react';
import Sentiment from 'sentiment';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [sentimentScore, setSentimentScore] = useState(0);
  const [sentimentResult, setSentimentResult] = useState('');
  const [filteredText, setfilteredText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const analyzeSentiment = async() => {
    let senti=await fetch('https://api.api-ninjas.com/v1/profanityfilter?text='+text,
    {
      headers:{
        'X-Api-Key': 'uq0STJbLSyaIRorXvhLHVQ==0uUbsiQZsBMmFpHX'
      }
    })

    const sentiment = new Sentiment();
    const analysis = sentiment.analyze(text);

    setSentimentScore(analysis.score);
    setSentimentResult(analysis.score > 0 ? 'Positive' : analysis.score < 0 ? 'Negative' : 'Neutral');
    console.log(sentiment)
    let res=await senti.json()
    setfilteredText(res.censored)
  };

  return (
    <div>
      <h2>Sentiment Analysis</h2>
      <textarea
        placeholder="Enter text for sentiment analysis..."
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={analyzeSentiment}>Analyze</button>
      {sentimentScore !== 0 && (
        <div>
          <h3>Analysis Result:</h3>
          <p>
            Sentiment Score: {sentimentScore} ({sentimentResult})
          </p>
        </div>
        
      )}
      <div>
          <h3>Filtered Text:</h3>
          <p>
            {filteredText}
          </p>
        </div>
    </div>
  );
};

export default SentimentAnalysis;
