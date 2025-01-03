// UI LINK COMPONENT
// - href: link to the home page
// - className: additional class name for styling
// - type: text, background, and border
// - color: specified by the user can be a hex code or a defined colors
// - style: inline style for the link

function Link({ href, children, className, style, type = "text" }) {
  return (
    <a
      href={href}
      className={`link link-${type} ${className || ""}`}
      style={style}
    >
      {children}
    </a>
  );
}

export default Link;
