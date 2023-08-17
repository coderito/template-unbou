import PropTypes from 'prop-types';

export const ButtonHome = ({children}) => {
  return (
    <button className="flex justify-center items-center px-8 py-7 rounded-sm bg-[#0033ff] hover:bg-blue-700 text-white">{children}</button>
  )
}

ButtonHome.propTypes = {
    children: PropTypes.string
};