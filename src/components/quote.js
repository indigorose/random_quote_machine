import React from 'react';

const Quote = () => {
  return (
    <>
      <p>hi</p>
      <div className="main-container">
        <div id="quote-box" className="container--quote-box">
          {/* both quote and author is drawing randomly from the data of quotes */}
          <p id="text">random quote</p>
          <p id="author">author</p>
          {/* button should generate a new quote from data */}
          <button id="new-quote">New Quote</button>
          <button id="tweet-quote">
            <a
              href="twitter.com/intent/tweet"
              id="tweet-quote"
              target="_blank"
              ref="noreferrer"
            >
              tweet icon
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Quote;
