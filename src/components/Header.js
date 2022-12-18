import PropTypes from "prop-types";

const Header = ({ title }) => {

  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Calculator",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "red",
  backgroudColor: "black",
};
export default Header;
