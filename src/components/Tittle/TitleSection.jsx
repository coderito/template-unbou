import PropTypes from "prop-types"
import { Zoom } from "react-awesome-reveal";

export default function TitleSection({children}) {
  return (
    <Zoom duration={800} triggerOnce>
    <h2 className="text-6xl text-center text-neutral-800 font-medium text-gray">{children}</h2>
    </Zoom>
  )
}

TitleSection.propTypes = {
  children: PropTypes.string
};

