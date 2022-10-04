import React, { useState } from 'react';
import './quote.css';
import { data } from '../assets/data';
const Quote = () => {
  const [color, setColor] = useState('#103f45');
  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  const [randomNumber, setRandomNumber] = useState(0);
  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setRandomNumber(randomNumber);
  };

  // TODO - Need to sort out the background and the text. - DONE!
  // TODO - Change the quote randomly. Data has already be added.- DONE!

  return (
    <>
      <div className="container" style={{ backgroundColor: `${color}` }}>
        <div className="container--quote-box" id="quote-box">
          <p id="text" style={{ color: `${color}` }}>
            {data[randomNumber].quote}
          </p>
          <p id="author" style={{ color: `${color}` }}>
            {data[randomNumber].name}
          </p>
          <a
            href="http://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
          <button
            id="new-quote"
            onClick={() => {
              generateColor();
              generateNumber();
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Quote;
