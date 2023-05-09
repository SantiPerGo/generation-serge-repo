import React from "react";
import Paragraph from "../paragraphLink/ParagraphLink";

export const SocialNetworks = () => {
  return (
    <>
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
    </>
  );
};
