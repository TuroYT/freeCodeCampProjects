import React, { useEffect, useState } from "react";
import "./App.css";
import { ReactComponent as TwitterIcon } from "./twitter.svg";

function App() {
  const [quoteContent, setQuoteContent] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const API_URL = "https://api.quotable.io/random";

  const doFetch = async () => {
    try {
      const result = await fetch(API_URL);
      const thisQuote = await result.json();
      console.log(thisQuote);
      setQuoteAuthor(thisQuote.author);
      setQuoteContent(thisQuote.content);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteContent}</p>
        <p id="author">{quoteAuthor}</p>
        <div className="interact">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              quoteContent + " - " + quoteAuthor
            )}`}
            id="tweet-quote"
            target="_BLANK"
            rel="noreferrer"
          >
            <TwitterIcon className="twitter-icon"></TwitterIcon>
          </a>
          <button onClick={doFetch} id="new-quote">
            New Quote
          </button>
        </div>
      </div>

      <p
        style={{
          position: "absolute",
          left: "50%",
          bottom: "10px",
          transform: "translateX(-50%)",
        }}
      >
        Made with ❤️ by Romain PINSOLLE
      </p>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}

export default App;
