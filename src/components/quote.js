import React, { useState } from 'react';
import './quote.css';
import { data } from '../assets/data';
const Quote = () => {
  const [color, setColor] = useState('#103f45');
  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  // var randomNumber = Math.floor(Math.random() * 21)
  const [quotes, setQuotes] = useState(data);
  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setQuotes(randomNumber);
  };
  // TODO - Need to sort out the background and the text. - DONE!
  // TODO - Change the quote randomly. Data has already be added.

  return (
    <>
      <div className="container" style={{ backgroundColor: `${color}` }}>
        <div className="container--quote-box" id="quote-box">
          <p
            id="text"
            style={{ color: `${color}` }}
            key={quotes[generateNumber]}
          >
            {' '}
            {quotes[generateNumber]}
            {color}
          </p>
          <p id="author" style={{ color: `${color}` }}>
            author
          </p>
          <a
            href="http://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
          <button id="new-quote" onClick={generateColor}>
            New Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Quote;
