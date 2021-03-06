import { useState } from 'react';
import './App.css';

function App() {
  const placeholder = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  const marked = require("marked");

  const [editorText, setEditorText] = useState(placeholder);
  const [preview, setPreview] = useState(marked.parse(editorText));


  function handleChange(event) {
    setEditorText(event.target.value);
    let markdown = marked.parse(event.target.value);
    setPreview(markdown);
  }

  return (
    <main className="main">
      <div className="column">
        <h1>Write Here</h1>
        <textarea name="editor" id="editor"
          cols="30" rows="10"
          value={editorText}
          onChange={
            handleChange
          }
        ></textarea>
      </div>
      <div className="column">
        <h1>See here</h1>
        <div id="preview"
          dangerouslySetInnerHTML={
            {
              __html: preview
            }
          }
        >
        </div>
      </div>
    </main>
  );
}

export default App;
