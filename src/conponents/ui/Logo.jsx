import PropTypes from "prop-types";

// UI LOGO COMPONENT
// - href: link to the home page
// - className: additional class name for styling
// - fontSize: font size of the logo
// - color: color of the logo

function Logo({ fontSize = 48, className = "", color = "", href = "#" }) {
  const headingFontSize = `${fontSize / 10}rem`;
  const paragraphFontSize = `${fontSize / 3 / 10}rem`;

  return (
    <a href={href} className={`logo ${className}`}>
      <h3 style={{ fontSize: headingFontSize, color }}>WitWaves.</h3>
      <p
        style={{
          fontSize: paragraphFontSize,
          color,
          opacity: color ? 0.8 : 1,
        }}
      >
        / Diverse Thoughts, One Ocean
      </p>
    </a>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

export default Logo;
