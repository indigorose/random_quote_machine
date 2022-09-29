import React from 'react';
import './quote.css';

const Quote = () => {
  return (
    <>
      <div className="main-container">
        <div className="container--quote-box">
          <p id="text">random quote</p>
          <p id="author">author</p>
          <div className="container--quote-btn">
            <button id="tweet-quote">tweet icon</button>
            <button id="new-quote">New Quote</button>
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
