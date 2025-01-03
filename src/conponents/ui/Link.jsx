import PropTypes from "prop-types";

// UI LINK COMPONENT
// - href: link to the home page
// - children: text to display
// - className: additional class name for styling
// - fontSize: font size fo link
// - textColor: color of the link
// - backgroundColor: background color of the link
// - borderColor: border of the link
// - padding: padding of the link

function Link({
  href = "#",
  children = "",
  className = "",
  fontSize = 18,
  textColor = "inherit",
  backgroundColor = "transparent",
  borderColor = null,
  padding = "0",
  borderRadius = "0",
}) {
  const style = {
    fontSize: `${fontSize / 10}rem`,
    color: textColor,
    backgroundColor,
    border: borderColor ? `1px solid ${borderColor}` : "none",
    padding,
    borderRadius,
  };

  return (
    <a href={href} className={`link ${className}`} style={style}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  fontSize: PropTypes.number,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Link;
