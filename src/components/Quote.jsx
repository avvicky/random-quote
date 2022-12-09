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

  function fetchData() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote([data.content, data.author]);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  document.body.style.backgroundColor = color;
  return (
    <div id="wrapper">
      <div id="container">
        <div id="quote-box">
          <h1 style={{ color: color }} id="text">
            {quote[0]}
          </h1>
          <h4 style={{ color: color }} id="author">
            {quote[1]}
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
        <div className="linkedin" style={{ backgroundColor: color }}>
          <a
            id="linkedin-link"
            target="blank"
            href="https://www.linkedin.com/in/vignesh-mernstack/"
          >
            <p>
              <i class="fa-brands fa-linkedin"></i>Degined and Devloped by
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Quote;
