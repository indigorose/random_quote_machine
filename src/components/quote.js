import React, { useState } from 'react';
import './quote.css';

const Quote = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  // const color = document.querySelector('.color');

  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // color.textContent = hexColor;
  // document.body.style.backgroundColor = hexColor;
  console.log(hexColor);

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const [color, setColor] = useState(false);
  // Need to sort out the background and the text.

  return (
    <>
      <div className="main-container">
        <div className="container--quote-box">
          <p id="text">random quote</p>
          <p id="author">author</p>
          <div className="container--quote-btn">
            <button id="tweet-quote">tweet icon</button>
            <button id="new-quote" onClick={handleClick}>
              New Quote
            </button>
          </div>
        </div>
      </div>
      {/* <a
          href="twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          ref="noreferrer"        </a>
        > */}
    </>
  );
};

export default Quote;
