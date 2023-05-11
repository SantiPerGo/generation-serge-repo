// CSS import
import "../../styles/paragraphLink/paragraph-link.css";

// Prop types import
import PropTypes from "prop-types";

// Props (properties) communicates father components with son components
// Alternative for props: ({ href, color, children: text })
const ParagraphLink = props => {
  /*
    Desestructuring arrays and objects

    const [varA, , varB] = [23, 45, 67;
    const { varC, varD: varG } = { varC: val, varF: val, varG: val };
  */
  const { href, color = "gray", children: text } = props;

  // To change style we have to create a JS object
  const anchorStyles = {
    color: color,

    // CSS properties use camelCase and quotes
    marginTop: "5px"
  };

  const myParagraph = (
    // We need to have all the HTML tags in a father element
    // React fragment dissapear durint the website rendering
    // <> = <React.Fragment>
    <>
      {/* The {} brackets contains JS code */}
      <a href={href} target="_blank" style={anchorStyles}>
        <p className="content">{text}</p>
      </a>
    </>
  );

  return myParagraph;
};

ParagraphLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default ParagraphLink;
