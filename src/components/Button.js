import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroudColor: color }} className="btn">
      {text}
    </button>
  );
};

// Button.defaultprops = {
//  color :'steelblue',
// }

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;
