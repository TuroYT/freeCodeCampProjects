import React, { useState } from "react";
import "./App.css";
import Markdown from "marked-react";

const defaultMarkdown = `
# Header de taille H1

## Sous-header de taille H2

Voici un [lien](https://www.example.com).

Voici un exemple de \`code en ligne\`.

\`\`\`javascript
// Ceci est un bloc de code
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- Élément de liste

> Ceci est une citation.

![Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s)

**Texte en gras**
`;

function App() {
  const [textMarkdown, settextMarkdown] = useState(defaultMarkdown);

  const handlechange = (event) => {
    settextMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <textarea
        id="editor"
        onChange={handlechange}
        value={textMarkdown}
      ></textarea>

      <div id="preview">
        <Markdown>{textMarkdown}</Markdown>
      </div>

      <p
        style={{
          left: "50%",
          bottom: "10px",
          transform: "translateX(-50%)",
          textAlign: "center",
          position: "fixed",
        }}
      >
        Made with ❤️ by Romain PINSOLLE
      </p>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}

export default App;
