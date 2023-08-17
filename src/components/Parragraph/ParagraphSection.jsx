import PropTypes from 'prop-types';

export const ParagraphSection = ({children}) => {
  return (
    <p className="2xl:px-80 pt-10 text-md md:text-lg text-gray-600 text-center pb-14">{children}</p>
  )
}

ParagraphSection.propTypes = {
    children: PropTypes.string
};