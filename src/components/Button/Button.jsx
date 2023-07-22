import PropTypes from "prop-types";

import "./Button.css";

function Button({ children, ...otherProps }) {
  return (
    <button {...otherProps} className="button_container">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;