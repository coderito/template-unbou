import PropTypes from "prop-types"

export const TitleHome = ({children}) => {
  return (
    <h1 className="text-5xl md:text-7xl text-gray-800  md:leading-[5rem] font-medium">{children}</h1>
  )
}

TitleHome.propTypes = {
    children: PropTypes.string
};