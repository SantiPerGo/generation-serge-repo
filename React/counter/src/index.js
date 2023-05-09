import React from "react";
import ReactDOM from "react-dom/client";
import Paragraph from "./components/ParagraphLink/ParagraphLink";

// Connection with the root div to render react components
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Strict mode checks if there is a syntax error
  <React.StrictMode>
    <Paragraph href="https://legacy.reactjs.org/" color="red">
      React legacy documentation link
    </Paragraph>

    <Paragraph href="https://www.youtube.com/" color="green">
      YouTube link
    </Paragraph>

    <Paragraph href="https://www.linkedin.com/" color="purple">
      LinkedIn link
    </Paragraph>

    <Paragraph href="#">False link one</Paragraph>
    <Paragraph href="#">False link two</Paragraph>
  </React.StrictMode>
);