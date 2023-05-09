// Props (properties) communicates father components with son components
const ParagraphLink = (props) => {
  /*
    Desestructuring arrays and objects

    const [varA, , varB] = [23, 45, 67;
    const { varC, varD: varG } = { varC: val, varF: val, varG: val };
  */
  const { href, color, children: text } = props;

  // To change style we have to create a JS object
  const anchorStyles = {
    textDecoration: "none",
    color: color,
    fontSize: "25px",
  };

  const myParagraph = (
    // React fragment dissapear durint the website rendering
    // <> = <React.Fragment>
    <>
      {/* The {} brackets contains JS code */}
      <a href={href} target="_blank" style={anchorStyles}>
        <p>{text}</p>
      </a>
    </>
  );

  return myParagraph;
};

export default ParagraphLink;
