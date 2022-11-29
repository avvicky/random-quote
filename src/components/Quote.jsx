import React from "react";
import { useState, useEffect } from "react";

let colors = [
  "#e9c46a",
  "#e76f51",
  "#2a9d8f",
  "#457b9d",
  "#118ab2",
  "#e07a5f",
  "#8338ec",
];

function Quote() {
  const [quote, setQuote] = useState([]);
  const color = colors[Math.floor(Math.random() * colors.length)];
  const tweet =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    encodeURIComponent('"' + quote.quote + '"' + quote.author);

  const fetchData = () => {
    return fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": "by3SEkrwb1egGdaUalWSTA==Hm8isy3NbQHrkUuo" },
    })
      .then((response) => response.json())
      .then((data) => setQuote(data[0]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  document.body.style.backgroundColor = color;
  return (
    <div id="container">
      <div id="quote-box">
        <h1 style={{ color: color }} id="text">
          {quote.quote}
        </h1>
        <h4 style={{ color: color }} id="author">
          {quote.author}
        </h4>
        <div id="buttons">
          <div className="tweet">
            <a id="tweet-quote" target="_top" href={tweet}>
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
          <button
            style={{ backgroundColor: color }}
            id="new-quote"
            onClick={fetchData}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
