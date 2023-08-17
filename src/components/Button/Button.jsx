import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Button = ({children, to}) => {
  return (
    <Link to={to} className="justify-center  items-center px-8 py-3 rounded-sm bg-[#0033ff] hover:bg-blue-700 text-white">{children}</Link>
  )
}

Button.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string
};