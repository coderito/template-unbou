import PropTypes from 'prop-types';
import { Zoom } from 'react-awesome-reveal';

export const ParagraphPrice = ({children}) => {
  return (
    <Zoom duration={800} triggerOnce>
    <p className="2xl:px-80 pt-10 text-md md:text-lg text-gray-600 text-center pb-14">{children}</p>
    </Zoom>
  )
}

ParagraphPrice.propTypes = {
    children: PropTypes.string
};