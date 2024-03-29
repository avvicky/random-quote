import React from "react";
import { useState, useEffect } from "react";

let colors = [
  "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)",
  "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
  "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
  "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
  "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
  "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
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
  //
  useEffect(() => {
    fetchData();
  }, []);

  document.body.style.background = color;
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
              style={{ backgroundColor: "transparent" }}
              id="new-quote"
              onClick={fetchData}
            >
              New Quote
            </button>
          </div>
        </div>
        <div className="linkedin" style={{ background: "transparent" }}>
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
