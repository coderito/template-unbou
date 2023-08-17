import PropTypes from 'prop-types';

export const Paragraph = ({children}) => {
  return (
    <p className=" text-md md:text-lg text-gray-600">{children}</p>
  )
}

Paragraph.propTypes = {
    children: PropTypes.string || PropTypes.array
};