import React, { useState } from 'react';
import Sentiment from 'sentiment';
import Response from '../Components/Response/Response';
import ChatBox from '../Components/Chat/ChatBox';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [sentimentScore, setSentimentScore] = useState(90);
  const [sentimentResult, setSentimentResult] = useState('Positive');
  const [filteredText, setfilteredText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const analyzeSentiment = async () => {
    let senti = await fetch('https://api.api-ninjas.com/v1/profanityfilter?text=' + text,
      {
        headers: {
          'X-Api-Key': 'uq0STJbLSyaIRorXvhLHVQ==0uUbsiQZsBMmFpHX'
        }
      })

    const sentiment = new Sentiment();
    const analysis = sentiment.analyze(text);

    setSentimentScore(analysis.score);
    setSentimentResult(analysis.score > 0 ? 'Positive' : analysis.score < 0 ? 'Negative' : 'Neutral');
    console.log(sentiment)
    let res = await senti.json()
    setfilteredText(res.censored)
  };

  return (
    <>
    <Navbar />
    <div className='flex'>
      <ChatBox text={text} analyzeSentiment={analyzeSentiment} sentimentScore={sentimentScore} sentimentResult={sentimentResult} handleTextChange={handleTextChange} />
      <Response sentimentScore={sentimentScore} sentimentResult={sentimentResult} filteredText={filteredText}/>
    </div>
    <Footer />
    </>
  );
};

export default SentimentAnalysis;